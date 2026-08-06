import type { Metadata } from "next";
import Link from "next/link";
import { SurnameGenerator } from "@/components/SurnameGenerator";

export const metadata: Metadata = {
  title: "Scottish Surname Generator | Random Last Names",
  description:
    "Generate random surname ideas from 3,672 surnames recorded in Scotland between 1975 and 2025.",
  alternates: {
    canonical: "/scottish-surnames",
  },
};

export default function ScottishSurnamesPage() {
  return (
    <main className="bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Scottish Surnames</span>
        </nav>

        <div className="text-center">
          <p className="mb-3 font-semibold text-blue-600">
            3,672 surnames recorded in Scotland
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Scottish Surname Generator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Generate surname ideas from names recorded in Scotland between 1975
            and 2025. Choose one name or explore a larger list.
          </p>

          <SurnameGenerator category="scottish" />
        </div>

        <article className="mx-auto mt-12 max-w-3xl space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-2xl font-bold">
              About surnames recorded in Scotland
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Scotland&apos;s surname landscape includes names with many
              different linguistic, cultural, and family histories. Some names
              have long associations with Scotland, while others reflect
              movement and connections between Scotland and the wider world.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              This generator uses surnames found in Scottish records covering
              the years 1975 to 2025. The results are intended for inspiration
              and general browsing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Frequently asked questions
            </h2>

            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-lg font-bold">
                  Are all these surnames uniquely Scottish?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. A surname recorded in Scotland may also be used in other
                  countries and communities. A generated result does not prove
                  a person&apos;s nationality, ancestry, or family history.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  How does the generator select surnames?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  The generator randomly selects names from the current Scottish
                  dataset. You can generate 1, 10, or 50 surnames at a time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Can I save surname ideas?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Yes. Use the favorite button beside a result to save it in
                  your browser, then copy your favorites when your list is
                  ready.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}