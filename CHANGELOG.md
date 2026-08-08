# Changelog

This file records notable project changes. Entries must describe changes that
actually exist in the repository and must not claim backend, database, SEO, or
application work that was not performed.

## 2026-08-08

### Added

- Added 1,999 unique Japanese surname entries pairing romanized spellings with
  kana and kanji, together with the source CSV and a provenance note.
- Added the `/japanese-surnames` generator and SEO page with unique metadata,
  visible supporting content, a breadcrumb, homepage discovery, and automatic
  sitemap inclusion through the category registry.

### Changed

- Added Japanese surnames to the shared responsive header and expanded the
  homepage category grid for three generators.
- Documented shuheilocale's Japanese Personal Name Dataset as the source,
  and preserved its MIT copyright and permission notice. The estimated count
  column is not presented as official or current population data because its
  reference date and method are unspecified.

## 2026-08-07

### Changed

- Updated the American surname FAQ to describe batches of 1, 10, or 50 and the
  generator's current repeat-avoidance behavior.
- Added American and Scottish category links to the shared header, with a
  wrapping mobile layout for narrow screens.

### Fixed

- Added the missing homepage link to the Scottish surname generator so both
  current categories are discoverable through crawlable internal navigation.

## 2026-08-06

### Added

- Added 3,672 unique surnames recorded in Scotland from 1975 to 2025, together
  with the original National Records of Scotland workbook for provenance.
- Added the `/scottish-surnames` generator and SEO page with unique metadata,
  visible supporting content, a breadcrumb, homepage discovery, and sitemap
  inclusion through the category registry.
- Added per-category browser `localStorage` persistence for favorites.

### Changed

- Displayed batches of 50 results in two columns on wider screens while keeping
  a single-column mobile layout.
- Moved the Favorites section between the generator controls and the generated
  results, while continuing to hide it when no names are saved.

### Fixed

- Removed the React lint error caused by synchronous state updates while
  loading favorites from browser storage.

## 2026-08-05

### Added

- Added `TODO.md` for project progress tracking.
- Added `SEO.md` for ongoing Google SEO guidance.

### Changed

- Replaced the default `README.md` with project-specific documentation.
- Expanded `AGENTS.md` with development rules for future AI agents.

### Fixed

- No application code fixes.
