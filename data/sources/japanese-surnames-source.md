# Japanese surname data source

The original data file is `last_name_org.csv` from shuheilocale's Japanese
Personal Name Dataset and was supplied to this project on August 8, 2026. An
unchanged copy is preserved as
`last-name-org-japanese-surnames-2026-08-08.csv` in this directory.

- Repository:
  <https://github.com/shuheilocale/japanese-personal-name-dataset>
- Source file:
  <https://github.com/shuheilocale/japanese-personal-name-dataset/blob/main/japanese_personal_name_dataset/dataset/last_name_org.csv>
- License: MIT, Copyright (c) 2022 shuheilocale. The required notice is
  preserved in `japanese-personal-name-dataset-LICENSE.txt`.

The CSV has no header and contains 1,999 rows with four columns:

1. surname in kanji;
2. estimated count;
3. kana reading;
4. romanized spelling.

Validation found no blank cells, invalid count values, or duplicate kanji. The
production JSON combines the romanized spelling, kana reading, and kanji as one
unique value, for example `SATOU (さとう / 佐藤)`. The estimated count column is
not used by the generator.

The upstream README describes the romanization as Hepburn-style and notes that
errors may remain. It does not identify the reference date or collection method
for the estimated count column. The website therefore does not use that column
or describe the estimates as official or current.
