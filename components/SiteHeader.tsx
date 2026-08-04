import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          Surname Generator
        </Link>
      </div>
    </header>
  );
}