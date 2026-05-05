import { NextResponse } from "next/server";
import { SUPPORTED_LOCALES, services } from "@/config/constants";
import { isLocale } from "@/lib/i18n";

const serviceSlugs: ReadonlySet<string> = new Set(services.map((service) => service.slug));

type ContactPayload = {
  locale?: string;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const payload = await readPayload(request);
    const validation = validatePayload(payload);

    if (!validation.ok) {
      return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
    }

    return NextResponse.json(
      {
        ok: true,
        message: validation.locale === "id" ? "Permintaan konsultasi diterima." : "Consultation request received."
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ ok: false, errors: ["Invalid request body."] }, { status: 400 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "contact", methods: ["POST"] });
}

async function readPayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as ContactPayload;
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries()) as ContactPayload;
}

function validatePayload(payload: ContactPayload) {
  const errors: string[] = [];
  const locale = payload.locale && isLocale(payload.locale) ? payload.locale : SUPPORTED_LOCALES[0];
  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const service = clean(payload.service);
  const message = clean(payload.message);

  if (name.length < 2) {
    errors.push("Name is required.");
  }

  if (phone.length < 6) {
    errors.push("Phone number is required.");
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Email address is invalid.");
  }

  if (!serviceSlugs.has(service)) {
    errors.push("Service selection is invalid.");
  }

  if (message.length < 8) {
    errors.push("Message is required.");
  }

  return {
    ok: errors.length === 0,
    errors,
    locale
  };
}

function clean(value: unknown) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);
}
