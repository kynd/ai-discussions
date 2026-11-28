import { defineConfig } from 'astro/config';

// Deployed inside the ai-discussions GitHub Pages site, at
// www.kynd.info/ai-discussions/research_projects/ (see .github/workflows/deploy.yml).
const BASE = '/ai-discussions/research_projects';

// Rebase root-absolute markdown links/images (e.g. /articles/foo) under the base path,
// so in-prose cross-links resolve correctly on the deployed site.
function remarkRebaseLinks() {
  return (tree) => {
    const visit = (node) => {
      if (
        (node.type === 'link' || node.type === 'image') &&
        typeof node.url === 'string' &&
        node.url.startsWith('/') &&
        !node.url.startsWith('//')
      ) {
        node.url = BASE + node.url;
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}

// Collapsible sections for articles. The markdown format is unchanged (sections are
// separated by `---`, headings come in EN/JA pairs); at build time each section becomes
//   <details class="fold fold-2"><summary><h2>EN</h2><h2>JA</h2></summary>…</details>
// and, inside it, each run of `### EN` / `### JA` headings opens a nested fold-3 block,
// so readers can open the page step by step. The first block (the summary) stays open.
function rehypeFoldSections() {
  const isEl = (n, tag) => n && n.type === 'element' && n.tagName === tag;
  const isBlank = (n) => n.type === 'text' && !n.value.trim();
  const el = (tagName, className, children) => ({
    type: 'element', tagName, properties: className ? { className } : {}, children,
  });

  // Group nodes so each run of <hN> headings plus the content after it becomes a fold.
  function fold(nodes, level) {
    const tag = `h${level}`;
    const out = [];
    let i = 0;
    while (i < nodes.length) {
      if (!isEl(nodes[i], tag)) { out.push(nodes[i++]); continue; }
      const heads = [];
      while (i < nodes.length && (isEl(nodes[i], tag) || isBlank(nodes[i]))) {
        if (!isBlank(nodes[i])) heads.push(nodes[i]);
        i++;
      }
      const body = [];
      while (i < nodes.length && !isEl(nodes[i], tag)) body.push(nodes[i++]);
      const inner = level === 2 ? fold(body, 3) : body;
      out.push(el('details', ['fold', `fold-${level}`], [
        el('summary', ['fold-summary'], heads),
        el('div', ['fold-body'], inner),
      ]));
    }
    return out;
  }

  return (tree, file) => {
    const path = (file && (file.path || (file.history && file.history[0]))) || '';
    if (!path.includes('/content/articles/')) return;
    const chunks = [[]];
    for (const n of tree.children) {
      if (isEl(n, 'hr')) chunks.push([]);
      else chunks[chunks.length - 1].push(n);
    }
    tree.children = chunks.flatMap((c) => fold(c, 2));
  };
}

export default defineConfig({
  base: BASE,
  output: 'static',
  markdown: {
    remarkPlugins: [remarkRebaseLinks],
    rehypePlugins: [rehypeFoldSections],
  },
  server: {
    port: Number(process.env.PORT) || 4321,
    host: true,
  },
  build: {
    assets: 'assets',
  },
  devToolbar: {
    enabled: false,
  },
});
