import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          Surname Generator
        </Link>

        <nav aria-label="Main navigation">
          <Link
            href="/american-surnames"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            American Surnames
          </Link>
        </nav>
      </div>
    </header>
  );
}