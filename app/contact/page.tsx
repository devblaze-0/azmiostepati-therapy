import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { DEFAULT_LOCALE, dictionaries } from "@/config/constants";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  const dictionary = dictionaries[DEFAULT_LOCALE];

  return createPageMetadata({
    locale: DEFAULT_LOCALE,
    path: "/contact",
    title: dictionary.contact.title,
    description: dictionary.contact.lead
  });
}

export default function ContactPage() {
  return (
    <>
      <StructuredData locale={DEFAULT_LOCALE} />
      <section className="page-shell">
        <ContactSection locale={DEFAULT_LOCALE} />
      </section>
    </>
  );
}
