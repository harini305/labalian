import Img from "@/components/Img";
import BookingDemo from "@/components/BookingDemo";
import CopyButton from "@/components/CopyButton";
import { rates, business } from "@/data/site";
import s from "./rates.module.css";

export const metadata = {
  title: "Rates and Reservations",
  description:
    "$800 AUD per night for exclusive use of all eight bedrooms, with a minimum stay of two nights. Service inclusions, booking terms and how to enquire.",
};

export default function RatesPage() {
  return (
    <>
      <header className={`container ${s.intro}`}>
        <div className={s.introText}>
          <h1 data-intro>Rates and reservations</h1>
          <p className="lead" data-intro>
            {rates.currencyNote}
          </p>
        </div>
        <div className={s.rateCard} data-intro>
          <p className={s.price}>
            {rates.price} <span>{rates.unit}</span>
          </p>
          <p className={s.basis}>{rates.basis}</p>
          <dl className={s.rateList}>
            <div>
              <dt>Minimum stay</dt>
              <dd>2 nights</dd>
            </div>
            <div>
              <dt>Check-in</dt>
              <dd>{rates.checkIn}</dd>
            </div>
            <div>
              <dt>Check-out</dt>
              <dd>12:00 noon</dd>
            </div>
            <div>
              <dt>Weddings</dt>
              <dd>Additional event fee — contact us for details</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="section section--mist" aria-labelledby="inclusions-title">
        <div className={`container ${s.inclusions}`}>
          <div data-reveal>
            <h2 id="inclusions-title">Service inclusions</h2>
            <ul className={`list-ruled ${s.incList}`}>
              {rates.inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={`small ${s.pending}`}>{rates.breakfastNote}</p>
          </div>
          <div className={`frame ${s.incMedia}`} data-reveal>
            <Img
              name="dining-terrace"
              sizes="(min-width: 960px) 72vw, 100vw"
              alt="The covered dining terrace beside the infinity pool"
            />
          </div>
        </div>
      </section>

      <section id="enquire" className="section" aria-labelledby="enquire-title">
        <div className="container">
          <div className={s.enquireHead} data-reveal>
            <h2 id="enquire-title">Plan an enquiry</h2>
            <p className="muted">
              Try the planner to see how a stay at the published rate adds up. Real bookings are made by email: the
              villa replies with an invoice and payment instructions.
            </p>
          </div>
          <BookingDemo />
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="terms-title">
        <div className={`container ${s.terms}`}>
          <div className={s.termsSide} data-reveal>
            <h2 id="terms-title">Booking terms and conditions</h2>
            {/* Summary of the published payment terms (see the full wording alongside). */}
            <ol className={s.schedule}>
              <li>
                <span className={s.step}>50%</span>
                <span>Deposit within 3 working days of the invoice</span>
              </li>
              <li>
                <span className={s.step}>25%</span>
                <span>Due 60 days before arrival</span>
              </li>
              <li>
                <span className={s.step}>Balance</span>
                <span>Full payment due 30 days before arrival</span>
              </li>
            </ol>
            <p className="small muted">Paid by PayPal, direct transfer to an Indonesian bank account, or cash if agreed by all parties.</p>
          </div>
          <div className={s.accordion} data-reveal>
            {rates.terms.map((t) => (
              <details key={t.title} className={s.term}>
                <summary>{t.title}</summary>
                <div className={`prose ${s.termBody}`}>
                  {t.body?.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                  {t.list && (
                    <ul>
                      {t.list.map((li) => (
                        <li key={li.slice(0, 24)}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={s.emailBand} aria-labelledby="email-title">
        <div className={`container ${s.emailInner}`} data-reveal>
          <h2 id="email-title" className={s.emailTitle}>
            For enquiries and reservations, email us at <span className={s.address}>{business.email}</span>
          </h2>
          <CopyButton value={business.email} text="Copy email address" />
        </div>
      </section>
    </>
  );
}
