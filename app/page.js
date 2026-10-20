import Link from "next/link";
import Img from "@/components/Img";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { home, retreats, activityGroups, cookbook, slugify } from "@/data/site";
import s from "./home.module.css";

const highlights = [
  ["Massage and Spa Services", "massage", "A guest receiving a back massage"],
  ["Yoga", "yoga-class", "A yoga class lying on mats in the open-sided shala"],
  ["Cooking classes", "cooking", "Guests photographing dishes made during a cooking class"],
  ["Balinese Water Blessing", "water-blessing", "A group of guests dressed in traditional Balinese clothing"],
];

const allActivities = activityGroups.flatMap((g) => g.items.map((i) => i.title));

export default function Home() {
  return (
    <>
      <section className={s.hero}>
        <div className={`container ${s.heroGrid}`}>
          <div className={s.heroText}>
            <h1 className={s.title} data-intro>
              La Balian <em>Villa and Retreat</em>
            </h1>
            <p className="lead" data-intro>
              An eight-bedroom villa in a working rice field, five minutes&rsquo; drive from Balian Beach on the
              west coast of Bali — with full and exclusive use for your group.
            </p>
            <div className="btn-row" data-intro>
              <Link href="/rates-and-reservations#enquire" className="btn">
                Plan your stay
              </Link>
              <Link href="/the-villa" className="btn btn--ghost">
                Explore the villa
              </Link>
            </div>
          </div>
          <div className={`frame ${s.heroMedia}`} data-intro="media">
            <Img
              name="villa-pool"
              priority
              sizes="(min-width: 960px) 56vw, 100vw"
              alt="The infinity pool and white villa pavilions framed by coconut palms"
              position="50% 60%"
            />
          </div>
        </div>

        <div className="container">
          <dl className={s.facts} data-intro>
            <div>
              <dt>Bedrooms</dt>
              <dd>8 ensuite</dd>
            </div>
            <div>
              <dt>Guests</dt>
              <dd>Up to 20</dd>
            </div>
            <div>
              <dt>Booking</dt>
              <dd>Exclusive use</dd>
            </div>
            <div>
              <dt>Rate</dt>
              <dd>
                $800 AUD <span>per night, 2-night minimum</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.welcome}`}>
          <h2 data-reveal>Welcome to La Balian Villa and Retreat</h2>
          <p className="lead" data-reveal>
            {home.welcome}
          </p>
        </div>
      </section>

      <section className={s.area} aria-labelledby="area-title">
        <div className={`frame ${s.areaMedia}`} data-parallax>
          <Img name="area-palms" sizes="(max-width: 767px) 160vw, 100vw" alt="Sunlight through the coconut palms beside the villa" position="50% 40%" />
        </div>
        <div className="container">
          <div className={s.areaPanel} data-reveal>
            <div className={s.areaLead}>
              <h2 id="area-title">The area</h2>
              <p>{home.area[0]}</p>
            </div>
            <p className={s.areaBody}>{home.area[1]}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.villa}`}>
          <div className={s.portraits}>
            <div className={`frame ${s.portrait}`} data-reveal>
              <Img name="priest" sizes="(min-width: 960px) 26vw, 50vw" alt="A Balinese priest ringing a ceremonial bell" />
            </div>
            <div className={`frame ${s.portrait}`} data-reveal>
              <Img name="offering" sizes="(min-width: 960px) 26vw, 50vw" alt="An elderly Balinese woman holding a flower offering" />
            </div>
          </div>
          <div className={s.villaText} data-reveal>
            <h2>The villa</h2>
            <p className="muted">{home.villa}</p>
            <Link href="/the-villa" className="text-link">
              About the villa and services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className={s.rowHead} data-reveal>
            <h2>Activities and local culture</h2>
            <Link href="/activities" className="text-link">
              All {allActivities.length} activities and prices
            </Link>
          </div>
          <ul className={s.tiles}>
            {highlights.map(([title, image, alt]) => (
              <li key={title} data-reveal>
                <Link href={`/activities#${slugify(title)}`} className={s.tile}>
                  <span className={`frame ${s.tileMedia}`}>
                    <Img name={image} alt={alt} sizes="(min-width: 768px) 40vw, 85vw" />
                  </span>
                  <span className={s.tileTitle}>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.retreats}`}>
          <div className={`frame ${s.retreatsMedia}`} data-reveal>
            <Img name="shala" sizes="(min-width: 960px) 50vw, 100vw" alt="The open-sided bamboo yoga shala in morning light" />
          </div>
          <div className={s.retreatsText} data-reveal>
            <h2>Retreats and small weddings</h2>
            <p className="muted">{retreats.yoga[0]}</p>
            <p className="muted">{retreats.weddings}</p>
            <Link href="/retreats-and-weddings" className="text-link">
              Retreats and weddings
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className={`container ${s.cookbook}`}>
          <div className={`frame ${s.cookbookMedia}`} data-reveal>
            <Img name="cookbook-cover" sizes="(min-width: 768px) 320px, 82vw" alt="Cover of the cookbook Family Cooking – Bali Style" />
          </div>
          <div className={s.cookbookText} data-reveal>
            <h2>Family Cooking – Bali Style</h2>
            <p className="muted">{home.cookbook}</p>
            <dl className={s.editions}>
              {cookbook.products.map((p) => (
                <div key={p.id}>
                  <dt>{p.name}</dt>
                  <dd>${p.price.toFixed(2)}</dd>
                </div>
              ))}
            </dl>
            <Link href="/cookbook" className="text-link">
              See the cookbook
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="reviews-title">
        <div className="container" data-reveal>
          <Testimonials titleId="reviews-title" title="What our guests say" />
        </div>
      </section>

      <CtaBand text="$800 AUD per night for the whole villa, with a minimum stay of two nights. All prices include government taxes and service charges." />
    </>
  );
}
