import { business, dictionaries, type Locale } from "@/config/constants";
import { ContactForm } from "./ContactForm";
import styles from "./contact-section.module.css";

export function ContactSection({ locale }: { locale: Locale }) {
  const dictionary = dictionaries[locale];

  return (
    <section className={styles.grid} aria-label={dictionary.contact.title}>
      <article className={styles.details}>
        <h2>{dictionary.contact.title}</h2>
        <p>{dictionary.contact.lead}</p>
        <address>
          <strong>{business.shortName}</strong>
          <a href={business.phoneHref}>{business.phone}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
          <p>{business.address}</p>
          <p>{business.hours[locale]}</p>
        </address>
      </article>
      <ContactForm locale={locale} />
    </section>
  );
}
