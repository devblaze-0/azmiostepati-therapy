"use client";

import { usePathname } from "next/navigation";
import { business } from "@/config/constants";
import { getDictionary, getLocaleFromPathname } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import styles from "./site-header.module.css";

const routeKeys = ["home", "about", "services", "contact"] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  const routes = {
    home: `/${locale}`,
    about: `/${locale}/about`,
    services: `/${locale}/services`,
    contact: `/${locale}/contact`
  };

  return (
    <header className={styles.header}>
      <a className="skip-link" href="#content">
        {dictionary.skip}
      </a>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.brand} href={routes.home} aria-label={business.name}>
          <strong>{business.shortName}</strong>
          <small>Therapy & Training Center</small>
        </a>
        <menu className={styles.links}>
          {routeKeys.map((key) => (
            <li key={key}>
              <a href={routes[key]}>{dictionary.nav[key]}</a>
            </li>
          ))}
        </menu>
        <menu className={styles.actions}>
          <li>
            <LanguageSwitcher />
          </li>
          <li>
            <a className="button" href={business.phoneHref}>
              {business.phone}
            </a>
          </li>
        </menu>
      </nav>
    </header>
  );
}
