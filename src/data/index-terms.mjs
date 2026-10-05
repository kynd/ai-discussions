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
  { label: '19th century', query: 'the nineteenth century', aliases: ['nineteenth century', '十九世紀', '19世紀'] },
  { label: '20th century', query: 'the twentieth century', aliases: ['twentieth century', '二十世紀', '20世紀'] },
  { label: 'Cold War', query: 'the Cold War era', aliases: ['冷戦'] },
];

// group: 'Fine art' | 'Design & architecture' | 'Film & music' | 'Manga & anime' | 'Critics & curators'
//      | 'Science & technology' | 'Thought & literature' | 'History & society'
export const ARTISTS = [
  // ── Science & technology ────────────────────────────────────
  { label: 'Charles Darwin', query: 'Charles Darwin and natural selection', group: 'Science & technology', aliases: ['Darwin', 'ダーウィン'] },
  { label: 'Alfred Russel Wallace', group: 'Science & technology', aliases: ['Wallace', 'ウォレス'] },
  { label: 'Jean-Baptiste Lamarck', group: 'Science & technology', aliases: ['Lamarck', 'ラマルク'] },
  { label: 'Gregor Mendel', group: 'Science & technology', aliases: ['Mendel', 'メンデル'] },
  { label: 'August Weismann', group: 'Science & technology', aliases: ['Weismann', 'ヴァイスマン'] },
  { label: 'Francis Galton', group: 'Science & technology', aliases: ['Galton', 'ゴルトン'] },
  { label: 'Thomas Henry Huxley', group: 'Science & technology', aliases: ['T. H. Huxley', 'トマス・ヘンリー・ハクスリー'] },
  { label: 'Julian Huxley', group: 'Science & technology', aliases: ['ジュリアン・ハクスリー'] },
  { label: 'Ronald Fisher', group: 'Science & technology', aliases: ['Fisher', 'フィッシャー'] },
  { label: 'J. B. S. Haldane', group: 'Science & technology', aliases: ['Haldane', 'ホールデン'] },
  { label: 'Sewall Wright', group: 'Science & technology', aliases: ['シューアル・ライト'] },
  { label: 'Theodosius Dobzhansky', group: 'Science & technology', aliases: ['Dobzhansky', 'ドブジャンスキー'] },
  { label: 'Ernst Mayr', group: 'Science & technology', aliases: ['Mayr', 'マイア'] },
  { label: 'Trofim Lysenko', group: 'Science & technology', aliases: ['Lysenko', 'ルイセンコ'] },
  { label: 'Nikolai Vavilov', group: 'Science & technology', aliases: ['Vavilov', 'ヴァヴィロフ'] },
  { label: 'Motoo Kimura', query: 'Motoo Kimura and the neutral theory of molecular evolution', group: 'Science & technology', aliases: ['Kimura', '木村資生'] },
  { label: 'Tomoko Ohta', group: 'Science & technology', aliases: ['Ohta', '太田朋子'] },
  { label: 'Kinji Imanishi', query: 'Kinji Imanishi, habitat segregation and a non-Darwinian theory of evolution', group: 'Science & technology', aliases: ['Imanishi', '今西錦司'] },
  { label: 'William Hamilton', query: 'William Hamilton, kin selection and inclusive fitness', group: 'Science & technology', aliases: ['Hamilton', 'ハミルトン'] },
  { label: 'John Maynard Smith', group: 'Science & technology', aliases: ['Maynard Smith', 'メイナード＝スミス'] },
  { label: 'Richard Dawkins', group: 'Science & technology', aliases: ['Dawkins', 'ドーキンス'] },
  { label: 'Robert Trivers', group: 'Science & technology', aliases: ['Trivers', 'トリヴァース'] },
  { label: 'E. O. Wilson', query: 'E. O. Wilson and sociobiology', group: 'Science & technology', aliases: ['E・O・ウィルソン'] },
  { label: 'Stephen Jay Gould', group: 'Science & technology', aliases: ['Gould', 'グールド'] },
  { label: 'Richard Lewontin', group: 'Science & technology', aliases: ['Lewontin', 'ルウォンティン'] },
  { label: 'Lynn Margulis', group: 'Science & technology', aliases: ['Margulis', 'マーギュリス'] },
  { label: 'Carl Woese', group: 'Science & technology', aliases: ['Woese', 'ウーズ'] },
  { label: 'Svante Pääbo', group: 'Science & technology', aliases: ['Pääbo', 'ペーボ'] },
  { label: 'Richard Lenski', group: 'Science & technology', aliases: ['Lenski', 'レンスキー'] },
  // ── Thought & literature ────────────────────────────────────
  { label: 'Thomas Malthus', group: 'Thought & literature', aliases: ['Malthus', 'マルサス'] },
  { label: 'Herbert Spencer', query: 'Herbert Spencer, survival of the fittest and social evolution', group: 'Thought & literature', aliases: ['Spencer', 'スペンサー'] },
  { label: 'Peter Kropotkin', query: 'Peter Kropotkin and mutual aid', group: 'Thought & literature', aliases: ['Kropotkin', 'クロポトキン'] },
  { label: 'Karl Marx', group: 'Thought & literature', aliases: ['Marx', 'マルクス'] },
  { label: 'John Dewey', group: 'Thought & literature', aliases: ['Dewey', 'デューイ'] },
  { label: 'Henri Bergson', group: 'Thought & literature', aliases: ['Bergson', 'ベルクソン'] },
  { label: 'Daniel Dennett', group: 'Thought & literature', aliases: ['Dennett', 'デネット'] },
  { label: 'Thorstein Veblen', group: 'Thought & literature', aliases: ['Veblen', 'ヴェブレン'] },
  { label: 'Friedrich Hayek', group: 'Thought & literature', aliases: ['Hayek', 'ハイエク'] },
  { label: 'Katō Hiroyuki', group: 'Thought & literature', aliases: ['加藤弘之'] },
  { label: 'Kōtoku Shūsui', group: 'Thought & literature', aliases: ['幸徳秋水'] },
  { label: 'Yan Fu', query: 'Yan Fu and the Chinese reception of evolution', group: 'Thought & literature', aliases: ['厳復'] },
];

