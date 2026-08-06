<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Surname Generator Project Instructions

This file applies to the entire repository. All AI agents must follow it before
planning, editing, testing, or reviewing project work.

## 1. Project Overview

### Goal

Build a fast, search-friendly English surname generator website that can grow
from the current American surname tool into multiple country and culture
categories. Each category must have a useful standalone page that can be
indexed by search engines. The long-term business goal is an ad-supported tool
site, but advertising and analytics are not currently installed.

### Product positioning

- A lightweight name-idea tool, not an identity, genealogy, ethnicity, or
  nationality verification service.
- A content-led SEO website in which the generator is the primary utility and
  category pages provide unique, accurate supporting information.
- A low-complexity product that should remain fast, inexpensive to host, and
  usable without an account.

### Users

- Writers, game players, and character creators looking for surname ideas.
- Users researching or browsing last-name ideas by category.
- English-language search visitors arriving on category-specific SEO pages.

Do not write copy that implies a generated surname proves a real person's
nationality, ethnicity, ancestry, or family history.

## 2. Tech Stack

### Frontend

- Next.js 16.3.0 using the App Router.
- React 19.2.8.
- TypeScript 5 with `strict` mode enabled.
- Tailwind CSS 4 through `@tailwindcss/postcss`.
- Next.js Metadata APIs, `robots.ts`, and `sitemap.ts` for technical SEO.
- ESLint 9 with Next.js Core Web Vitals and TypeScript rules.

Use Server Components by default. Add `"use client"` only when a component
requires browser APIs, React state, or event handlers. The current generator is
a Client Component because it uses state and the Clipboard API.

### Backend

There is no backend, API route, Server Action, authentication system, or admin
panel. Do not introduce one unless the user explicitly approves the new scope.

### Database

There is no database. Surname data is stored in version-controlled JSON and
registered in `data/surnames.ts`. Generated results remain in browser memory.
Favorites are stored per category in browser `localStorage` and restored after
a refresh; there is no cross-device synchronization.

### Deployment environment

- The project builds with `next build` and runs with `next start`.
- All current routes are statically prerendered.
- No hosting provider is configured in the repository. Vercel or another
  Next.js 16-compatible Node hosting environment may be selected later.
- Local development has been validated with Node.js 24.19.0, but the repository
  does not currently pin a Node version with `engines`, `.nvmrc`, or similar.
- Production requires `NEXT_PUBLIC_SITE_URL` and
  `NEXT_PUBLIC_CONTACT_EMAIL`. Never deploy with the `.env.example`
  placeholders.

## 3. Project Architecture

### Directory structure

```text
app/
  layout.tsx                 Root layout, global metadata, header, and footer
  page.tsx                   Homepage and primary generator entry point
  american-surnames/         American category SEO page
  scottish-surnames/         Scottish category SEO page
  about/ contact/            Trust and contact pages
  privacy/ terms/            Policy pages
  robots.ts sitemap.ts       Search-engine discovery endpoints
  not-found.tsx              Custom 404 page
components/
  SurnameGenerator.tsx       Generator logic, results, copy, and favorites UI
  SiteHeader.tsx             Global header navigation
  SiteFooter.tsx             Global footer and trust-page links
data/
  american-surnames.json     Current 1,000-name production dataset
  scottish-surnames.json     Current 3,672-name production dataset
  surnames.ts                Category registry and route metadata
  sources/                   Original source spreadsheets
lib/
  format-surname.ts          Display formatting for raw surname strings
  site.ts                    Canonical site URL, description, and contact email
public/                      Static public assets
```

Never edit generated files in `.next/` or dependencies in `node_modules/`.

### Core modules

- `components/SurnameGenerator.tsx` owns interactive state and currently
  supports batches of 1, 10, or 50, regeneration, list copying, per-category
  persistent favorites, favorite copying, and clearing favorites. Batches of
  50 use two columns on wider screens and one column on mobile.
- `data/surnames.ts` is the source of truth for available categories. Sitemap
  generation also reads this registry.
- `data/american-surnames.json` contains exactly 1,000 unique, nonblank surname
  strings from the current source file.
- `data/scottish-surnames.json` contains 3,672 unique, nonblank surname strings
  recorded in Scotland from 1975 to 2025.
- `lib/format-surname.ts` converts stored uppercase values into display casing,
  including apostrophes, hyphens, spaces, and `Mc` names.
- `lib/site.ts` is the single source of truth for the public site URL and
  contact email. Do not duplicate production domains across page files.
- `app/layout.tsx` supplies shared layout and default metadata.
- `app/sitemap.ts` and `app/robots.ts` must remain consistent with the public
  routes and production site URL.

