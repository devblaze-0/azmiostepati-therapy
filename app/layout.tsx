import type { Metadata, Viewport } from "next";
import { bodyFont, headingFont } from "@/config/fonts";
import { DEFAULT_LOCALE, dictionaries } from "@/config/constants";
import { createPageMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/header/SiteHeader";
import { SiteFooter } from "@/components/footer/SiteFooter";
import "@/styles/globals.css";

export function generateMetadata(): Metadata {
  const dictionary = dictionaries[DEFAULT_LOCALE];

  return createPageMetadata({
    locale: DEFAULT_LOCALE,
    path: "/",
    title: dictionary.home.title,
    description: dictionary.home.lead
  });
}

export const viewport: Viewport = {
  themeColor: "#127a7c",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
