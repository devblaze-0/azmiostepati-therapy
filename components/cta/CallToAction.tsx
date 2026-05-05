import { business, dictionaries, type Locale } from "@/config/constants";
import styles from "./call-to-action.module.css";

export function CallToAction({ locale }: { locale: Locale }) {
  const dictionary = dictionaries[locale];

  return (
    <aside className={styles.cta} aria-label="Call to action">
      <h2>{dictionary.contact.title}</h2>
      <p>{dictionary.contact.lead}</p>
      <a className="button" href={business.phoneHref}>
        {business.phone}
      </a>
    </aside>
  );
}
