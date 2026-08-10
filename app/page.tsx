import type { Metadata } from "next";
import Link from "next/link";
import { SurnameGenerator } from "@/components/SurnameGenerator";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 font-semibold text-blue-600">
            Find the perfect last name
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Random Surname Generator
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate random surnames and explore last names from different
            countries and cultures.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
            The current generator uses 1,000 frequently occurring US surnames.
          </p>

          <SurnameGenerator category="american" />
        </div>

        <section className="mt-16" aria-labelledby="categories-heading">
          <h2
            id="categories-heading"
            className="text-center text-3xl font-bold"
          >
            Browse surname generators
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/american-surnames"
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                American Surname Generator
              </h3>
              <p className="mt-2 text-slate-600">
                Explore 1,000 common last names recorded in the 2020 United
                States Census.
              </p>
            </Link>

            <Link
              href="/australian-surnames"
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                Australian Surname Generator
              </h3>
              <p className="mt-2 text-slate-600">
                Explore 4,991 family names connected to people recorded as
                Australian citizens in Wikidata.
              </p>
            </Link>

            <Link
              href="/french-surnames"
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                French Surname Generator
              </h3>
              <p className="mt-2 text-slate-600">
                Explore 1,000 frequently occurring surnames recorded in France
                between 1891 and 2000.
              </p>
            </Link>

            <Link
              href="/scottish-surnames"
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                Scottish Surname Generator
              </h3>
              <p className="mt-2 text-slate-600">
                Explore 3,672 surnames recorded in Scotland between 1975 and
                2025.
              </p>
            </Link>

            <Link
              href="/italian-surnames"
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                Italian Surname Generator
              </h3>
              <p className="mt-2 text-slate-600">
                Explore 100 common surname ideas associated with Italy from a
                CC0-licensed source snapshot.
              </p>
            </Link>

            <Link
              href="/japanese-surnames"
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                Japanese Surname Generator
              </h3>
              <p className="mt-2 text-slate-600">
                Explore 1,999 Japanese surnames shown in romanized spelling,
                kana, and kanji.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
