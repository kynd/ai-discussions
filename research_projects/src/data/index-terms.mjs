// Curated index terms captured from the article set. Feeds the in-prose term auto-linker
// (each linked term runs a semantic search on click). This site has no index pages.
//
// Each entry: { label, query?, aliases?, noLink?, group? }
//   label   — displayed text and default search query
//   query   — semantic-search string sent on click (defaults to label)
//   aliases — extra strings matched when auto-linking this term inside article prose
//             (label is always matched; add surnames / Japanese forms here)
//   noLink  — if true, still shown on the index page but excluded from the in-prose
//             auto-linker (use for common words that would over-match)
//
// RULE: whenever you add or edit an article, capture any new period/event, person,
// or concept/keyword here so the in-prose links stay complete.

export const CHRONOLOGY = [
  { label: '1995 Chicago heat wave', query: 'the 1995 Chicago heat wave and why so many people died', aliases: ['1995年のシカゴ'] },
  { label: '2003 European heat wave', query: 'the 2003 European heat wave and its death toll', aliases: ['summer of 2003', '2003年の夏', '2003年のヨーロッパ'] },
  { label: '2021 North American heat wave', query: 'the 2021 heat wave in western North America', aliases: ['2021 heat wave'] },
  { label: '2022 UK heat wave', query: 'the July 2022 UK heat wave and 40°C record', aliases: ['19 July 2022', '2022年7月19日'] },
  { label: '2025 Japan record heat', query: "Japan's record temperature of 41.8°C in 2025", aliases: ['Isesaki', '伊勢崎'] },
];

// group: 'Science & technology' | 'History & society'
export const ARTISTS = [
  { label: 'Peter Stott', group: 'Science & technology', query: 'Peter Stott and the first heat wave attribution study', aliases: ['Stott', 'ストット'] },
  { label: 'Friederike Otto', group: 'Science & technology', query: 'Friederike Otto and World Weather Attribution', aliases: ['Otto', 'オットー'] },
  { label: 'Geert Jan van Oldenborgh', group: 'Science & technology', query: 'Geert Jan van Oldenborgh, co-founder of World Weather Attribution', aliases: ['van Oldenborgh', 'オルデンボルフ'] },
  { label: 'Myles Allen', group: 'Science & technology', aliases: ['マイルズ・アレン'] },
  { label: 'Dáithí Stone', group: 'Science & technology', aliases: ['ダイシー・ストーン'] },
  { label: 'Eric Klinenberg', group: 'History & society', query: 'Eric Klinenberg and the social causes of heat wave deaths', aliases: ['Klinenberg', 'クリネンバーグ'] },
  { label: 'Jennifer Vanos', group: 'Science & technology', query: 'heat and health research', aliases: ['Vanos'] },
];

export const KEYWORDS = [
  { label: 'Research goal', group: 'Research skills', query: 'setting a goal for a research project' },
  { label: 'Question map', group: 'Research skills', query: 'making and updating a map of research questions', aliases: ['問いの地図'] },
  { label: 'Follow-up questions', group: 'Research skills', query: 'asking follow-up questions to go one step deeper' },
  { label: 'Trustworthy sources', group: 'Research skills', query: 'choosing reliable websites and sources for research' },
  { label: 'Summarizing in your own words', group: 'Research skills', query: 'summarizing sources in your own words instead of copying', aliases: ['自分の言葉'] },
  { label: 'Divide and conquer', group: 'Research skills', query: 'researching with others: dividing the work or working in parallel and merging findings', aliases: ['work in parallel', '手分け'] },
  { label: 'Source notes', group: 'Research skills', query: 'keeping note cards and a list of sources', aliases: ['メモカード', '参考資料'] },
  { label: 'Heat wave', group: 'Weather & climate', query: 'what a heat wave is', aliases: ['heat waves', 'heatwave', '熱波'] },
  { label: 'Heat dome', group: 'Weather & climate', query: 'heat domes and high pressure', aliases: ['ヒートドーム'] },
  { label: 'High pressure', group: 'Weather & climate', query: 'high pressure systems and sinking air', aliases: ['高気圧'] },
  { label: 'Jet stream', group: 'Weather & climate', query: 'the jet stream and stuck weather patterns', aliases: ['ジェット気流'] },
  { label: 'Urban heat island', group: 'Weather & climate', query: 'why cities are hotter than the countryside', aliases: ['ヒートアイランド'] },
  { label: 'Climate change', group: 'Weather & climate', query: 'climate change and heat waves', aliases: ['気候変動'] },
  { label: 'Greenhouse gases', group: 'Weather & climate', query: 'greenhouse gases and global warming', aliases: ['greenhouse gas', '温室効果ガス'] },
  { label: 'Attribution science', group: 'Weather & climate', query: 'attribution science: how much climate change caused an extreme weather event', aliases: ['attribution', 'アトリビューション'] },
  { label: 'World Weather Attribution', group: 'Fields & organizations', query: 'World Weather Attribution and rapid attribution studies', aliases: ['ワールド・ウェザー・アトリビューション'] },
  { label: 'Heatstroke', group: 'Health & society', query: 'heatstroke, heat exhaustion, and staying safe', aliases: ['heat stroke', 'heat exhaustion', '熱中症'] },
  { label: 'Heat index (WBGT)', group: 'Health & society', query: 'the WBGT heat index', aliases: ['WBGT', '暑さ指数'] },
  { label: 'Mōshobi', group: 'Weather & climate', query: 'Japanese names for hot days: natsubi, manatsubi, mōshobi, kokushobi', aliases: ['mōshobi', 'kokushobi', '猛暑日', '酷暑日', '真夏日'] },
  { label: 'Drought', group: 'Health & society', query: 'droughts, crops, and wildfires during heat waves', aliases: ['干ばつ'] },
  { label: 'Wildfire', group: 'Health & society', query: 'wildfires during heat waves', aliases: ['wildfires', '山火事'] },
  { label: 'Meteorology', group: 'Fields & organizations', query: 'meteorologists and weather forecasting', aliases: ['meteorologists', '気象学者'] },
  { label: 'Climate science', group: 'Fields & organizations', query: 'climate scientists and long-term change', aliases: ['climate scientists', '気候学者'] },
  { label: 'Epidemiology', group: 'Fields & organizations', query: 'epidemiologists and public health research on heat', aliases: ['epidemiologists', '疫学者'] },
  { label: 'Sociology', group: 'Fields & organizations', query: 'sociologists and the social side of disasters', aliases: ['sociologist', 'sociologists', '社会学者'] },
  { label: 'NOAA', group: 'Fields & organizations', query: 'NOAA and SciJinks', aliases: ['海洋大気庁'] },
  { label: 'Met Office', group: 'Fields & organizations', query: "the UK's Met Office", aliases: ['メットオフィス', 'イギリスの気象局'] },
  { label: 'Japan Meteorological Agency', group: 'Fields & organizations', query: "Japan's weather agency and its names for hot days", aliases: ['気象庁'] },
];
