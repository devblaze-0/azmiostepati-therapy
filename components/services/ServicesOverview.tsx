import Image from "next/image";
import { services, type Locale } from "@/config/constants";
import styles from "./services-overview.module.css";

export function ServicesOverview({ locale }: { locale: Locale }) {
  return (
    <section className={styles.grid} aria-label="Service cards">
      {services.map((service) => (
        <article className={styles.card} key={service.slug}>
          <figure>
            <Image src={service.image} alt={service.title[locale]} width={800} height={600} sizes="(min-width: 1120px) 25vw, (min-width: 760px) 50vw, 100vw" />
            <figcaption>{service.sessions} sessions</figcaption>
          </figure>
          <header>
            <h3>{service.title[locale]}</h3>
            <p>{service.summary[locale]}</p>
          </header>
          <strong>{service.prices[locale]}</strong>
        </article>
      ))}
    </section>
  );
}
