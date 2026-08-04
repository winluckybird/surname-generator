export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-semibold text-blue-600">
          Find the perfect last name
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Random Surname Generator
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Generate random surnames and discover last names from different
          countries and cultures.
        </p>

        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-xl font-semibold text-slate-500">
            Your surname will appear here
          </p>

          <button
            type="button"
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Generate a Surname
          </button>
        </section>
      </div>
    </main>
  );
}