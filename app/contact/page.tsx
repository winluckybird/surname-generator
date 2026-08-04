import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Surname Generator",
  description:
    "Contact Surname Generator with feedback, corrections, or website questions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-4xl font-bold">Contact</h1>

        <p className="mt-6 leading-7 text-slate-600">
          You can contact Surname Generator about data corrections, website
          feedback, technical problems, or general questions.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Email</h2>

          {siteConfig.contactEmail ? (
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-3 inline-block font-semibold text-blue-600 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          ) : (
            <p className="mt-3 rounded-xl bg-amber-50 p-4 text-amber-900">
              A public contact email will be added before the website launches.
            </p>
          )}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Helpful information to include</h2>
          <p className="mt-3 leading-7 text-slate-600">
            When reporting a problem, include the page address, the surname or
            content involved, and a short description of what should be
            corrected.
          </p>
        </section>
      </div>
    </main>
  );
}