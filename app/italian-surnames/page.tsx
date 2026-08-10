import type { Metadata } from "next";
import Link from "next/link";
import { SurnameGenerator } from "@/components/SurnameGenerator";

export const metadata: Metadata = {
  title: "Italian Surname Generator | Random Italian Last Names",
  description:
    "Generate random Italian surname ideas from a curated list of 100 common last names associated with Italy.",
  alternates: {
    canonical: "/italian-surnames",
  },
};

export default function ItalianSurnamesPage() {
  return (
    <main className="bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Italian Surnames</span>
        </nav>

        <div className="text-center">
          <p className="mb-3 font-semibold text-blue-600">
            100 Italian surname ideas
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Italian Surname Generator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Generate Italian surname ideas for characters and creative
            projects. Choose one name or explore a larger random list.
          </p>

          <SurnameGenerator category="italian" />
        </div>

        <article className="mx-auto mt-12 max-w-5xl space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-2xl font-bold">About this surname list</h2>

            <p className="mt-4 leading-7 text-slate-600">
              This generator uses 100 surnames labeled for Italy in the
              CC0-licensed Popular Names by Country Dataset. The source
              snapshot was assembled from public surname lists in July 2023,
              and this page uses the names without treating its counts as
              current official statistics.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Italian surnames reflect many regional histories and language
              traditions. The list includes single-word names as well as forms
              with spaces or apostrophes, such as De Luca and D&apos;Angelo.
              These patterns are preserved when results are displayed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Understanding the dataset&apos;s limits
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The 100-name snapshot is useful for inspiration, but it is not a
              complete register of surnames used in Italy. Names can cross
              borders and communities, and spelling or capitalization can
              vary between families and records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Frequently asked questions
            </h2>

            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-lg font-bold">
                  Are these all the surnames used in Italy?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. The generator uses a finite list of 100 names and does
                  not represent every surname, spelling variant, or regional
                  form found in Italy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Are results ranked by popularity?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. Results are selected randomly and are not weighted by
                  rank or frequency. The page does not present the source data
                  as current official population statistics.
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
                  Can a surname prove Italian background?
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
