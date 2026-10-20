"use client";

import { useRef, useState } from "react";
import { business } from "@/data/site";
import styles from "./ContactForm.module.css";

// Client-side demonstration form. Input is validated in the browser only;
// nothing is sent, stored or logged, and the fields are cleared on completion.

const EMPTY = { name: "", email: "", group: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address, like name@example.com.";
  if (v.group && (!/^\d+$/.test(v.group) || +v.group < 1 || +v.group > 20))
    e.group = "Group size should be a number from 1 to 20.";
  if (v.message.trim().length < 10) e.message = "Please write a short message (at least 10 characters).";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const formRef = useRef(null);
  const doneRef = useRef(null);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    setValues(EMPTY);
    setDone(true);
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  if (done) {
    return (
      <div className={styles.done} ref={doneRef} tabIndex={-1} role="status">
        <h3>Demo complete — your message was not sent</h3>
        <p>
          This form is a demonstration and is not connected to La Balian. Nothing you typed has been sent or saved,
          and the form has been cleared. To contact the villa, email <strong>{business.email}</strong>.
        </p>
        <button type="button" className="btn btn--ghost" onClick={() => setDone(false)}>
          Try the form again
        </button>
      </div>
    );
  }

  const field = (name, label, props = {}, hint) => (
    <div className={styles.field}>
      <label htmlFor={`cf-${name}`}>
        {label}
        {props.required === false && <span className={styles.optional}> (optional)</span>}
      </label>
      {hint && (
        <span id={`cf-${name}-hint`} className={styles.hint}>
          {hint}
        </span>
      )}
      {props.as === "textarea" ? (
        <textarea
          id={`cf-${name}`}
          name={name}
          rows={4}
          value={values[name]}
          onChange={set(name)}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
        />
      ) : (
        <input
          id={`cf-${name}`}
          name={name}
          type={props.type || "text"}
          inputMode={props.inputMode}
          autoComplete={props.autoComplete}
          value={values[name]}
          onChange={set(name)}
          aria-invalid={!!errors[name]}
          aria-describedby={[hint && `cf-${name}-hint`, errors[name] && `cf-${name}-err`].filter(Boolean).join(" ") || undefined}
        />
      )}
      {errors[name] && (
        <span id={`cf-${name}-err`} className={styles.error}>
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
      <p className="demo-note" role="note">
        <span>
          <strong>Demonstration form.</strong> Messages are not sent to the villa and nothing is stored.
        </span>
      </p>
      <div className={styles.row}>
        {field("name", "Name", { autoComplete: "name" })}
        {field("email", "Email", { type: "email", autoComplete: "email" })}
      </div>
      {field("group", "Group size", { required: false, inputMode: "numeric" }, "Up to 20 guests")}
      {field("message", "Message", { as: "textarea" })}
      <div>
        <button type="submit" className="btn">
          Check and finish demo
        </button>
      </div>
    </form>
  );
}
