import { Inter, Source_Serif_4 } from "next/font/google";

export const bodyFont = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-primary",
  weight: ["400", "500", "600", "700", "800"]
});

export const headingFont = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-secondary",
  weight: ["600", "700"]
});
