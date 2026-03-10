export type Project = {
  id: string;
  title: string;
  category: 'bymase' | 'portfolio';
  type: string;
  thumbnail: string;
  description: string;
  tags: string[];
  year: string;
  client?: string;
  videoUrl?: string;
  images?: string[];
};

export const projects: Project[] = [
  // byMase — Videos + Creative Director Work
  {
    id: 'bm-music-video-01',
    title: 'MUSIC VIDEO — SAMPLE TREATMENT',
    category: 'bymase',
    type: 'Music Video',
    thumbnail: '/images/placeholder.svg',
    description: 'Full creative direction for an artist music video. Concept development, location scouting, shot list, and post-production oversight.',
    tags: ['Creative Direction', 'Music Video', 'Treatment'],
    year: '2026',
  },
  {
    id: 'bm-brand-film-01',
    title: 'BRAND FILM — LIFESTYLE EDIT',
    category: 'bymase',
    type: 'Brand Film',
    thumbnail: '/images/placeholder.svg',
    description: 'Cinematic brand film capturing the energy and identity of a lifestyle brand. Directed and produced from concept to final cut.',
    tags: ['Brand Film', 'Direction', 'Production'],
    year: '2026',
  },
  {
    id: 'bm-commercial-01',
    title: 'COMMERCIAL — PRODUCT LAUNCH',
    category: 'bymase',
    type: 'Commercial',
    thumbnail: '/images/placeholder.svg',
    description: 'Product launch commercial with dynamic visuals, product close-ups, and lifestyle integration. Full creative direction.',
    tags: ['Commercial', 'Product', 'Creative Direction'],
    year: '2026',
  },
  {
    id: 'bm-bts-01',
    title: 'BEHIND THE SCENES — STUDIO SESSION',
    category: 'bymase',
    type: 'BTS Content',
    thumbnail: '/images/placeholder.svg',
    description: 'Raw behind-the-scenes content from a studio session. Capturing the process, the energy, and the people.',
    tags: ['BTS', 'Documentary', 'Content'],
    year: '2026',
  },
  {
    id: 'bm-short-film-01',
    title: 'SHORT FILM — NARRATIVE',
    category: 'bymase',
    type: 'Short Film',
    thumbnail: '/images/placeholder.svg',
    description: 'Narrative short film exploring identity and environment. Written, directed, and edited.',
    tags: ['Short Film', 'Narrative', 'Direction'],
    year: '2025',
  },

  // Portfolio — Concept Work
  {
    id: 'pf-concept-streetwear',
    title: 'STREETWEAR BRAND CONCEPT',
    category: 'portfolio',
    type: 'Brand Concept',
    thumbnail: '/images/placeholder.svg',
    description: 'Full brand identity concept for an emerging streetwear label. Logo, color palette, typography, lookbook direction, and social media strategy.',
    tags: ['Branding', 'Concept', 'Streetwear'],
    year: '2026',
  },
  {
    id: 'pf-concept-album-art',
    title: 'ALBUM ART DIRECTION',
    category: 'portfolio',
    type: 'Art Direction',
    thumbnail: '/images/placeholder.svg',
    description: 'Concept art direction for an album release. Cover design, visual identity, and rollout campaign strategy.',
    tags: ['Art Direction', 'Music', 'Visual Identity'],
    year: '2026',
  },
  {
    id: 'pf-concept-event',
    title: 'EVENT CONCEPT — POP-UP',
    category: 'portfolio',
    type: 'Event Design',
    thumbnail: '/images/placeholder.svg',
    description: 'Full concept design for a pop-up event. Space layout, branding, signage, atmosphere direction, and promotional materials.',
    tags: ['Event', 'Concept', 'Space Design'],
    year: '2026',
  },
  {
    id: 'pf-concept-packaging',
    title: 'PACKAGING DESIGN CONCEPT',
    category: 'portfolio',
    type: 'Packaging',
    thumbnail: '/images/placeholder.svg',
    description: 'Product packaging concept with sustainability focus. Materials, print, unboxing experience design.',
    tags: ['Packaging', 'Design', 'Concept'],
    year: '2025',
  },
  {
    id: 'pf-concept-social',
    title: 'SOCIAL MEDIA CAMPAIGN',
    category: 'portfolio',
    type: 'Campaign',
    thumbnail: '/images/placeholder.svg',
    description: 'Social media campaign strategy and visual direction for a brand launch. Content calendar, visual templates, and tone of voice.',
    tags: ['Social Media', 'Campaign', 'Strategy'],
    year: '2026',
  },
  {
    id: 'pf-concept-merch',
    title: 'MERCH LINE CONCEPT',
    category: 'portfolio',
    type: 'Merch Design',
    thumbnail: '/images/placeholder.svg',
    description: 'Complete merchandise line concept. Apparel designs, mockups, production specs, and rollout strategy.',
    tags: ['Merch', 'Design', 'Concept'],
    year: '2025',
  },
];

export function getProjectsByCategory(category: 'bymase' | 'portfolio') {
  return projects.filter((p) => p.category === category);
}

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
