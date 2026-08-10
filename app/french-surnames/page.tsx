import type { Metadata } from "next";
import Link from "next/link";
import { SurnameGenerator } from "@/components/SurnameGenerator";

export const metadata: Metadata = {
  title: "French Surname Generator | Random French Last Names",
  description:
    "Generate random French surname ideas from 1,000 frequently occurring family names recorded in France from 1891 to 2000.",
  alternates: {
    canonical: "/french-surnames",
  },
};

export default function FrenchSurnamesPage() {
  return (
    <main className="bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>French Surnames</span>
        </nav>

        <div className="text-center">
          <p className="mb-3 font-semibold text-blue-600">
            1,000 surnames recorded in France
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            French Surname Generator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Generate French surname ideas from historical national records.
            Choose one name or explore a larger random list.
          </p>

          <SurnameGenerator category="french" />
        </div>

        <article className="mx-auto mt-12 max-w-5xl space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-2xl font-bold">About this surname list</h2>

            <p className="mt-4 leading-7 text-slate-600">
              This generator uses the 1,000 most frequently recorded surnames
              in the national INSEE surname file after counts from each birth
              decade were combined. The source covers names recorded at least
              30 times in France from 1891 to 2000.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Source: {" "}
              <a
                href="https://www.insee.fr/fr/statistiques/3536630"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                INSEE, Fichier des noms
              </a>
              , published May 22, 2018. The generator preserves spaces,
              apostrophes, and hyphens found in the selected source names.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Understanding the historical coverage
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              These totals describe people born during the source period, not
              the current population of France. The file excludes people born
              before 1946 who died before 1972 and applies a shorter 1900 to
              2000 range to the covered overseas departments and territory.
              It also groups names below the publication threshold rather than
              listing them individually.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Frequently asked questions
            </h2>

            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-lg font-bold">
                  Does this include every surname used in France?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. INSEE lists names recorded at least 30 times during the
                  source period, and this generator uses the 1,000 highest
                  totals from that national file.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Are these current surname rankings?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. The ranking was calculated from historical birth records
                  covering 1891 to 2000. It is not a ranking of people living
                  in France today.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  How does the generator choose surnames?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  It randomly selects 1, 10, or 50 unique results at a time. If
                  enough unused names remain, the next batch avoids immediately
                  repeating names from the previous batch.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Can a surname prove French background?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. A surname alone cannot establish a real person&apos;s
                  nationality, citizenship, ancestry, ethnicity, or family
                  history.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
