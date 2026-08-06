"use client";

import { useEffect, useMemo, useState } from "react";
import { surnameCategories } from "@/data/surnames";
import { formatSurname } from "@/lib/format-surname";

type SurnameGeneratorProps = {
  category: keyof typeof surnameCategories;
};

type GenerateCount = 1 | 10 | 50;

type Feedback = {
  target: "general" | "results" | "favorites";
  state: "idle" | "success" | "error";
  message: string;
};

const generationOptions = [1, 10, 50] as const;

function selectUniqueSurnames(
  source: readonly string[],
  count: GenerateCount,
  previousResults: readonly string[],
) {
  const previousSet = new Set(previousResults);
  let pool = source.filter((surname) => !previousSet.has(surname));

  if (pool.length < count) {
    pool = [...source];
  }

  const sampleSize = Math.min(count, pool.length);

  for (let index = 0; index < sampleSize; index += 1) {
    const randomIndex =
      index + Math.floor(Math.random() * (pool.length - index));

    [pool[index], pool[randomIndex]] = [pool[randomIndex], pool[index]];
  }

  return pool.slice(0, sampleSize);
}

export function SurnameGenerator({ category }: SurnameGeneratorProps) {
  const rawSurnames = surnameCategories[category].surnames;

  const surnames = useMemo(
    () => [...new Set(rawSurnames.map(formatSurname))],
    [rawSurnames],
  );

  const [results, setResults] = useState<string[]>([]);
  const [lastCount, setLastCount] = useState<GenerateCount>(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoritesLoaded, setFavoritesLoaded] = useState(false);
  const favoritesStorageKey = `surname-generator:favorites:${category}`;
  const [feedback, setFeedback] = useState<Feedback>({
    target: "general",
    state: "idle",
    message: "Choose how many surnames you want to generate.",
  });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      try {
        const storedValue = window.localStorage.getItem(favoritesStorageKey);

        if (!storedValue) {
          setFavorites([]);
          return;
        }

        const parsedValue: unknown = JSON.parse(storedValue);

        if (!Array.isArray(parsedValue)) {
          setFavorites([]);
          window.localStorage.removeItem(favoritesStorageKey);
          return;
        }

        const availableSurnames = new Set(surnames);

        const validFavorites = parsedValue
          .filter((item): item is string => typeof item === "string")
          .map(formatSurname)
          .filter((surname) => availableSurnames.has(surname));

        setFavorites([...new Set(validFavorites)]);
      } catch {
        setFavorites([]);
        window.localStorage.removeItem(favoritesStorageKey);
      } finally {
        setFavoritesLoaded(true);
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [favoritesStorageKey, surnames]);

useEffect(() => {
  if (!favoritesLoaded) return;

  try {
    if (favorites.length === 0) {
      window.localStorage.removeItem(favoritesStorageKey);
      return;
    }

    window.localStorage.setItem(
      favoritesStorageKey,
      JSON.stringify(favorites),
    );
  } catch {
    // 收藏功能仍然可以使用，但当前浏览器无法永久保存。
  }
}, [favorites, favoritesLoaded, favoritesStorageKey]);
  function showMessage(message: string) {
    setFeedback({
      target: "general",
      state: "idle",
      message,
    });
  }

  function generateSurnames(count: GenerateCount) {
    if (surnames.length === 0) {
      showMessage("No surnames are available for this category.");
      return;
    }

    const nextResults = selectUniqueSurnames(surnames, count, results);

    setResults(nextResults);
    setLastCount(count);
    showMessage(
      `${nextResults.length} ${
        nextResults.length === 1 ? "surname is" : "surnames are"
      } ready.`,
    );
  }

  function regenerate() {
    generateSurnames(lastCount);
  }

  async function copyItems(
    items: string[],
    target: "results" | "favorites",
  ) {
    if (items.length === 0) return;

    try {
      await navigator.clipboard.writeText(items.join("\n"));

      const itemName =
        target === "favorites"
          ? items.length === 1
            ? "favorite"
            : "favorites"
          : items.length === 1
            ? "surname"
            : "surnames";

      setFeedback({
        target,
        state: "success",
        message: `${items.length} ${itemName} copied to your clipboard.`,
      });
    } catch {
      setFeedback({
        target,
        state: "error",
        message: "Copy failed. Please try again.",
      });
    }
  }

  function toggleFavorite(surname: string) {
    const isFavorite = favorites.includes(surname);

    setFavorites((currentFavorites) =>
      isFavorite
        ? currentFavorites.filter((name) => name !== surname)
        : [...currentFavorites, surname],
    );

    showMessage(
      isFavorite
        ? `${surname} removed from favorites.`
        : `${surname} added to favorites.`,
    );
  }

  function clearFavorites() {
    setFavorites([]);
    showMessage("All favorites cleared.");
  }

  const resultsCopied =
    feedback.target === "results" && feedback.state === "success";

  const resultsCopyFailed =
    feedback.target === "results" && feedback.state === "error";

  const favoritesCopied =
    feedback.target === "favorites" && feedback.state === "success";

  const favoritesCopyFailed =
    feedback.target === "favorites" && feedback.state === "error";

  return (
    <section className="mt-10 overflow-hidden rounded-2xl border border-blue-200 bg-white text-left text-slate-900 shadow-sm">
      <div className="border-b border-blue-100 bg-blue-50 p-4 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {generationOptions.map((count) => {
            const isActive = results.length > 0 && lastCount === count;

            return (
              <button
                key={count}
                type="button"
                onClick={() => generateSurnames(count)}
                aria-pressed={isActive}
                className={`min-h-10 rounded-lg border px-4 py-2 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-blue-300 bg-white text-blue-700 hover:bg-blue-100"
                }`}
              >
                Generate {count}
              </button>
            );
          })}

          <button
            type="button"
            onClick={regenerate}
            disabled={results.length === 0}
            className="min-h-10 rounded-lg border border-blue-300 bg-white px-4 py-2 font-semibold text-blue-700 transition hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Regenerate{results.length > 0 ? ` ${lastCount}` : ""}
          </button>

          <button
            type="button"
            onClick={() => copyItems(results, "results")}
            disabled={results.length === 0}
            className={`min-h-10 rounded-lg border px-4 py-2 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 ${
              resultsCopied
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-blue-300 bg-white text-blue-700 hover:bg-blue-100"
            }`}
          >
            {resultsCopied
              ? `Copied ${results.length}`
              : resultsCopyFailed
                ? "Copy failed"
                : "Copy list"}
          </button>
        </div>

        <p
          aria-live="polite"
          className="mt-3 text-sm font-medium text-blue-700"
        >
          {feedback.message}
        </p>
      </div>

      {favorites.length > 0 ? (
        <div className="border-b border-blue-100 bg-blue-50/60 p-4 sm:p-6">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <h2 className="font-semibold text-slate-900">
              Favorites ({favorites.length})
            </h2>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => copyItems(favorites, "favorites")}
                className={`min-h-10 rounded-lg border px-4 py-2 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  favoritesCopied
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-blue-300 bg-white text-blue-700 hover:bg-blue-100"
                }`}
              >
                {favoritesCopied
                  ? `Copied ${favorites.length}`
                  : favoritesCopyFailed
                    ? "Copy failed"
                    : "Copy favorites"}
              </button>

              <button
                type="button"
                onClick={clearFavorites}
                className="min-h-10 rounded-lg border border-blue-300 bg-white px-4 py-2 font-semibold text-blue-700 transition hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Clear all
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {favorites.map((surname) => (
              <button
                key={surname}
                type="button"
                onClick={() => toggleFavorite(surname)}
                aria-label={`Remove ${surname} from favorites`}
                className="rounded-full bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {surname} ×
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="p-4 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 className="font-semibold text-slate-900">Results</h2>

          <span className="text-sm text-slate-500">
            {results.length} {results.length === 1 ? "name" : "names"}
          </span>
        </div>

        {results.length === 0 ? (
          <div className="border-y border-blue-100 py-10 text-center text-sm text-slate-500">
            Choose Generate 1, 10, or 50 to begin.
          </div>
        ) : (
          <ol
            className={`border-y border-blue-100 ${
              results.length === 50
                ? "grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6"
                : "divide-y divide-blue-100"
            }`}
          >
            {results.map((surname) => {
              const isFavorite = favorites.includes(surname);

              return (
                <li
                  key={surname}
                  className={`flex min-h-14 items-center gap-4 py-2 ${
                    results.length === 50
                      ? "border-b border-blue-100"
                      : ""
                  }`}
                >
                  <span className="min-w-0 flex-1 truncate font-semibold text-slate-900">
                    {surname}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(surname)}
                    aria-label={
                      isFavorite
                        ? `Remove ${surname} from favorites`
                        : `Save ${surname} to favorites`
                    }
                    aria-pressed={isFavorite}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isFavorite
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-blue-300 bg-white text-blue-600 hover:bg-blue-100"
                    }`}
                  >
                    <span aria-hidden="true">
                      {isFavorite ? "♥" : "♡"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        )}
      </div>

    </section>
  );
}
