import { business, dictionaries, type Locale } from "@/config/constants";
import styles from "./hero-section.module.css";

export function HeroSection({ locale }: { locale: Locale }) {
  const dictionary = dictionaries[locale];

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <article className={styles.copy}>
        <p className="eyebrow">{dictionary.home.eyebrow}</p>
        <h1 id="hero-title">{dictionary.home.title}</h1>
        <p>{dictionary.home.lead}</p>
        <nav className="button-row" aria-label="Hero actions">
          <a className="button" href={business.phoneHref}>
            {dictionary.home.cta}
          </a>
          <a className="button secondary" href={`/${locale}/services`}>
            {dictionary.home.secondaryCta}
          </a>
        </nav>
      </article>
    </section>
  );
}
