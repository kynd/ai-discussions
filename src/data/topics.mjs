// Preset topic chips shown on the homepage. Each `query` is embedded exactly like a
// typed search — semantic, not literal. `label` is what the chip displays.
// Single source of truth: imported by both the build-index script and the homepage.
// Revise this list as the conversation's themes become clear.
export const TOPICS = [
  { label: 'Painting', query: 'painting, its materials, techniques, and history' },
  { label: 'Abstraction', query: 'abstraction and the departure from representation' },
  { label: 'Art & Technology', query: 'art made with machines, computers, code, and new media' },
  { label: 'Perception', query: 'color, light, seeing, and how viewers perceive art' },
  { label: 'Artists', query: 'the lives, methods, and ideas of individual artists' },
  { label: 'Art & Society', query: 'art, institutions, markets, politics, and society' },
  { label: 'Japan', query: 'art and visual culture in Japan' },
  { label: 'Design & Architecture', query: 'design, architecture, and the built environment' },
];
