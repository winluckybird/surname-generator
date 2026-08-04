import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Surname Generator. Find inspiration for
          names and characters.
        </p>
      </div>
    </footer>
  );
}