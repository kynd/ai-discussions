// Curated index terms captured from the article set. Single source of truth for the
// /chronology, /people, and /keyword index pages AND for the in-prose term auto-linker.
//
// Each entry: { label, query?, aliases?, noLink? }
//   label   — displayed text and default search query
//   query   — semantic-search string sent on click (defaults to label)
//   aliases — extra strings matched when auto-linking this term inside article prose
//             (label is always matched; add surnames / Japanese forms here)
//   noLink  — if true, still shown on the index page but excluded from the in-prose
//             auto-linker (use for common words that would over-match, e.g. "Contemporary")
//
// RULE: whenever you add or edit an article, capture any new decade/era, artist/designer,
// or movement/keyword here so the index pages and in-prose links stay in sync.

export const CHRONOLOGY = [
];

// group: 'Fine art' | 'Design & architecture' | 'Film & music' | 'Manga & anime' | 'Critics & curators'
export const ARTISTS = [
];

// group: 'Movements' | 'Media & concepts' | 'History & society'
export const KEYWORDS = [
];
