"use client";

import { usePathname } from "next/navigation";
import { SUPPORTED_LOCALES } from "@/config/constants";
import { getLocaleFromPathname, localizePath } from "@/lib/i18n";
import styles from "./language-switcher.module.css";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const activeLocale = getLocaleFromPathname(pathname);

  return (
    <menu className={styles.switcher} aria-label="Language switcher">
      {SUPPORTED_LOCALES.map((locale) => (
        <li key={locale}>
          <a href={localizePath(pathname, locale)} hrefLang={locale} aria-current={locale === activeLocale ? "page" : undefined}>
            {locale.toUpperCase()}
          </a>
        </li>
      ))}
    </menu>
  );
}
