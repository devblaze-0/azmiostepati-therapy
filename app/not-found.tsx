import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell" aria-labelledby="not-found-title">
      <article>
        <p className="eyebrow">AzmiOstepati</p>
        <h1 id="not-found-title">Page not found</h1>
        <p>The requested page is not available. Choose a language to continue.</p>
        <nav className="button-row" aria-label="Language options">
          <Link className="button primary" href="/id">
            Bahasa Indonesia
          </Link>
          <Link className="button secondary" href="/en">
            English
          </Link>
        </nav>
      </article>
    </section>
  );
}