// group: 'Movements' | 'Media & concepts' | 'Science & technology' | 'Ideas' | 'History & society'
export const KEYWORDS = [
  // ── Science & technology ────────────────────────────────────
  { label: 'Natural selection', group: 'Science & technology', aliases: ['自然選択'] },
  { label: 'Modern Synthesis', query: 'the Modern Synthesis of genetics and natural selection', group: 'Science & technology', aliases: ['総合説'] },
  { label: 'Population genetics', group: 'Science & technology', aliases: ['集団遺伝学'] },
  { label: 'Genetic drift', group: 'Science & technology', aliases: ['遺伝的浮動'] },
  { label: 'Neutral theory', query: 'the neutral theory of molecular evolution', group: 'Science & technology', aliases: ['中立説'] },
  { label: 'Kin selection', query: 'kin selection and inclusive fitness', group: 'Science & technology', aliases: ['inclusive fitness', '血縁選択', '包括適応度'] },
  { label: 'Punctuated equilibrium', group: 'Science & technology', aliases: ['断続平衡説'] },
  { label: 'Horizontal gene transfer', group: 'Science & technology', aliases: ['遺伝子の水平伝播'] },
  { label: 'Evo-devo', query: 'evolutionary developmental biology', group: 'Science & technology', aliases: ['エヴォデヴォ'] },
  { label: 'Extended evolutionary synthesis', group: 'Science & technology', aliases: ['拡張された進化的総合'] },
  { label: 'Epigenetics', group: 'Science & technology', aliases: ['エピジェネティクス'] },
  { label: 'Lamarckism', query: 'Lamarckism and the inheritance of acquired characteristics', group: 'Science & technology', aliases: ['inheritance of acquired', '獲得形質の遺伝'] },
  { label: 'Sociobiology', group: 'Science & technology', aliases: ['社会生物学'] },
  { label: 'Evolutionary psychology', group: 'Science & technology', aliases: ['進化心理学'] },
  { label: 'Habitat segregation', query: 'Imanishi habitat segregation (sumiwake)', group: 'Science & technology', aliases: ['sumiwake', '棲み分け'] },
  // ── Ideas ───────────────────────────────────────────────────
  { label: 'Social Darwinism', group: 'Ideas', aliases: ['社会ダーウィニズム'] },
  { label: 'Survival of the fittest', group: 'Ideas', aliases: ['適者生存'] },
  { label: 'Mutual aid', query: 'mutual aid and cooperation in evolution', group: 'Ideas', aliases: ['相互扶助'] },
  { label: 'Evolutionary economics', group: 'Ideas', aliases: ['進化経済学'] },
  { label: 'Cultural evolution', group: 'Ideas', aliases: ['文化進化'] },
  { label: 'Pragmatism', group: 'Ideas', aliases: ['プラグマティズム'] },
  { label: 'Naturalistic fallacy', group: 'Ideas', aliases: ['自然主義的誤謬'] },
  { label: 'Argument from design', group: 'Ideas', aliases: ['設計からの議論'] },
  // ── History & society ───────────────────────────────────────
  { label: 'Eugenics', query: 'eugenics and forced sterilisation', group: 'History & society', aliases: ['優生学'] },
  { label: 'Creationism', query: 'creationism and the teaching of evolution', group: 'History & society', aliases: ['creation science', '創造科学'] },
  { label: 'Intelligent design', group: 'History & society', aliases: ['インテリジェント・デザイン'] },
  { label: 'Scopes trial', group: 'History & society', aliases: ['スコープス裁判'] },
  { label: 'Lysenkoism', query: 'Lysenko and the suppression of Soviet genetics', group: 'History & society' },
];
