import type { Metadata } from "next";
import Link from "next/link";
import { SurnameGenerator } from "@/components/SurnameGenerator";

export const metadata: Metadata = {
  title: "American Surname Generator | Random US Last Names",
  description:
    "Generate random American surnames from a list of 1,000 common last names recorded in the 2020 United States Census.",
  alternates: {
    canonical: "/american-surnames",
  },
};

export default function AmericanSurnamesPage() {
  return (
    <main className="bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>American Surnames</span>
        </nav>

        <div className="text-center">
          <p className="mb-3 font-semibold text-blue-600">
            1,000 common US last names
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            American Surname Generator
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Generate a random surname from a list of frequently occurring last
            names recorded in the 2020 United States Census.
          </p>

          <SurnameGenerator category="american" />
        </div>

        <article className="mt-12 space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section>
  <h2 className="text-2xl font-bold">
    Frequently asked questions
  </h2>

  <div className="mt-5 space-y-6">
    <div>
      <h3 className="text-lg font-bold">
        What is an American surname?
      </h3>
      <p className="mt-2 leading-7 text-slate-600">
        An American surname is a last name used in the United States. American
        surnames can come from many languages, cultures, and family histories.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-bold">
        How does the generator choose a surname?
      </h3>
      <p className="mt-2 leading-7 text-slate-600">
        Each click randomly selects one surname from the current list. Every
        surname in the generator has an equal chance of appearing.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-bold">
        Can I use these surnames for fictional characters?
      </h3>
      <p className="mt-2 leading-7 text-slate-600">
        You can use the results as inspiration for stories, games, and character
        ideas. A generated surname does not confirm a person&apos;s identity or
        cultural background.
      </p>
    </div>
  </div>
</section>
        </article>
      </div>
    </main>
  );
}