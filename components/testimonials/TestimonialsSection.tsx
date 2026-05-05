import type { Locale } from "@/config/constants";
import styles from "./testimonials-section.module.css";

const testimonials = {
  id: [
    {
      quote: "Dokumentasi progres membantu keluarga memahami perubahan postur dan latihan rumah.",
      person: "Keluarga pasien skoliosis"
    },
    {
      quote: "Struktur asesmen memudahkan kami melihat paket mana yang sesuai dengan jadwal seleksi.",
      person: "Peserta program kesiapan fisik"
    }
  ],
  en: [
    {
      quote: "Progress documentation helped our family understand posture changes and home exercises.",
      person: "Scoliosis patient family"
    },
    {
      quote: "The assessment structure made it easier to choose the right package for the selection timeline.",
      person: "Physical-readiness participant"
    }
  ]
} as const;

export function TestimonialsSection({ locale }: { locale: Locale }) {
  return (
    <section className={styles.grid} aria-label="Testimonials">
      {testimonials[locale].map((testimonial) => (
        <figure className={styles.quote} key={testimonial.person}>
          <blockquote>{testimonial.quote}</blockquote>
          <figcaption>{testimonial.person}</figcaption>
        </figure>
      ))}
    </section>
  );
}
