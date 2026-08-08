import type { Metadata } from "next";
import Link from "next/link";
import { SurnameGenerator } from "@/components/SurnameGenerator";

export const metadata: Metadata = {
  title: "Japanese Surname Generator | Random Japanese Last Names",
  description:
    "Generate random Japanese surname ideas shown in romanized spelling, kana, and kanji.",
  alternates: {
    canonical: "/japanese-surnames",
  },
};

export default function JapaneseSurnamesPage() {
  return (
    <main className="bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Japanese Surnames</span>
        </nav>

        <div className="text-center">
          <p className="mb-3 font-semibold text-blue-600">
            1,999 surnames with kana and kanji
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Japanese Surname Generator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Generate Japanese surname ideas shown in romanized spelling, kana,
            and kanji. Choose one name or explore a larger list.
          </p>

          <SurnameGenerator category="japanese" />
        </div>

        <article className="mx-auto mt-12 max-w-5xl space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
            <h2 className="text-2xl font-bold">About this surname list</h2>

            <p className="mt-4 leading-7 text-slate-600">
              This generator uses 1,999 entries from the MIT-licensed Japanese
              Personal Name Dataset by shuheilocale. Each result keeps the
              source&apos;s romanized spelling, kana reading, and original kanji
              together so that visually similar readings remain distinct.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              The source also contains estimated counts, but it does not state
              their reference date or collection method. Those counts are not
              used or presented as current official population statistics on
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Working with Japanese surname spellings
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A romanized reading can correspond to more than one kanji form,
              and romanization is only one way to represent Japanese sounds in
              the Latin alphabet. The included kana makes the source reading
              visible, while the kanji preserves the written surname. Consult a
              knowledgeable reference or native speaker for a specific
              real-world context.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Frequently asked questions
            </h2>

            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-lg font-bold">
                  How are Japanese surnames displayed?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Each result shows a romanized spelling followed by its kana
                  reading and kanji, such as Satou (さとう / 佐藤).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Does the list contain every Japanese surname?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. It is a finite collection of 1,999 entries and should not
                  be treated as a complete register of surnames used in Japan.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  How does the generator select surnames?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  The generator randomly selects 1, 10, or 50 entries. It avoids
                  duplicates within a batch and, when enough names are
                  available, avoids immediately repeating the previous batch.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Can a result confirm someone&apos;s background?
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  No. The results are for ideas and general browsing. A surname
                  alone does not establish a real person&apos;s nationality,
                  ancestry, ethnicity, or family history.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
