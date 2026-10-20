import Img from "@/components/Img";
import CookbookDemo from "@/components/CookbookDemo";
import CtaBand from "@/components/CtaBand";
import { cookbook, home } from "@/data/site";
import s from "./cookbook.module.css";

export const metadata = {
  title: "Cookbook — Family Cooking Bali Style",
  description:
    "Family Cooking – Bali Style: recipes by the team at La Balian Villa and Retreat, in e-book and magazine-book editions.",
};

export default function CookbookPage() {
  return (
    <>
      <header className={`container ${s.intro}`}>
        <div className={`frame ${s.cover}`} data-intro="media">
          <Img name="cookbook-cover" priority sizes="(min-width: 960px) 360px, 70vw" alt="Cover of the cookbook Family Cooking – Bali Style, by the team at La Balian Villa and Retreat" />
        </div>
        <div className={s.introText}>
          <h1 data-intro>{cookbook.title}</h1>
          <p className="lead" data-intro>
            {home.cookbook}
          </p>
          <p className="muted" data-intro>
            {cookbook.lead}
          </p>
        </div>
      </header>

      <section className="section section--sand" aria-labelledby="editions-title">
        <div className="container">
          <h2 id="editions-title" className={s.h2} data-reveal>
            Editions
          </h2>
          <div data-reveal>
            <CookbookDemo />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
