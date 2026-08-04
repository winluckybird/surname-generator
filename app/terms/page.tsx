import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms that apply when using the Surname Generator website and its name generation tools.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-4xl font-bold">Terms of Use</h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: August 4, 2026
        </p>

        <p className="mt-8 leading-7 text-slate-600">
          By using Surname Generator, you agree to use the website and its tools
          responsibly.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Purpose of the website</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The website provides surname ideas for general information,
            writing, games, character creation, and name inspiration. Generated
            results should not be treated as proof of identity, nationality,
            ethnicity, ancestry, or family relationships.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Acceptable use</h2>
          <p className="mt-3 leading-7 text-slate-600">
            You may use the generator for lawful purposes. You must not attempt
            to disrupt the website, misuse its technical systems, or use its
            content to impersonate, harass, or harm another person.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Accuracy and availability</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Surname lists may contain variations, historical spellings, or
            names used across multiple cultures. The website may correct,
            update, add, or remove content and does not guarantee uninterrupted
            availability.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">External websites</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Links to third-party websites are provided for convenience. Surname
            Generator does not control their content, availability, or
            policies.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Changes to these terms</h2>
          <p className="mt-3 leading-7 text-slate-600">
            These terms may be updated as the website develops. The revision
            date at the top of this page identifies the latest version.
          </p>
        </section>
      </article>
    </main>
  );
}