## 4. Development Rules

### General code standards

- Preserve TypeScript strictness. Do not use `any` to bypass type errors.
- Use the existing `@/` import alias for project modules.
- Prefer small, explicit functions with descriptive names and narrow types.
- Keep business logic deterministic except where randomness is intentional.
  `Math.random()` is sufficient for this idea generator; cryptographic
  randomness is not required.
- Do not add packages when platform APIs or existing dependencies are enough.
- Do not add a backend, database, authentication, tracking, advertising, or an
  external service as a side effect of an unrelated task.
- Preserve unrelated user changes. Keep diffs focused on the requested work.
- Do not edit raw source spreadsheets in place. Treat files in `data/sources/`
  as provenance records.
- Do not claim that a name belongs exclusively to one culture or country.

### Component rules

- Server Components are the default for pages and content sections.
- Client Components should contain only the smallest necessary interactive
  boundary.
- If `SurnameGenerator.tsx` receives another substantial feature, extract
  coherent pieces such as controls, results, favorites, clipboard state, or the
  selection algorithm instead of continuing to grow one monolithic component.
- Reusable UI belongs in `components/`; pure helpers belong in `lib/`; datasets
  and category configuration belong in `data/`.
- Use semantic HTML and maintain one visible `h1` per page.
- Every icon-only button needs an accessible name. Preserve keyboard focus
  styles, `aria-live` feedback, `aria-pressed` states, and disabled states.
- New layouts must work at mobile, tablet, and desktop widths. Do not force a
  desktop button row onto a narrow screen if it makes controls unreadable.
- Use Tailwind classes consistently with the existing design. Avoid new global
  CSS unless the rule truly applies across the site.
- Do not add image assets when inline SVG or existing CSS is sufficient.

### File naming

- React component files and exported components: `PascalCase.tsx` and
  `PascalCase`.
- Utilities, configuration, and data modules: lowercase kebab-case filenames
  with camelCase exported functions and values.
- App Router directories and public URLs: lowercase kebab-case.
- Route entry files must follow Next.js conventions such as `page.tsx`,
  `layout.tsx`, `robots.ts`, and `sitemap.ts`.
- Dataset names must identify the category clearly, for example
  `american-surnames.json`.
- Source files in `data/sources/` should use descriptive names containing the
  source and year when known.

### Formatting and maintainability

- Match the surrounding file's formatting and indentation.
- The project does not currently include Prettier or EditorConfig. Do not
  perform unrelated whole-file formatting or line-ending conversions.
- Avoid duplicated long SVG or control markup when a reusable component would
  be clearer.
- Remove unused imports, dead code, unused public assets, and stale copy only
  when they are in the requested scope.
- Keep README and user-facing documentation accurate when setup, environment,
  data, or deployment behavior changes.

## 5. SEO Rules

### Page SEO

- Every indexable page must provide useful visible content, not only a client
  widget. Category pages must include a unique introduction and supporting
  content appropriate to that dataset.
- Content must accurately describe the current generator. If batch sizes or
  behavior change, update FAQ and explanatory text that describes the old
  behavior.
- Keep important SEO content in Server Components so it appears in the initial
  HTML.
- Maintain logical heading order, one `h1`, descriptive links, semantic
  sections, and an English `lang` attribute.
- Avoid thin country pages made by changing only the country name. Each new
  category page needs genuinely distinct, accurate content.

### Metadata

- Every public page must export typed Next.js `Metadata` with a unique title,
  unique description, and canonical path.
- Category titles should clearly contain the category and the surname-generator
  intent. Descriptions should explain the tool and dataset without unsupported
  claims.
- Canonicals must use relative paths resolved through `metadataBase` in
  `app/layout.tsx`.
- The production base URL must come from `siteConfig.url`; never hardcode
  `localhost`, `example.com`, or a deployment-preview URL in page metadata.
- When adding Open Graph, Twitter, verification, or structured data, use the
  same canonical site configuration rather than creating a second URL source.

### URL rules

- Use lowercase, human-readable, kebab-case paths.
- Follow the current category convention: `/<category>-surnames`, for example
  `/american-surnames`.
- Do not create multiple indexable URLs for the same generator state. Batch
  size, generated results, and favorites are interface state, not SEO routes.
- The project currently uses canonical URLs without a trailing slash. Keep that
  behavior consistent unless the whole site policy changes.

### Internal links and discovery

- No indexable page may be orphaned.
- Add new category pages to `data/surnames.ts`, ensure their route exists, and
  provide a crawlable link from the homepage or relevant category navigation.
