"use client";

import { usePathname } from "next/navigation";
import { business } from "@/config/constants";
import { getDictionary, getLocaleFromPathname } from "@/lib/i18n";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const locale = getLocaleFromPathname(usePathname());
  const dictionary = getDictionary(locale);

  return (
    <footer className={styles.footer}>
      <section>
        <h2>{business.name}</h2>
        <p>{dictionary.footer.tagline}</p>
      </section>
      <address>
        <strong>{dictionary.footer.contact}</strong>
        <a href={business.phoneHref}>{business.phone}</a>
        <a href={`mailto:${business.email}`}>{business.email}</a>
        <p>{business.address}</p>
      </address>
    </footer>
  );
}
