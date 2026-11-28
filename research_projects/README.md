# Research Projects

A small bilingual (English + Japanese) static site that shows students, from upper elementary to
junior high school, **how to run a research project**, step by step. Each project uses a real
topic as a worked example; the first one is **heat waves**.

It is built on the same Astro template as AI Discussions (the parent folder of this repo):
semantic search, index pages, related pages, the writing style and editorial policy — with one
addition: **every section of an article folds open and closed**, so readers can go step by step.

Published at **https://www.kynd.info/ai-discussions/research_projects/** — the GitHub Pages
workflow in `.github/workflows/deploy.yml` builds this folder and puts it inside the main site.

## Pages

- `src/content/articles/how-to-run-a-research-project.md` — the process: goal, question map,
  breaking a question down, choosing sources, follow-up questions, checking facts, writing.
- `src/content/articles/heat-waves-research-report.md` — the finished example report.

## Collapsible sections

Write articles in the normal bilingual format (see `CLAUDE.md`). At build time the rehype plugin
`rehypeFoldSections` in `astro.config.mjs` turns:

- each `---`-separated section that starts with a `##` EN/JA heading pair into a collapsible
  block, and
- each `###` EN/JA heading pair inside it into a nested collapsible step.

The first block (the summary) always stays open. Article pages have "Open all / Close all".

## Layout

Like kynd.info/writing: no header bar. Floating controls (index toggle, search, font switch) sit over the page, and a collapsible side index lists every article in reading order with its sections as anchors (open by default on wide screens, remembered per visitor). The index and folding scripts are inline, so they work even if the search model's CDN is slow or blocked.
Frontmatter `order:` sets the reading order on the homepage.

## Commands

```bash
npm install
npm run reindex   # regenerate embeddings (needs huggingface.co)
npm run dev
npm run build
```
