# CLAUDE.md — Research Projects

A bilingual static Astro site that teaches students (upper elementary to junior high school) how
to run a research project, using real topics as worked examples (first: heat waves). It lives in
the `research_projects/` folder of the `kynd/ai-discussions` repo and is deployed inside that
site at `www.kynd.info/ai-discussions/research_projects/` (base `/ai-discussions/research_projects`).

**Follow every rule in the root `../CLAUDE.md`** (conversation protocol, bilingual format,
index terms, reindex, changes log, commit and push), applied to the files in this folder, with
these differences:

- **Audience.** Readers are about 10–15 years old. Follow "Writing for young readers" in
  `docs/style.md`: everyday words, new words explained on first use, short sentences,
  concrete examples, an encouraging tone ("Let's …" / 「〜しましょう」), です・ます in Japanese with common kanji, Arabic numerals for counts (1つ, 3人). No 〜のです; single 「—」.
- **Sources for kids.** Prefer sources a student can read: government science agencies (NOAA,
  NASA, Met Office, 気象庁, 環境省), science magazines for young readers (Science News Explores),
  encyclopedias, universities, and research groups. Summarize them; never quote at length.
  List sources in `<aside class="resources">` blocks with a one-line EN + JA summary each.
- **Collapsible structure.** Sections (`---` + `##` EN/JA pair) and steps (`###` EN/JA pair)
  become collapsible blocks at build time (`rehypeFoldSections` in `astro.config.mjs`). Keep the
  summary paragraph first and unfolded. Numbered headings (*Step 1*, *Question A*) are allowed.
- **Reading order.** Set frontmatter `order:` (lower = earlier) on articles that form a sequence.
- **Links** in the reply: `https://www.kynd.info/ai-discussions/research_projects/articles/<slug>/`
  and the GitHub source `https://github.com/kynd/ai-discussions/blob/<branch>/research_projects/src/content/articles/<slug>.md`.

Commands (run inside `research_projects/`): `npm install`, `npm run reindex`, `npm run dev`,
`npm run build`.
- **No AI disclaimer box** under article titles on this site (removed at the user's request); the homepage intro says the pages are AI-written.
- **Reference docs are not published.** The Editorial Policy, Writing Style and change log live in
  `docs/policy.md`, `docs/style.md` and `docs/changes.md`. They are not part of the site build: read
  and follow them, keep them up to date, and log substantial changes in `docs/changes.md`
  (where the root rules say `src/pages/…`). There are no Chronology / People / Keywords pages;
  `src/data/index-terms.mjs` still feeds the in-prose term links (click → search), so keep
  capturing new terms there.
