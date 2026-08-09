import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-bold text-slate-900">
          Surname Generator
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-x-4 gap-y-2"
        >
          <Link
            href="/american-surnames"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            American
          </Link>

          <Link
            href="/australian-surnames"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            Australian
          </Link>

          <Link
            href="/scottish-surnames"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            Scottish
          </Link>

          <Link
            href="/japanese-surnames"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            Japanese
          </Link>
        </nav>
      </div>
    </header>
  );
}
