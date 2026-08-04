"use client";

import { useState } from "react";
import { surnameCategories } from "@/data/surnames";
import { formatSurname } from "@/lib/format-surname";

type SurnameGeneratorProps = {
  category: keyof typeof surnameCategories;
};

export function SurnameGenerator({
  category,
}: SurnameGeneratorProps) {
  const surnames = surnameCategories[category].surnames;
  const [surname, setSurname] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState("");

 function generateSurname() {
  if (surnames.length === 0) return;

  let nextSurname = formatSurname(
    surnames[Math.floor(Math.random() * surnames.length)],
  );

  while (nextSurname === surname && surnames.length > 1) {
    nextSurname = formatSurname(
      surnames[Math.floor(Math.random() * surnames.length)],
    );
  }

  setSurname(nextSurname);
  setCopyMessage("");
}

  async function copySurname() {
    if (!surname) return;

    try {
      await navigator.clipboard.writeText(surname);
      setCopyMessage("Copied!");
    } catch {
      setCopyMessage("Copy failed. Please try again.");
    }
  }

  return (
    <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
      <p
        aria-live="polite"
        className="min-h-8 text-2xl font-bold tracking-wide text-slate-800"
      >
        {surname ?? "Your surname will appear here"}
      </p>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={generateSurname}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {surname ? "Generate Another" : "Generate a Surname"}
        </button>

        <button
          type="button"
          onClick={copySurname}
          disabled={!surname}
          className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copy
        </button>
      </div>

      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-green-700">
        {copyMessage}
      </p>
    </section>
  );
}