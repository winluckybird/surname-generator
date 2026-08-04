"use client";

import { useState } from "react";
import { surnameCategories } from "@/data/surnames";
import { formatSurname } from "@/lib/format-surname";

type SurnameGeneratorProps = {
  category: keyof typeof surnameCategories;
};

type GenerateCount = 1 | 10 | 50;
type CopyState = "idle" | "copied" | "error";

const generationOptions: Array<{
  count: GenerateCount;
  hint: string;
}> = [
  { count: 1, hint: "Quick pick" },
  { count: 10, hint: "Short list" },
  { count: 50, hint: "Deep search" },
];

function selectUniqueSurnames(
  source: readonly string[],
  count: GenerateCount,
  previousResults: readonly string[],
) {
  const previousSet = new Set(previousResults);
  const formattedSource = [...new Set(source.map(formatSurname))];
  const freshPool = formattedSource.filter((name) => !previousSet.has(name));
  const pool = freshPool.length >= count ? freshPool : formattedSource;
  const sampleSize = Math.min(count, pool.length);

  for (let index = 0; index < sampleSize; index += 1) {
    const randomIndex =
      index + Math.floor(Math.random() * (pool.length - index));
    [pool[index], pool[randomIndex]] = [pool[randomIndex], pool[index]];
  }

  return pool.slice(0, sampleSize);
}

