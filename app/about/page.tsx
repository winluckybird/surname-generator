import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Surname Generator",
  description:
    "Learn what Surname Generator does, who it is for, and how its surname tools are created.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-4xl font-bold">About Surname Generator</h1>

        <p className="mt-6 leading-7 text-slate-600">
          Surname Generator is a simple online tool for discovering last names.
          It is designed for writers, game players, character creators, and
          anyone looking for name inspiration.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What the website does</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The website organizes surnames into clear categories and lets users
            generate a random result with one click. Each category has its own
            page, explanation, and surname list.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How results are selected</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Results are selected randomly from the surname list assigned to the
            current category. The generator does not create personal profiles
            and does not attempt to identify real individuals.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">A note about surname categories</h2>
          <p className="mt-3 leading-7 text-slate-600">
            A surname can be used across many countries, languages, and
            cultures. Category labels describe how a list is organized; they do
            not prove a person&apos;s nationality, ethnicity, or family history.
          </p>
        </section>
      </article>
    </main>
  );
}