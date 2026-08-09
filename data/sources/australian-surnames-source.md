# Australian surname data source

## Source

- Dataset: Wikidata structured data
- Query endpoint: https://query.wikidata.org/sparql
- Query file: `australian-surnames-wikidata.sparql`
- Raw result: `australian-surnames-wikidata.csv`
- Retrieved: 2026-08-09
- License: Creative Commons CC0 1.0 Universal
- License information: https://www.wikidata.org/wiki/Wikidata:Licensing

## Selection and transformation

The query selects distinct Wikidata family-name entities used by people whose
records contain both country of citizenship (`P27`) = Australia (`Q408`) and
family name (`P734`). Only English labels are requested. The result is limited
to 5,000 rows so that the source snapshot remains practical to audit and keep
in version control.

The production JSON was created from the 5,000 returned rows by trimming
whitespace, replacing curly apostrophes with straight apostrophes, rejecting
blank or malformed labels, deduplicating labels case-insensitively, and sorting
the remaining values for deterministic output. This produced 4,991 unique,
nonblank surname strings in `data/australian-surnames.json`.

## Limitations

This is not an Australian population register or surname-frequency ranking.
Wikidata is community-maintained and contains incomplete or incorrect records.
The selection reflects only people who have both properties explicitly modeled
in the retrieved snapshot; it can include historical people and people with
more than one citizenship. A surname appearing in the result does not make it
exclusive to Australia and cannot establish a real person's nationality,
ancestry, ethnicity, or family history.
