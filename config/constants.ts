export const SUPPORTED_LOCALES = ["id", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "id";
const rawBusinessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "0851-6180-5951";

export const business = {
  name: "AzmiOstepati Therapy dan Training Center",
  shortName: "AzmiOstepati Palembang",
  phone: rawBusinessPhone,
  phoneHref: toTelHref(rawBusinessPhone),
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "azmiOstepati21@gmail.com",
  address:
    process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ??
    "Bom Baru Palembang, Jl. Letkol Nuramin, Lawang Kidul, Ilir Timur I, Palembang",
  hours: {
    id: "Setiap hari 08.00-20.00 WIB",
    en: "Daily 08:00-20:00 WIB",
    schema: {
      opens: "08:00",
      closes: "20:00"
    }
  },
  geo: {
    latitude: -2.9761,
    longitude: 104.7754
  },
  socialImage: "/cases/pdf-page-05-01-web.jpg"
} as const;

function toTelHref(phone: string) {
  const normalized = phone.replace(/[^\d+]/g, "");

  if (normalized.startsWith("+")) {
    return `tel:${normalized}`;
  }

  if (normalized.startsWith("0")) {
    return `tel:+62${normalized.slice(1)}`;
  }

  return `tel:${normalized}`;
}

export const services = [
  {
    slug: "scoliosis-treatment",
    image: "/cases/pdf-page-05-01-web.jpg",
    sessions: "16-25",
    prices: {
      id: "Rp 12,5-22,5 juta",
      en: "Rp 12.5-22.5 million"
    },
    title: {
      id: "Terapi Skoliosis",
      en: "Scoliosis Treatment"
    },
    summary: {
      id: "Program koreksi Cobb angle <20° dan >20° dengan asesmen, reposisi manual, brace, dan monitoring.",
      en: "Correction pathways for Cobb angles below and above 20 degrees using assessment, manual repositioning, bracing, and monitoring."
    }
  },
  {
    slug: "height-increase",
    image: "/cases/pdf-page-03-01-web.jpg",
    sessions: "8-24",
    prices: {
      id: "Rp 5,5-15,5 juta",
      en: "Rp 5.5-15.5 million"
    },
    title: {
      id: "Program Tinggi Badan",
      en: "Height Increase Program"
    },
    summary: {
      id: "Paket 8, 16, dan 24 sesi untuk optimasi postur, mobility, dan kesiapan seleksi fisik.",
      en: "8, 16, and 24-session packages for posture optimization, mobility, and physical-readiness goals."
    }
  },
  {
    slug: "stroke-rehabilitation",
    image: "/cases/pdf-page-04-01-web.jpg",
    sessions: "4 weeks",
    prices: {
      id: "Rp 50 juta",
      en: "Rp 50 million"
    },
    title: {
      id: "Rehabilitasi Stroke",
      en: "Stroke Rehabilitation"
    },
    summary: {
      id: "Program intensif untuk pemulihan fungsi motorik, gait, bicara, dan kemandirian aktivitas harian.",
      en: "An intensive program supporting motor recovery, gait, speech, and daily independence."
    }
  },
  {
    slug: "xo-leg-correction",
    image: "/cases/pdf-page-06-01-web.jpg",
    sessions: "16",
    prices: {
      id: "Mulai Rp 12,5 juta",
      en: "From Rp 12.5 million"
    },
    title: {
      id: "Koreksi Kaki X/O",
      en: "X/O Leg Correction"
    },
    summary: {
      id: "Alignment kaki X/O dengan brace, mobilisasi sendi, myofascial release, stretching, dan latihan otot.",
      en: "X/O leg alignment with bracing, joint mobilization, myofascial release, stretching, and muscle training."
    }
  }
] as const;

export const dictionaries = {
  id: {
    localeName: "Bahasa Indonesia",
    alternateLocaleName: "English",
    skip: "Lewati ke konten utama",
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      contact: "Kontak"
    },
    footer: {
      tagline: "Terapi fisik, koreksi postur, dan pelatihan penanganan skoliosis.",
      contact: "Kontak cepat"
    },
    home: {
      eyebrow: "Terapi dan training center",
      title: "AzmiOstepati Therapy dan Training Center",
      lead:
        "Fondasi website bilingual untuk layanan terapi fisik, koreksi postur, skoliosis, tinggi badan, rehabilitasi stroke, dan kaki X/O.",
      cta: "Telepon konsultasi",
      secondaryCta: "Lihat layanan",
      proofEyebrow: "Bukti progres",
      proofTitle: "Dokumentasi progres pasien"
    },
    about: {
      title: "Tentang AzmiOstepati",
      lead:
        "Pusat terapi berbasis asesmen yang menggabungkan osteopathic manipulation, myofascial release, neuro-stimulation, postural re-education, dan latihan terapeutik.",
      body:
        "Arsitektur konten ini disiapkan untuk pasien, keluarga, dan mitra rujukan seperti dokter, klinik, pelatih kebugaran, serta institusi seleksi fisik."
    },
    servicesPage: {
      title: "Layanan Terapi",
      lead: "Struktur layanan dibuat modular agar mudah diperluas menjadi halaman detail per program."
    },
    contact: {
      title: "Kontak dan Konsultasi",
      lead: "Kirim data singkat untuk ditinjau tim internal. Form ini tidak memakai layanan pihak ketiga.",
      name: "Nama",
      email: "Email",
      phone: "Nomor telepon",
      service: "Program",
      message: "Keluhan atau target",
      submit: "Kirim permintaan",
      success: "Terima kasih. Permintaan konsultasi berhasil diterima.",
      error: "Mohon periksa kembali data yang wajib diisi."
    }
  },
  en: {
    localeName: "English",
    alternateLocaleName: "Bahasa Indonesia",
    skip: "Skip to main content",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact"
    },
    footer: {
      tagline: "Physical therapy, posture correction, and scoliosis handling training.",
      contact: "Quick contact"
    },
    home: {
      eyebrow: "Therapy and training center",
      title: "AzmiOstepati Therapy and Training Center",
      lead:
        "A bilingual site foundation for physical therapy, posture correction, scoliosis, height programs, stroke rehabilitation, and X/O leg alignment.",
      cta: "Call for consultation",
      secondaryCta: "View services",
      proofEyebrow: "Progress proof",
      proofTitle: "Patient-oriented documentation"
    },
    about: {
      title: "About AzmiOstepati",
      lead:
        "An assessment-led therapy center combining osteopathic manipulation, myofascial release, neuro-stimulation, postural re-education, and therapeutic exercise.",
      body:
        "This content architecture is prepared for patients, families, and referral partners such as doctors, clinics, fitness professionals, and physical-selection institutions."
    },
    servicesPage: {
      title: "Azmiostepati Therapy",
      lead: "The service structure is modular so it can grow into detailed pages for every program."
    },
    contact: {
      title: "Contact and Consultation",
      lead: "Send a short request for internal review. This form does not use third-party services.",
      name: "Name",
      email: "Email",
      phone: "Phone number",
      service: "Program",
      message: "Concern or goal",
      submit: "Send request",
      success: "Thank you. Your consultation request has been received.",
      error: "Please check the required fields and try again."
    }
  }
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
