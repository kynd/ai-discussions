// Preset topic chips shown on the homepage. Each `query` is embedded exactly like a
// typed search — semantic, not literal. `label` is what the chip displays.
// Single source of truth: imported by both the build-index script and the homepage.
// Revise this list as the conversation's themes become clear.
export const TOPICS = [
  { label: 'Art', query: 'art, artists, and works of art' },
  { label: 'Design & Architecture', query: 'design, architecture, and the built environment' },
  { label: 'History', query: 'historical events, periods, and their causes' },
  { label: 'Evolution', query: 'evolution, natural selection, and its influence on society and thought' },
  { label: 'Science', query: 'science, discovery, and how we understand nature' },
  { label: 'Technology', query: 'technology, machines, computers, and their effects on society' },
  { label: 'Ideas & Philosophy', query: 'philosophy, ideas, and ways of thinking' },
  { label: 'Society & Culture', query: 'society, culture, politics, and everyday life' },
  { label: 'Japan', query: 'Japan, its history, culture, and art' },
];
