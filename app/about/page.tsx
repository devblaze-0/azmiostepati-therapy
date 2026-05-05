import type { Metadata } from "next";
import { CallToAction } from "@/components/cta/CallToAction";
import { StructuredData } from "@/components/seo/StructuredData";
import { DEFAULT_LOCALE, dictionaries } from "@/config/constants";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  const dictionary = dictionaries[DEFAULT_LOCALE];

  return createPageMetadata({
    locale: DEFAULT_LOCALE,
    path: "/about",
    title: dictionary.about.title,
    description: dictionary.about.lead
  });
}

export default function AboutPage() {
  const dictionary = dictionaries[DEFAULT_LOCALE];

  return (
    <>
      <StructuredData locale={DEFAULT_LOCALE} />
      <section className="page-shell" aria-labelledby="about-title">
        <header className="section-header">
          <p className="eyebrow">{dictionary.nav.about}</p>
          <h1 id="about-title">{dictionary.about.title}</h1>
          <p>{dictionary.about.lead}</p>
        </header>
        <article>
          <p>{dictionary.about.body}</p>
        </article>
      </section>
      <CallToAction locale={DEFAULT_LOCALE} />
    </>
  );
}
