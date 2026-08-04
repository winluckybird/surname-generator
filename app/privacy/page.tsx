import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Surname Generator and learn how website information is handled.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: August 4, 2026
        </p>

        <p className="mt-8 leading-7 text-slate-600">
          This privacy policy explains how Surname Generator handles
          information when you use the website.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Information you provide</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The surname generator does not require an account and does not ask
            you to enter personal information. If you contact the website by
            email, the information in your message will be used to respond to
            your request.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Automatically processed data</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The website hosting provider may process basic technical
            information, such as IP addresses, browser details, requested
            pages, and error logs, to deliver and protect the website.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Cookies and analytics</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The current version does not intentionally set advertising or
            analytics cookies. This policy will be updated before analytics,
            advertising, or other tracking services are introduced.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Third-party links</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The website may link to external websites. Their privacy practices
            are controlled by their own policies, not by Surname Generator.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Policy changes</h2>
          <p className="mt-3 leading-7 text-slate-600">
            This policy may be updated when the website adds new services or
            changes how information is handled. The date at the top of this page
            will show the latest revision.
          </p>
        </section>
      </article>
    </main>
  );
}