import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-slate-50 px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-semibold text-blue-600">404</p>

        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>

        <p className="mt-5 text-lg text-slate-600">
          The page you requested does not exist or may have moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
}