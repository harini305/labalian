import Link from "next/link";
import Img from "@/components/Img";
import PageIntro from "@/components/PageIntro";
import CtaBand from "@/components/CtaBand";
import { villa, cookbook } from "@/data/site";
import s from "./villa.module.css";

export const metadata = {
  title: "The Villa",
  description:
    "Eight large ensuite bedrooms in an L-shaped villa around an infinity-edge pool overlooking the rice terraces, with a full team of staff and an in-house chef.",
};

const highlights = ["8 ensuite bedrooms", "Up to 20 guests", "Infinity-edge pool", "Yoga shala", "Massage hut"];

export default function VillaPage() {
  return (
    <>
      <PageIntro
        title="The villa"
        lead={villa.about[0]}
        image="villa-shape"
        alt="The L-shaped villa wrapping around the infinity pool"
        position="50% 55%"
      >
        <ul className={s.highlights}>
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </PageIntro>

      <section className="section section--sand" aria-labelledby="about-title">
        <div className={`container ${s.about}`}>
          <div className={s.aboutText} data-reveal>
            <h2 id="about-title">About the villa</h2>
            <div className="prose">
              {villa.about.slice(1).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link href="/gallery" className="text-link">
              See the rooms, pool and gardens
            </Link>
          </div>
          <div className={s.aboutMedia} data-reveal>
            <div className={`frame ${s.aboutMain}`}>
              <Img name="g-bedroom-2" alt="A king bedroom with garden views through tall windows" sizes="(min-width: 960px) 52vw, 100vw" />
            </div>
            <div className={`frame ${s.aboutSmall}`}>
              <Img name="g-bathroom-2" alt="An ensuite bathroom with a stone basin and garden window" sizes="(min-width: 960px) 26vw, 50vw" />
            </div>
            <div className={`frame ${s.aboutSmall}`}>
              <Img name="g-bedroom-8" alt="A bedroom with a king bed and an extra single bed" sizes="(min-width: 960px) 26vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="amenities-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="amenities-title">Features and facilities</h2>
          </div>
          {/* One balanced multi-column flow, so the columns always end level. */}
          <div className={s.amenities} data-reveal>
            {villa.amenities.map((group) => (
              <div key={group.title} className={s.group}>
                <h3 className={s.groupTitle}>{group.title}</h3>
                <ul className={s.amenityList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="staff-title">
        <div className={`container ${s.staff}`}>
          <div className={s.staffText} data-reveal>
            <h2 id="staff-title">Our staff</h2>
            <p className="muted">{villa.staff}</p>
          </div>
          <div className={s.staffMedia}>
            <div className={`frame ${s.staffWide}`} data-reveal>
              <Img name="staff" sizes="(min-width: 960px) 44vw, 100vw" alt="The La Balian team standing together by the pool" />
            </div>
            <div className={`frame ${s.staffTall}`} data-reveal>
              <Img name="team" sizes="(min-width: 960px) 18vw, 40vw" alt="Three members of the villa team in La Balian polo shirts" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="food-title">
        <div className={`container ${s.food}`}>
          <div className={s.foodText} data-reveal>
            <h2 id="food-title">Food and beverages</h2>
            <p className="muted">{villa.food}</p>
            <dl className={s.prices}>
              {villa.mealPrices.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={s.foodMedia}>
            <div className={`frame ${s.foodA}`} data-reveal>
              <Img name="breakfast" sizes="(min-width: 960px) 40vw, 100vw" alt="A breakfast table set with fruit, eggs and fresh juice" />
            </div>
            <div className={`frame ${s.foodB}`} data-reveal>
              <Img name="food-bowl" sizes="(min-width: 960px) 30vw, 75vw" alt="A dragon-fruit smoothie bowl topped with mango" />
            </div>
            <div className={`frame ${s.foodB}`} data-reveal>
              <Img name="bbq" sizes="(min-width: 960px) 30vw, 75vw" alt="Corn and seafood cooking on a barbecue grill" />
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight section section--sand">
        <div className={`container ${s.cook}`} data-reveal>
          <p className={s.cookLine}>{cookbook.lead}</p>
          <Link href="/cookbook" className="text-link">
            Family Cooking – Bali Style
          </Link>
        </div>
      </section>

      <CtaBand text="Exclusive use of all eight bedrooms for up to 20 guests, at $800 AUD per night." />
    </>
  );
}
