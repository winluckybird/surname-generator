import type { Metadata } from "next";
import Link from "next/link";
import { SurnameGenerator } from "@/components/SurnameGenerator";

export const metadata: Metadata = {
  title: "Australian Surname Generator | Random Last Names",
  description:
    "Generate random surname ideas from 4,991 family names connected to people recorded as Australian citizens in Wikidata.",
  alternates: {
    canonical: "/australian-surnames",
  },
};

export default function AustralianSurnamesPage() {
  return (
    <main className="bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Australian Surnames</span>
        </nav>

        <div className="text-center">
          <p className="mb-3 font-semibold text-blue-600">
            4,991 surname ideas with Australian connections
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Australian Surname Generator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Generate surname ideas from family names attached to people whose
            Wikidata records list Australian citizenship. Choose one name or
            explore a larger list.
          </p>

          <SurnameGenerator category="australian" />
        </div>

        <article className="mx-auto mt-12 max-w-5xl space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-2xl font-bold">About this surname list</h2>

            <p className="mt-4 leading-7 text-slate-600">
              Australia is home to people with family histories connected to
              many parts of the world. This generator therefore includes names
              from a wide range of linguistic and cultural traditions rather
              than treating Australian surnames as one uniform naming system.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              The 4,991 entries come from a fixed Wikidata snapshot of family
              names associated with people recorded as Australian citizens.
              The list is intended for inspiration and browsing, not as a
              census or a ranking of surname popularity in Australia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Understanding the dataset&apos;s limits
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Wikidata is maintained by contributors, so records can be
              incomplete or contain errors. The snapshot includes only people
              whose entries explicitly contain both an Australian citizenship
              value and a structured family-name value. It can include
              historical people and people with more than one citizenship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Frequently asked questions
            </h2>

            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-lg font-bold">
                  Are these surnames uniquely Australian?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. Many surnames are used across countries and communities.
                  Inclusion only means the name appeared in the defined source
                  snapshot; it does not assign the surname to one nationality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Are the names ordered by popularity?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. The source is not a population-frequency dataset, and the
                  generator selects randomly from the cleaned list rather than
                  weighting results by how often a surname occurs.
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
                  Can a result confirm someone&apos;s background?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. A surname alone cannot establish a real person&apos;s
                  citizenship, nationality, ancestry, ethnicity, or family
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
