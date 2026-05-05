"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <section className="page-shell" aria-labelledby="error-title">
      <article>
        <p className="eyebrow">AzmiOstepati</p>
        <h1 id="error-title">Something went wrong</h1>
        <p>{error.message || "The page could not be rendered. Please try again."}</p>
        <button className="button" type="button" onClick={reset}>
          Try again
        </button>
      </article>
    </section>
  );
}
