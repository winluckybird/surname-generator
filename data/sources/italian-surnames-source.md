# Italian surname data source

## Source

- Dataset: Popular Names by Country Dataset
- Repository: https://github.com/sigpwned/popular-names-by-country-dataset
- Raw source file: `popular-names-by-country-surnames-2023.csv`
- Retrieved: 2026-08-10
- Dataset snapshot provenance: public surname lists collected during the week
  of July 8, 2023
- License: Creative Commons CC0 1.0 Universal
- Preserved license: `popular-names-by-country-dataset-LICENSE.txt`

## Selection and transformation

The production list selects rows whose country code is `IT` from the source
CSV and uses the localized surname value. Values were trimmed, checked for
blanks, deduplicated case-insensitively, and sorted for deterministic output.
This produced 100 unique, nonblank surname strings in
`data/italian-surnames.json`.

## Limitations

The source repository describes its data as popular names by country and says
it assembled the underlying surname lists from public Wikipedia pages in July
2023. This snapshot is not an official Italian population register, census, or
complete list of surnames used in Italy. The production generator does not use
or present the source counts as current population statistics. A surname can
be used in more than one country or community and cannot establish a real
person's nationality, ancestry, ethnicity, or family history.
