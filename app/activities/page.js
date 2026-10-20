import Img from "@/components/Img";
import PageIntro from "@/components/PageIntro";
import CtaBand from "@/components/CtaBand";
import { activityGroups, slugify } from "@/data/site";
import s from "./activities.module.css";

export const metadata = {
  title: "Activities",
  description:
    "Massage, surfing, trekking, yoga, cooking classes, Balinese water blessings, cultural performances and day trips, arranged by the villa team.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageIntro
        variant="band"
        title="Activities and excursions"
        lead="This is Bali as it used to be, rich in culture and natural beauty whilst still offering a variety of local activities to keep you busy if desired."
        image="trekking"
        alt="Guests walking single file along a path through green rice fields"
        position="50% 30%"
      >
        <nav aria-label="Activity groups" className={s.jump}>
          {activityGroups.map((g) => (
            <a key={g.id} href={`#${g.id}`}>
              {g.title}
            </a>
          ))}
        </nav>
      </PageIntro>

      {activityGroups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`section ${gi % 2 === 1 ? "section--sand" : ""}`}
          aria-labelledby={`${group.id}-title`}
        >
          <div className="container">
            <div className={s.groupHead} data-reveal>
              <h2 id={`${group.id}-title`}>{group.title}</h2>
            </div>
            <ul className={s.list}>
              {group.items.map((item) => (
                <li key={item.title} id={slugify(item.title)} className={s.item} data-reveal>
                  <div className={`frame ${s.media}`}>
                    <Img name={item.image} alt={item.alt} sizes="(min-width: 1024px) 400px, (min-width: 640px) 75vw, 100vw" />
                  </div>
                  <div className={s.body}>
                    <div className={s.head}>
                      <h3>{item.title}</h3>
                      <p className={s.cost}>
                        <span className={s.costLabel}>Cost</span> {item.cost}
                      </p>
                    </div>
                    <p className="muted">{item.text}</p>
                    {item.detail && <p className={`small ${s.detail}`}>{item.detail}</p>}
                  </div>
                </li>
              ))}
            </ul>
            {gi === activityGroups.length - 1 && (
              <p className={`small muted ${s.note}`}>
                Costs are as published by the villa. Rp is Indonesian Rupiah and K means thousand. Accommodation rates
                are quoted separately in Australian dollars.
              </p>
            )}
          </div>
        </section>
      ))}

      <CtaBand
        title="Arrange activities for your stay"
        text="Our Villa Manager can help you arrange excursions, special activities and entertainment."
      />
    </>
  );
}
