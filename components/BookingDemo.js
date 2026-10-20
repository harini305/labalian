"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import CopyButton from "./CopyButton";
import { business } from "@/data/site";
import styles from "./BookingDemo.module.css";

// Frontend-only enquiry demonstration. It is NOT connected to the villa's
// availability calendar (the original iCal source is unknown), does not
// check availability, sends nothing and stores nothing.

const RATE = 800; // AUD per night, whole villa (published rate)
const MIN_NIGHTS = 2;
const DAY = 86400000;
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const sameDay = (a, b) => a && b && a.getTime() === b.getTime();
const nightsBetween = (a, b) => Math.round((b - a) / DAY);
const fmtLong = (d) => d.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
const fmtMonth = (d) => d.toLocaleDateString("en-AU", { month: "long", year: "numeric" });
const fmtAud = (n) => "$" + n.toLocaleString("en-AU") + " AUD";

function monthGrid(year, month) {
  const first = new Date(year, month, 1);
  const lead = (first.getDay() + 6) % 7; // Monday-first
  const days = new Date(year, month + 1, 0).getDate();
  const cells = Array(lead).fill(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(year, month, d));
  return cells;
}

export default function BookingDemo() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const maxDate = useMemo(() => addDays(today, 540), [today]);
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [hover, setHover] = useState(null);
  const [focusDate, setFocusDate] = useState(today);
  const [guests, setGuests] = useState("");
  const [step, setStep] = useState("select"); // select | review | done
  const [showErrors, setShowErrors] = useState(false);
  const gridRef = useRef(null);
  const headingRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Dates depend on the visitor's clock/timezone, so the planner renders client-side only.
  useEffect(() => setMounted(true), []);

  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
  const tooShort = checkIn && checkOut && nights < MIN_NIGHTS;
  const ready = checkIn && checkOut && !tooShort && guests;

  const months = [view, new Date(view.getFullYear(), view.getMonth() + 1, 1)];
  const canPrev = view > new Date(today.getFullYear(), today.getMonth(), 1);
  const canNext = months[1] < new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);

  const disabled = (d) => d < today || d > maxDate;

  function pick(d) {
    if (disabled(d)) return;
    setFocusDate(d);
    if (!checkIn || checkOut || d <= checkIn) {
      setCheckIn(d);
      setCheckOut(null);
    } else {
      setCheckOut(d);
    }
  }

  function moveFocus(d) {
    if (d < today || d > maxDate) return;
    setFocusDate(d);
    const first = new Date(d.getFullYear(), d.getMonth(), 1);
    const twoUp = window.matchMedia("(min-width: 900px)").matches; // second month hidden on small screens
    const lastShown = twoUp ? months[1] : months[0];
    if (first < months[0]) setView(first);
    else if (first > lastShown) setView(twoUp ? new Date(d.getFullYear(), d.getMonth() - 1, 1) : first);
    requestAnimationFrame(() => gridRef.current?.querySelector(`[data-date="${d.getTime()}"]`)?.focus());
  }

  function showMonth(n) {
    const next = new Date(view.getFullYear(), view.getMonth() + n, 1);
    setView(next);
    setFocusDate(next < today ? today : next);
  }

  function onGridKey(e) {
    const map = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    if (map[e.key]) {
      e.preventDefault();
      moveFocus(addDays(focusDate, map[e.key]));
    } else if (e.key === "Home") {
      e.preventDefault();
      moveFocus(addDays(focusDate, -((focusDate.getDay() + 6) % 7)));
    } else if (e.key === "End") {
      e.preventDefault();
      moveFocus(addDays(focusDate, 6 - ((focusDate.getDay() + 6) % 7)));
    }
  }

  function goTo(next) {
    setStep(next);
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  function reset() {
    setCheckIn(null);
    setCheckOut(null);
    setGuests("");
    setShowErrors(false);
    goTo("select");
  }

  // Focusable date: the tracked focus date if visible, otherwise the first enabled day shown.
  const visible = (d) => d >= months[0] && d < new Date(months[1].getFullYear(), months[1].getMonth() + 1, 1);
  const firstEnabled = months[0] < today ? today : months[0];
  const tabTarget = visible(focusDate) && !disabled(focusDate) ? focusDate : firstEnabled;

  const rangeEnd = checkOut || (checkIn && hover && hover > checkIn ? hover : null);

  const summary = checkIn && checkOut
    ? `Enquiry for La Balian Villa and Retreat\nCheck-in: ${fmtLong(checkIn)}\nCheck-out: ${fmtLong(checkOut)}\nNights: ${nights}\nGuests: ${guests}`
    : "";

  return (
    <div className={styles.demo}>
      <p className="demo-note" role="note">
        <span>
          <strong>Demonstration only.</strong> This planner is not connected to the villa&rsquo;s booking calendar,
          does not show real availability and does not send anything. No reservation can be made here.
        </span>
      </p>

      {!mounted && <div className={styles.placeholder} aria-hidden="true" />}

      {mounted && step === "select" && (
        <div className={styles.panel}>
          <h3 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>
            Choose sample dates and your group size
          </h3>

          <div className={styles.calHead}>
            <button
              type="button"
              className={styles.monthBtn}
              onClick={() => showMonth(-1)}
              disabled={!canPrev}
              aria-label="Previous month"
            >
              <span aria-hidden="true">←</span>
            </button>
            <p className={styles.selection} aria-live="polite">
              {!checkIn && "Select a check-in date"}
              {checkIn && !checkOut && `Check-in ${fmtLong(checkIn)} — now select check-out`}
              {checkIn && checkOut && `${nights} ${nights === 1 ? "night" : "nights"} selected`}
            </p>
            <button
              type="button"
              className={styles.monthBtn}
              onClick={() => showMonth(1)}
              disabled={!canNext}
              aria-label="Next month"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className={styles.months} ref={gridRef} onKeyDown={onGridKey} onMouseLeave={() => setHover(null)}>
            {months.map((m, mi) => (
              <div key={m.getTime()} className={`${styles.month} ${mi === 1 ? styles.second : ""}`}>
                <p className={styles.monthName} id={`month-${mi}`}>
                  {fmtMonth(m)}
                </p>
                <div className={styles.week} aria-hidden="true">
                  {WEEKDAYS.map((w) => (
                    <span key={w}>{w}</span>
                  ))}
                </div>
                <div className={styles.days} role="group" aria-labelledby={`month-${mi}`}>
                  {monthGrid(m.getFullYear(), m.getMonth()).map((d, i) => {
                    if (!d) return <span key={`e${i}`} />;
                    const off = disabled(d);
                    const isStart = sameDay(d, checkIn);
                    const isEnd = sameDay(d, checkOut);
                    const inRange = checkIn && rangeEnd && d > checkIn && d < rangeEnd;
                    const isTab = sameDay(d, tabTarget);
                    return (
                      <button
                        key={d.getTime()}
                        type="button"
                        data-date={d.getTime()}
                        className={styles.day}
                        data-start={isStart || undefined}
                        data-end={isEnd || undefined}
                        data-range={inRange || undefined}
                        data-today={sameDay(d, today) || undefined}
                        disabled={off}
                        tabIndex={isTab ? 0 : -1}
                        aria-pressed={isStart || isEnd}
                        aria-label={`${fmtLong(d)}${isStart ? ", check-in" : ""}${isEnd ? ", check-out" : ""}`}
                        onClick={() => pick(d)}
                        onMouseEnter={() => setHover(d)}
                        onFocus={() => setFocusDate(d)}
                      >
                        {d.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <label className={styles.field}>
              <span>Guests</span>
              <select value={guests} onChange={(e) => setGuests(e.target.value)} aria-invalid={showErrors && !guests}>
                <option value="">Select</option>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className="btn"
              onClick={() => (ready ? goTo("review") : setShowErrors(true))}
            >
              Review enquiry
            </button>
            {(checkIn || guests) && (
              <button type="button" className={styles.clear} onClick={reset}>
                Clear
              </button>
            )}
          </div>

          <div aria-live="polite" className={styles.errors}>
            {tooShort && <p>A minimum of 2 nights is required per stay. Please choose a later check-out date.</p>}
            {showErrors && !checkIn && <p>Select a check-in date.</p>}
            {showErrors && checkIn && !checkOut && <p>Select a check-out date.</p>}
            {showErrors && !guests && <p>Select the number of guests (up to 20).</p>}
          </div>
        </div>
      )}

      {step === "review" && (
        <div className={styles.panel}>
          <h3 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>
            Review your sample enquiry
          </h3>
          <dl className={styles.summary}>
            <div>
              <dt>Check-in</dt>
              <dd>{fmtLong(checkIn)}, from 2:00 PM</dd>
            </div>
            <div>
              <dt>Check-out</dt>
              <dd>{fmtLong(checkOut)}, by 12:00 noon</dd>
            </div>
            <div>
              <dt>Length of stay</dt>
              <dd>{nights} nights</dd>
            </div>
            <div>
              <dt>Guests</dt>
              <dd>{guests}</dd>
            </div>
            <div>
              <dt>Accommodation at the published rate</dt>
              <dd>
                {nights} × {fmtAud(RATE)} = <strong>{fmtAud(nights * RATE)}</strong>
              </dd>
            </div>
          </dl>
          <p className="small muted">
            Indicative only. Meals, activities, transfers, extra beds and any event fee are not included, and the
            availability of these dates has not been checked. The villa confirms the final amount by invoice.
          </p>
          <div className={styles.controls}>
            <button type="button" className="btn btn--ghost" onClick={() => goTo("select")}>
              Change details
            </button>
            <button type="button" className="btn" onClick={() => goTo("done")}>
              Finish demo
            </button>
          </div>
        </div>
      )}

      {step === "done" && (
        <div className={`${styles.panel} ${styles.done}`}>
          <h3 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>
            Demo finished — no reservation has been made
          </h3>
          <p>
            Nothing has been sent to La Balian and no dates are being held. To make a real enquiry, email the villa
            at <strong>{business.email}</strong> with your dates and group size.
          </p>
          <pre className={styles.summaryText}>{summary}</pre>
          <div className={styles.controls}>
            <CopyButton value={summary} text="Copy enquiry details" />
            <CopyButton value={business.email} text="Copy email address" />
            <button type="button" className={styles.clear} onClick={reset}>
              Start again
            </button>
          </div>
          <p className="small muted">Copy buttons place text on your clipboard only.</p>
        </div>
      )}
    </div>
  );
}
