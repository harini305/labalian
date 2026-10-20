import Img from "@/components/Img";
import PageIntro from "@/components/PageIntro";
import CtaBand from "@/components/CtaBand";
import { retreats } from "@/data/site";
import s from "./retreats.module.css";

export const metadata = {
  title: "Yoga Retreats and Weddings",
  description:
    "A yoga shala, mats, bolsters, blocks and straps, with accommodation, meals and massages for retreat groups of up to 20 — and an intimate setting for small weddings.",
};

export default function RetreatsPage() {
  return (
    <>
      <PageIntro
        variant="band"
        title="Yoga and wellness retreats"
        lead={retreats.yoga[0]}
        image="shala"
        alt="The open-sided bamboo yoga shala surrounded by tropical garden"
        position="50% 55%"
      />

      <section className="section">
        <div className={`container ${s.yoga}`}>
          <div className={`prose ${s.yogaText}`} data-reveal>
            <p className="lead">{retreats.yoga[1]}</p>
            <p>{retreats.yoga[2]}</p>
            <p className={s.contactLine}>Contact us to discuss your specific requirements.</p>
          </div>
          <div className={s.mosaic}>
            <div className={`frame ${s.mA}`} data-reveal>
              <Img name="restorative" sizes="(min-width: 960px) 52vw, 100vw" alt="A restorative yoga class resting on bolsters in the shala" />
            </div>
            <div className={`frame ${s.mB}`} data-reveal>
              <Img name="circle" sizes="(min-width: 960px) 32vw, 95vw" alt="A retreat group sitting in a circle in the shala" />
            </div>
            <div className={`frame ${s.mB}`} data-reveal>
              <Img name="adjust" sizes="(min-width: 960px) 32vw, 95vw" alt="A yoga teacher adjusting a student's pose" />
            </div>
          </div>
        </div>
      </section>

      <section id="weddings" className="section section--sand" aria-labelledby="weddings-title">
        <div className={`container ${s.weddings}`}>
          <div className={`frame ${s.weddingMedia}`} data-reveal>
            <Img name="g-night-sky" sizes="(min-width: 960px) 50vw, 100vw" alt="Poolside dining tables set out at dusk under the palms" />
          </div>
          <div className={s.weddingText} data-reveal>
            <h2 id="weddings-title">Weddings and special events</h2>
            <p className="muted">{retreats.weddings}</p>
            <p className={`small ${s.fee}`}>{retreats.eventFee}</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Plan a retreat or celebration"
        text="Tell us about your group, your dates and what you have in mind."
        primary={{ href: "/contact", label: "Contact the villa" }}
        secondary={{ href: "/rates-and-reservations", label: "Rates and terms" }}
      />
    </>
  );
}
