import { DEFAULT_LOCALE, SUPPORTED_LOCALES, dictionaries, type Locale } from "@/config/constants";

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const [, ...rest] = segments;

  if (segments[0] && isLocale(segments[0])) {
    return `/${rest.join("/")}`.replace(/\/$/, "") || "/";
  }

  return pathname || "/";
}

export function localizePath(pathname: string, locale: Locale) {
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  return pathWithoutLocale === "/" ? `/${locale}` : `/${locale}${pathWithoutLocale}`;
}
