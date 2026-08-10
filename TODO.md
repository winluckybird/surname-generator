# Project TODO

Last reviewed: August 10, 2026

This file reflects the current repository state. Completed items are confirmed
by the existing code. Unchecked items describe known gaps or next actions based
on the current product goal; they are not claims that implementation has
already started.

## Completed

- [x] Create the project with Next.js 16 App Router, React 19, TypeScript strict
  mode, Tailwind CSS 4, and ESLint.
- [x] Add a shared site layout with a global header and footer.
- [x] Link the American, Australian, French, Italian, Scottish, and Japanese
  category pages from the responsive global header navigation.
- [x] Build the homepage at `/` with the primary surname generator and an
  internal link to the current category page.
- [x] Add the American surname SEO page at `/american-surnames`.
- [x] Add the Australian surname SEO page at `/australian-surnames`.
- [x] Add the French surname SEO page at `/french-surnames`.
- [x] Add the Italian surname SEO page at `/italian-surnames`.
- [x] Add the Scottish surname SEO page at `/scottish-surnames`.
- [x] Add the Japanese surname SEO page at `/japanese-surnames`.
- [x] Import 1,000 unique, nonblank American surname strings into
  `data/american-surnames.json`.
- [x] Preserve the original Census spreadsheet in `data/sources/`.
- [x] Import 4,991 unique, nonblank Australian-connected surname strings from
  Wikidata and preserve the CC0 query, raw CSV, and provenance note in
  `data/sources/`.
- [x] Import 1,000 unique, nonblank French surname strings ranked from INSEE's
  1891-2000 national birth-record totals, and preserve the original archive
  and provenance note in `data/sources/`.
- [x] Import 100 unique, nonblank Italian surname strings from the CC0 Popular
  Names by Country Dataset and preserve the raw CSV, license, and provenance
  note in `data/sources/`.
- [x] Import 3,672 unique, nonblank Scottish surname strings and preserve the
  original National Records of Scotland workbook in `data/sources/`.
- [x] Import 1,999 unique, nonblank Japanese surname values pairing romanized
  spellings with kana and kanji, and preserve the source CSV in `data/sources/`.
- [x] Document the Japanese Personal Name Dataset source and preserve its MIT
  copyright and permission notice in `data/sources/`.
- [x] Add the central category registry in `data/surnames.ts`.
- [x] Add surname display formatting for spaces, apostrophes, hyphens, and `Mc`
  names.
- [x] Support random batches of 1, 10, and 50 surnames.
- [x] Update the American surname FAQ to describe batches of 1, 10, or 50
  surnames and the current repeat-avoidance behavior.
- [x] Support regeneration using the previously selected batch size.
- [x] Avoid immediate reuse of the previous result batch when enough unused
  names remain.
- [x] Add Copy list with visible success and error feedback.
- [x] Add per-surname favorites with accessible save and remove controls.
- [x] Add Copy favorites and Clear all actions.
- [x] Hide the Favorites shelf when no favorites are selected.
- [x] Persist favorites per category in browser `localStorage`.
- [x] Show batches of 50 in two columns on wider screens and one column on
  mobile.
- [x] Place the Favorites section between the controls and generated results.
- [x] Add responsive generator, results, status, and favorites layouts.
- [x] Add About, Contact, Privacy Policy, and Terms of Use pages.
- [x] Add a custom 404 page.
- [x] Add global and page-level Metadata, descriptions, and canonical URLs.
- [x] Add generated `/robots.txt` and `/sitemap.xml` routes.
- [x] Statically prerender all current public routes in the production build.
- [x] Add `.env.example` for the production site URL and contact email.
- [x] Document repository-wide AI development rules in `AGENTS.md`.
- [x] Replace the default Next.js README with project-specific setup,
  architecture, deployment, and development documentation.
- [x] Confirm the current application passes `npm run lint` and
  `npm run build`.

## In Progress

- No feature is currently in a partially implemented state.

There is also no database or migration work in progress.

## Next Steps

- [ ] Break up `components/SurnameGenerator.tsx` before adding another large
  feature. Separate the selection logic, generator controls, results, and
  favorites into testable responsibilities.
- [ ] Add an automated test setup. Start with the surname formatting and unique
  selection logic, then cover the generator's main user interactions.
- [ ] Select a Next.js-compatible deployment platform and configure the real
  `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` values.
- [ ] Deploy the current build and verify production canonicals,
  `/robots.txt`, `/sitemap.xml`, all public routes, and the custom 404 page.
- [ ] Connect the deployed domain to Google Search Console and submit the
  sitemap after the production URL is final.
- [ ] Add Open Graph, Twitter Card, and appropriate structured data after the
  production brand, domain, and share image are available.
- [ ] Add another surname category only after obtaining a reliable source
  dataset. Register it in `data/surnames.ts`, add a matching kebab-case route,
  write unique SEO content, add internal links, and verify sitemap output.

## Future Ideas

These ideas are not implemented and are not approved work unless a future task
explicitly requests them.

- Expand to additional well-sourced country and culture categories, with a
  genuinely distinct SEO page for each dataset.
- Add privacy-conscious traffic analytics after updating the Privacy Policy and
  determining whether user consent is required.
- Add advertising only after the site is deployed, content quality is mature,
  the Privacy Policy reflects the selected provider, and any required consent
  controls are in place.
- Add accounts and a database only if the product later requires cross-device
  favorites, user profiles, or an administration workflow. Static surname data
  and temporary favorites do not currently justify database complexity.