- Use `next/link` for internal navigation.
- Category pages should keep a breadcrumb link back to the homepage.
- Trust and policy pages belong in the footer.
- Update `app/sitemap.ts` when adding a public page not already derived from the
  category registry.
- Keep `robots.ts`, sitemap URLs, canonicals, and the production domain aligned.
- Before adding analytics or ads, update the privacy policy and implement any
  consent behavior required by the selected services and target regions.

## 6. Database and Data Rules

### Current data model

- There is no database and therefore no migration system.
- Do not add a database merely to store the current static surname lists or
  temporary favorites.
- Favorites use browser `localStorage` with a separate key for each category.
  Invalid, unavailable, or stale stored values must continue to fail safely.

### Dataset changes

- Keep production surname lists as JSON arrays of strings unless a new
  requirement needs richer fields.
- Stored names must be trimmed, nonblank, unique within their category, and use
  a consistent raw casing convention. The current American dataset uses
  uppercase values.
- Validate total count, unique count, and blank count after every dataset
  change.
- Preserve the original source file under `data/sources/` and use a descriptive
  filename. Do not silently replace source provenance.
- Register new categories in `data/surnames.ts` with a stable key, display name,
  URL slug, description, and dataset import.
- Ensure the category key is accepted by `SurnameGenerator` and that the slug
  matches the App Router directory.
- Do not fabricate missing names, meanings, origins, demographic values, or
  cultural claims.

### Future migration rules

If a database is explicitly approved later:

- Introduce a documented schema and version-controlled migrations in the same
  change.
- Never modify an already-applied migration; create a new forward migration.
- Never make manual production schema changes outside the migration history.
- Prefer additive and backward-compatible migrations. Separate destructive data
  removal from application deployment and require explicit user approval.
- Back up material production data before destructive migrations and document
  rollback or recovery steps.
- Keep secrets in server-only environment variables. Never expose database
  credentials through `NEXT_PUBLIC_*` variables.

## 7. Testing Rules

The repository currently has no automated test framework. Do not report that
tests passed unless a real test command exists and was executed.

After modifying TypeScript, React, configuration, data, or SEO behavior, run:

1. `npm run lint`
2. `npm run build`
3. `git diff --check`

Also perform targeted manual verification appropriate to the change:

- Generator changes: test Generate 1, 10, and 50; Regenerate; Copy list;
  favorite add/remove; Copy favorites; Clear all; and the zero-favorites
  collapsed state.
- Responsive UI changes: inspect at least one desktop and one narrow mobile
  width.
- Page or navigation changes: open every affected route and verify internal
  links and the 404 behavior where relevant.
- SEO changes: inspect page metadata, canonical URL, `/robots.txt`, and
  `/sitemap.xml`; confirm the production URL is not a placeholder.
- Dataset changes: verify count, uniqueness, blank values, formatting, category
  registration, and sitemap output.

Before finishing, inspect `git status` and confirm that only intended files
changed. Treat LF/CRLF Git messages as warnings, not build failures, but avoid
unnecessary line-ending churn.

## 8. AI Agent Workflow

### Before modifying files

1. Read this `AGENTS.md` completely.
2. Read the relevant Next.js 16 documentation in `node_modules/next/dist/docs/`
   before using or changing framework APIs.
3. Inspect `git status` and preserve existing user changes.
4. Inspect the relevant implementation, configuration, and related pages. Do
   not make assumptions that can be verified locally.
5. Explain a concise plan to the user before making changes, including the files
   expected to change and any meaningful tradeoffs.
6. Ask for direction before introducing a backend, database, external service,
   tracking, ads, destructive data changes, or a materially different design.

### While modifying files

- Make the smallest coherent change that fully satisfies the request.
- Modify only files within scope and use patch-based edits for source files.
- Preserve current behavior unless the request explicitly changes it.
- Keep SEO copy, metadata, sitemap entries, navigation, and dataset
  configuration consistent with each other.
- Do not overwrite unrelated work, generated files, source spreadsheets, or
  environment secrets.
- Do not commit, deploy, publish, or contact external services unless the user
  asks for that action.

### After modifying files

1. Review the diff for correctness, accessibility, responsive behavior, SEO
   consistency, and unintended edits.
2. Run all checks required by the Testing Rules.
3. If a check cannot run, state exactly which check was skipped and why.
4. Summarize the user-visible result first.
5. List the files changed, verification performed, and any remaining limitation
   or required deployment configuration.
6. Never claim success based only on compilation when the requested behavior is
   interactive and can be tested in a browser.
