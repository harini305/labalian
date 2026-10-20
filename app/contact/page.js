import PageIntro from "@/components/PageIntro";
import CopyButton from "@/components/CopyButton";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { business, contact } from "@/data/site";
import s from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Email or call La Balian Villa and Retreat, and find directions to the villa near Balian Beach in Tabanan, west Bali.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact us"
        lead={contact.intro}
        image="g-entrance"
        alt="The garden path leading to the villa entrance"
      >
        <dl className={s.list}>
          <div>
            <dt>Email</dt>
            <dd>
              <span className={s.value}>{business.email}</span>
              <CopyButton value={business.email} label="email address" />
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <span className={s.value}>{business.phone}</span>
              <CopyButton value={business.phone} label="phone number" />
            </dd>
          </div>
          <div>
            <dt>Follow us</dt>
            <dd className={s.social}>
              <a href={business.facebook} target="_blank" rel="noopener noreferrer">
                Facebook <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens facebook.com in a new tab)</span>
              </a>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer">
                Instagram {business.instagramHandle} <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens instagram.com in a new tab)</span>
              </a>
            </dd>
          </div>
        </dl>
      </PageIntro>

      <section className="section section--sand" aria-label="Enquiry and directions">
        <div className={`container ${s.grid}`}>
          <div className={s.formWrap} data-reveal>
            <h2 className={s.h2}>Send an enquiry</h2>
            <ContactForm />
          </div>
          <div className={s.directions} data-reveal>
            <h2 className={s.h2}>Directions</h2>
            <p className="muted">{contact.directions}</p>
          </div>
        </div>
      </section>

      <section className={s.mapSection} aria-label="Map">
        <div className="container" data-reveal>
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
