export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Surname Generator. Find inspiration for
          names and characters.
        </p>
      </div>
    </footer>
  );
}