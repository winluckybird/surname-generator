# French surname data source

## Source

- Publisher: Institut national de la statistique et des études économiques (INSEE)
- Dataset: Fichier des noms
- Dataset page: https://www.insee.fr/fr/statistiques/3536630
- Original national TXT archive: `insee-french-surnames-1891-2000.zip`
- Published: 2018-05-22
- Retrieved: 2026-08-10
- Reuse terms: Licence Ouverte / Open Licence 2.0, subject to source attribution and faithful representation
- Terms page: https://www.insee.fr/fr/information/2008466

## Coverage

The national file contains surnames recorded at least 30 times for people born
in metropolitan France from 1891 to 2000, except people born before 1946 who
died before 1972. Its coverage for Guadeloupe, Martinique, French Guiana,
Réunion, and Saint-Pierre-et-Miquelon runs from 1900 to 2000. Names below the
publication threshold are grouped into an `AUTRES NOMS` aggregate row.

## Production selection

The production file `data/french-surnames.json` was generated as follows:

1. Read the tab-separated national TXT file from the original archive.
2. Exclude the `AUTRES NOMS` aggregate row.
3. Sum the 11 decade columns from 1891-1900 through 1991-2000 for each surname.
4. Sort by the combined count descending, then by surname ascending to make ties deterministic.
5. Select the first 1,000 surnames and store the original source spellings.

## Validation

- Production entries: 1,000
- Unique entries: 1,000
- Blank entries: 0
- Highest combined total: `MARTIN` with 250,013 records
- Final selected entry: `LE MOAL` with 6,711 records

## Limitations

- The data describes historical birth records, not the current resident population.
- Coverage is incomplete for people born before 1946 who died before 1972.
- The 30-record publication threshold omits rarer names as individual rows.
- A name's presence does not prove a person's nationality, citizenship, ancestry, ethnicity, or family history.