export function SurnameGenerator({ category }: SurnameGeneratorProps) {
  const categoryData = surnameCategories[category];
  const surnames = categoryData.surnames;
  const [results, setResults] = useState<string[]>([]);
  const [lastCount, setLastCount] = useState<GenerateCount>(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [favoritesCopyState, setFavoritesCopyState] =
    useState<CopyState>("idle");
  const [statusMessage, setStatusMessage] = useState(
    "Choose how many surnames you want to explore.",
  );
  const hasCopySuccess =
    copyState === "copied" || favoritesCopyState === "copied";
  const hasCopyError = copyState === "error" || favoritesCopyState === "error";

  function generateSurnames(count: GenerateCount) {
    setCopyState("idle");
    setFavoritesCopyState("idle");

    if (surnames.length === 0) {
      setStatusMessage("No surnames are available for this category yet.");
      return;
    }

    const nextResults = selectUniqueSurnames(surnames, count, results);
    setResults(nextResults);
    setLastCount(count);
    setStatusMessage(
      `${nextResults.length} ${nextResults.length === 1 ? "surname is" : "surnames are"} ready.`,
    );
  }

  function regenerate() {
    generateSurnames(lastCount);
  }

  async function copyList() {
    if (results.length === 0) return;

    try {
      setFavoritesCopyState("idle");
      await navigator.clipboard.writeText(results.join("\n"));
      setCopyState("copied");
      setStatusMessage(
        `${results.length} ${results.length === 1 ? "surname" : "surnames"} copied to your clipboard.`,
      );
    } catch {
      setCopyState("error");
      setStatusMessage("Copy failed. Please try again.");
    }
  }

  async function copyFavorites() {
    if (favorites.length === 0) return;

    try {
      setCopyState("idle");
      await navigator.clipboard.writeText(favorites.join("\n"));
      setFavoritesCopyState("copied");
      setStatusMessage(
        `${favorites.length} favorite ${favorites.length === 1 ? "surname" : "surnames"} copied to your clipboard.`,
      );
    } catch {
      setFavoritesCopyState("error");
      setStatusMessage("Favorites copy failed. Please try again.");
    }
  }

  function clearFavorites() {
    setFavorites([]);
    setCopyState("idle");
    setFavoritesCopyState("idle");
    setStatusMessage("All favorites cleared.");
  }

  function toggleFavorite(surname: string) {
    const isFavorite = favorites.includes(surname);
    setCopyState("idle");
    setFavoritesCopyState("idle");

    setFavorites((currentFavorites) =>
      isFavorite
        ? currentFavorites.filter((name) => name !== surname)
        : [...currentFavorites, surname],
    );
    setStatusMessage(
      isFavorite
        ? `${surname} removed from favorites.`
        : `${surname} added to favorites.`,
    );
  }

  return (
    <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-5 text-left shadow-[0_24px_80px_-32px_rgba(30,41,59,0.75)] sm:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="relative">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {generationOptions.map((option) => {
            const isActive = results.length > 0 && lastCount === option.count;

            return (
              <button
                key={option.count}
                type="button"
                onClick={() => generateSurnames(option.count)}
                aria-pressed={isActive}
                className={`group min-h-[4.5rem] rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  isActive
                    ? "border-indigo-100 bg-indigo-200 text-indigo-950 shadow-[0_12px_30px_-16px_rgba(165,180,252,0.95)]"
                    : "border-white/10 bg-white/[0.07] text-white hover:border-white/25 hover:bg-white/[0.12]"
                }`}
              >
                <span className="block text-base font-bold">
                  Generate {option.count}
                </span>
                <span
                  className={`mt-1 block text-xs ${isActive ? "text-slate-700" : "text-slate-400"}`}
                >
                  {option.hint}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={regenerate}
            disabled={results.length === 0}
            className="inline-flex min-h-[4.5rem] items-center justify-center gap-2 rounded-2xl border border-rose-300/30 bg-rose-400/10 px-4 py-3 font-bold text-rose-100 transition hover:border-rose-200/60 hover:bg-rose-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 7v5h-5" />
              <path d="M4 17a8 8 0 0 0 13.7-5M4 17v-5h5M20 7A8 8 0 0 0 6.3 12" />
            </svg>
            Regenerate {results.length > 0 ? lastCount : ""}
          </button>

          <button
            type="button"
            onClick={copyList}
            disabled={results.length === 0}
            className={`inline-flex min-h-[4.5rem] items-center justify-center gap-2 rounded-2xl px-4 py-3 font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-40 ${
              copyState === "copied"
                ? "bg-lime-300 text-slate-950 shadow-[0_12px_30px_-16px_rgba(190,242,100,0.95)]"
                : copyState === "error"
                  ? "bg-rose-400 text-white"
                  : "bg-white text-slate-950 hover:bg-lime-200"
            }`}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="8" y="8" width="11" height="11" rx="2" />
              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </svg>
            {copyState === "copied"
              ? `Copied ${results.length}`
              : copyState === "error"
                ? "Copy failed"
                : "Copy list"}
          </button>
        </div>

        <div
          className={`mt-3 flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm ${
            hasCopySuccess
              ? "border-lime-300/30 bg-lime-300/10 text-lime-100"
              : hasCopyError
                ? "border-rose-300/30 bg-rose-400/10 text-rose-100"
                : "border-white/10 bg-white/[0.05] text-slate-300"
          }`}
        >
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${
              hasCopySuccess
                ? "bg-lime-300"
                : hasCopyError
                  ? "bg-rose-300"
                  : "bg-cyan-300"
            }`}
          />
          <p aria-live="polite">{statusMessage}</p>
        </div>

        <div className="mt-6 rounded-3xl border border-indigo-300/45 bg-gradient-to-br from-indigo-500/25 via-indigo-400/15 to-indigo-950/45 p-3 shadow-[0_20px_55px_-30px_rgba(129,140,248,0.9)] backdrop-blur-sm sm:p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-indigo-100">
              Results / {results.length.toString().padStart(2, "0")}
            </p>
            <p className="rounded-full border border-rose-200/25 bg-rose-400/20 px-3 py-1 text-xs font-semibold text-rose-100">
              {favorites.length} saved
            </p>
          </div>

          {results.length === 0 ? (
            <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-dashed border-indigo-200/40 bg-indigo-950/30 px-6 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-200/15 text-indigo-100">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
                  <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
                </svg>
              </div>
              <p className="mt-4 font-semibold text-white">
                Your name board is ready
              </p>
              <p className="mt-1 max-w-sm text-sm text-indigo-100/70">
                Pick Generate 1, 10, or 50 to fill this space with unique
                surnames.
              </p>
            </div>
          ) : (
            <ol
              className={`grid gap-2 ${
                results.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {results.map((surname, index) => {
                const isFavorite = favorites.includes(surname);

                return (
                  <li
                    key={surname}
                    className="group flex min-w-0 items-center gap-3 rounded-2xl border border-indigo-200/80 bg-indigo-50 px-3 py-3 shadow-[0_8px_22px_-16px_rgba(30,27,75,0.65)] transition hover:-translate-y-0.5 hover:border-rose-300 hover:bg-white"
                  >
                    <span className="font-mono text-[10px] font-bold text-indigo-400">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-base font-bold tracking-wide text-indigo-950">
                      {surname}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(surname)}
                      aria-label={`${isFavorite ? "Remove" : "Save"} ${surname} ${isFavorite ? "from" : "to"} favorites`}
                      aria-pressed={isFavorite}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 ${
                        isFavorite
                          ? "border-rose-300 bg-rose-400 text-white"
                          : "border-indigo-200 bg-indigo-100 text-indigo-400 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500"
                      }`}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill={isFavorite ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ol>
          )}
        </div>

        {favorites.length > 0 ? (
          <div className="mt-4 rounded-3xl border border-rose-200 bg-rose-50 p-4 text-rose-950 shadow-[0_18px_45px_-28px_rgba(225,29,72,0.75)]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-rose-900">
                  Favorites shelf
                </p>
                <p className="mt-1 text-sm text-rose-700">
                  Your saved ideas remain here while you explore new batches.
                </p>
              </div>
              <span className="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white">
                {favorites.length} saved
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyFavorites}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50 ${
                  favoritesCopyState === "copied"
                    ? "border-lime-400 bg-lime-300 text-slate-950"
                    : favoritesCopyState === "error"
                      ? "border-rose-800 bg-rose-800 text-white"
                      : "border-rose-500 bg-rose-500 text-white hover:border-rose-600 hover:bg-rose-600"
                }`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="8" y="8" width="11" height="11" rx="2" />
                  <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                {favoritesCopyState === "copied"
                  ? `Copied ${favorites.length}`
                  : favoritesCopyState === "error"
                    ? "Copy failed"
                    : "Copy favorites"}
              </button>

              <button
                type="button"
                onClick={clearFavorites}
                className="inline-flex items-center gap-2 rounded-xl border border-rose-300 bg-white px-4 py-2 text-sm font-bold text-rose-800 transition hover:border-rose-400 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18" />
                  <path d="M8 6V4h8v2" />
                  <path d="m19 6-1 14H6L5 6" />
                  <path d="M10 11v5M14 11v5" />
                </svg>
                Clear all
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {favorites.map((surname) => (
                <button
                  key={surname}
                  type="button"
                  onClick={() => toggleFavorite(surname)}
                  aria-label={`Remove ${surname} from saved favorites`}
                  className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-white px-3 py-2 text-sm font-semibold text-rose-900 transition hover:border-rose-400 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  {surname}
                  <span aria-hidden="true" className="text-rose-500">
                    x
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <p className="mt-4 text-xs text-slate-400">
          Heart a surname to build your favorites.
        </p>
      </div>
    </section>
  );
}
