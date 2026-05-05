"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { dictionaries, services, type Locale } from "@/config/constants";
import styles from "./contact-form.module.css";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const dictionary = dictionaries[locale].contact;
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      event.currentTarget.reset();
      setState("success");
      return;
    }

    setState("error");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <label>
        {dictionary.name}
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        {dictionary.email}
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        {dictionary.phone}
        <input name="phone" inputMode="tel" autoComplete="tel" required />
      </label>
      <label>
        {dictionary.service}
        <select name="service" required defaultValue="">
          <option value="" disabled>
            {dictionary.service}
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title[locale]}
            </option>
          ))}
        </select>
      </label>
      <label>
        {dictionary.message}
        <textarea name="message" rows={5} required />
      </label>
      <button className="button" type="submit" disabled={state === "submitting"}>
        {dictionary.submit}
      </button>
      <p aria-live="polite">{state === "success" ? dictionary.success : state === "error" ? dictionary.error : ""}</p>
    </form>
  );
}
