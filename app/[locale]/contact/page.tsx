import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { dictionaries, type Locale } from "@/config/constants";
import { isLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeValue } = await params;
  const locale: Locale = isLocale(localeValue) ? localeValue : "id";
  const dictionary = dictionaries[locale];

  return createPageMetadata({
    locale,
    path: `/${locale}/contact`,
    title: dictionary.contact.title,
    description: dictionary.contact.lead
  });
}

export default async function LocalizedContactPage({ params }: PageProps) {
  const { locale: localeValue } = await params;
  const locale: Locale = isLocale(localeValue) ? localeValue : "id";

  return (
    <>
      <StructuredData locale={locale} />
      <section className="page-shell">
        <ContactSection locale={locale} />
      </section>
    </>
  );
}
