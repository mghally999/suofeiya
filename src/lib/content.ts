/**
 * Single source of truth for all editorial content + image mappings.
 * Pulled from the Suofeiya company profile, the elicyon port brief, and the
 * normalised image names under `public/images/`.
 */

export const IMG = {
  livingRoom: '/images/living-room-design.png',
  villaInterior: '/images/villa-interior-design.png',
  apartment: '/images/apartment-design.png',
  hotel: '/images/hotel-design.png',
  bedroom: '/images/bedroom-design.png',
  office: '/images/office-interior-design.png',
  exterior: '/images/exterior-design.png',
  bathroom: '/images/bathroom-design.png',
  kitchen: '/images/kitchen-design.png',
  restaurant: '/images/restaurant-design.png',
  retail: '/images/retail-and-fitout.png',
  fitoutResidential: '/images/fitout-residential.png',
  intention: '/images/designed-with-intention.png',
  delivery: '/images/our-delivery.png',
  servicesHome: '/images/our-servies-homepage.png',
  team: '/images/a-world-full-of-works.png',
  objectsHero: '/images/objects-of-desire.png',
  kitchenCabinets: '/images/kitchen-cabinets.png',
  closet: '/images/closet-and-wardrobe.png',
  bathroomVanity: '/images/bathroom-vanity.png',
  countertop: '/images/countertop-systems.png',
  hardware: '/images/hardware-accesories.png',
  interiorDoor: '/images/interior-door.png',
  looseFurniture: '/images/loose-furniture.png',
  childrensRoom: '/images/childrens-room.png'
} as const;

/* ===== Hero ===== */
export const heroWords = ['TIMELESS', 'TAILORED', 'SPACES'] as const;

/* ===== Statement ===== */
export interface StatementWord {
  text: string;
  fade: boolean;
  em?: boolean;
}
export interface StatementLine {
  x: number;
  y: number;
  words: StatementWord[];
}
export const statementLines: StatementLine[] = [
  { x: 0, y: 0, words: [{ text: 'Our', fade: true }] },
  {
    x: 0,
    y: 0,
    words: [
      { text: 'STUDIO', fade: true, em: true },
      { text: 'SCULPTS', fade: true, em: true }
    ]
  },
  {
    x: -50,
    y: 0,
    words: [
      { text: 'SPACES', fade: true, em: true },
      { text: 'that', fade: true },
      { text: 'reflect', fade: true }
    ]
  },
  {
    x: -450,
    y: 55,
    words: [
      { text: 'your', fade: true },
      { text: 'vision,', fade: true },
      { text: 'FORGING', fade: false, em: true },
      { text: 'a', fade: false }
    ]
  },
  {
    x: 161,
    y: 0,
    words: [
      { text: 'NEW', fade: false, em: true },
      { text: 'LUXURY', fade: false, em: true },
      { text: 'through', fade: false },
      { text: 'CRAFT,', fade: false, em: true }
    ]
  },
  {
    x: -152,
    y: 0,
    words: [
      { text: 'VISION', fade: false, em: true },
      { text: 'and', fade: false },
      { text: 'unrivalled', fade: false }
    ]
  },
  {
    x: 429,
    y: -55,
    words: [
      { text: 'GLOBAL', fade: false, em: true },
      { text: 'EXPERTISE.', fade: false, em: true }
    ]
  }
];

/* ===== Project carousel ===== */
export interface ProjectSlide {
  category: string;
  project: string;
  location: string;
  image: string;
  href: string;
}
export const projectSlides: ProjectSlide[] = [
  {
    category: 'RESIDENTIAL',
    project: 'PALM VILLA RESIDENCE',
    location: 'Dubai, UAE',
    image: IMG.bedroom,
    href: '/projects/palm-villa-residence'
  },
  {
    category: 'DEVELOPMENT',
    project: 'EMIRATES HILLS COLLECTION',
    location: 'Dubai, UAE',
    image: IMG.villaInterior,
    href: '/projects/emirates-hills-collection'
  },
  {
    category: 'COMMERCIAL',
    project: 'DIFC PRIVATE OFFICE',
    location: 'Dubai, UAE',
    image: IMG.office,
    href: '/projects/difc-private-office'
  }
];

/* ===== Services (split-pane) ===== */
export interface ServiceBlock {
  number: string;
  title: string;
  copy: string;
  image: string;
  project: string;
}
export const services: ServiceBlock[] = [
  {
    number: '01',
    title: 'INTERIOR DESIGN',
    copy: 'We design interiors that tell the story of each client, shaping residences, commercial spaces and developments through thoughtful detailing, curated materials and considered layouts to create environments that are beautiful, functional and deeply personal.',
    image: IMG.livingRoom,
    project: 'WESTMINSTER VIEW FAMILY HOME'
  },
  {
    number: '02',
    title: 'ARCHITECTURE',
    copy: 'We shape architecture that elevates everyday rituals, balancing material honesty with structural precision so that every threshold, volume and view feels considered, generous and quietly enduring.',
    image: IMG.exterior,
    project: 'DUBAI HILLS PRIVATE RESIDENCE'
  },
  {
    number: '03',
    title: 'PROCUREMENT',
    copy: 'We source, curate and deliver every element that brings a design to life. From custom furnishings and specialist art to bespoke joinery and considered material choices, our procurement service ensures every piece supports the integrity of the design.',
    image: IMG.apartment,
    project: 'NORTH LONDON FAMILY HOME'
  },
  {
    number: '04',
    title: 'PROJECT MANAGEMENT',
    copy: 'We oversee every phase of delivery with quiet precision, coordinating trades, schedules and material flow so that the vision arrives intact, on time, and shaped by the same care that defined the drawing.',
    image: IMG.delivery,
    project: 'EMIRATES HILLS COLLECTION'
  },
  {
    number: '05',
    title: 'CUSTOM CABINETRY & FIT-OUT',
    copy: 'We craft bespoke cabinetry and full fit-out in our own ateliers, fusing global manufacturing scale with atelier-grade joinery to deliver wardrobes, kitchens and millwork that are made for the room, not adapted to it.',
    image: IMG.kitchenCabinets,
    project: 'PALM VILLA RESIDENCE'
  }
];

/* ===== Projects grid ===== */
export interface Project {
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Development';
  city: string;
  image: string;
  span: 'span-7' | 'span-5' | 'span-6' | 'span-4' | 'span-8';
}
export const projects: Project[] = [
  { slug: 'palm-villa-residence', title: 'Palm Villa Residence', category: 'Residential', city: 'Dubai', image: IMG.bedroom, span: 'span-7' },
  { slug: 'emirates-hills-collection', title: 'Emirates Hills Collection', category: 'Development', city: 'Dubai', image: IMG.villaInterior, span: 'span-5' },
  { slug: 'difc-private-office', title: 'DIFC Private Office', category: 'Commercial', city: 'Dubai', image: IMG.office, span: 'span-6' },
  { slug: 'beach-residences', title: 'Beach Residences', category: 'Residential', city: 'Abu Dhabi', image: IMG.apartment, span: 'span-6' },
  { slug: 'capital-hotel-suite', title: 'Capital Hotel Suite', category: 'Hospitality', city: 'Riyadh', image: IMG.hotel, span: 'span-4' },
  { slug: 'downtown-fitout', title: 'Downtown Fit-Out', category: 'Commercial', city: 'Dubai', image: IMG.retail, span: 'span-8' },
  { slug: 'chef-residence-kitchen', title: 'Chef Residence Kitchen', category: 'Residential', city: 'Sharjah', image: IMG.kitchen, span: 'span-5' },
  { slug: 'corniche-restaurant', title: 'Corniche Restaurant', category: 'Hospitality', city: 'Abu Dhabi', image: IMG.restaurant, span: 'span-7' }
];

/* ===== Insights ===== */
export interface Insight {
  slug: string;
  eyebrow: 'RESIDENTIAL' | 'COMMERCIAL' | 'DEVELOPMENT' | 'INSIGHT';
  title: string;
  sub: string;
  image: string;
}
export const insights: Insight[] = [
  {
    slug: 'dubai-villa-quiet-grandeur',
    eyebrow: 'RESIDENTIAL',
    title: 'A Dubai Villa of QUIET GRANDEUR and CRAFTED DETAIL',
    sub: 'Where bespoke form meets desert stillness',
    image: IMG.villaInterior
  },
  {
    slug: 'office-of-still-light',
    eyebrow: 'COMMERCIAL',
    title: 'A Workplace of STILL LIGHT and CONSIDERED MATERIAL',
    sub: 'Where the workday softens into the architecture',
    image: IMG.office
  },
  {
    slug: 'whole-house-philosophy',
    eyebrow: 'INSIGHT',
    title: 'The WHOLE-HOUSE Philosophy: One Studio, One Vision',
    sub: 'How a single team shapes the entire home',
    image: IMG.intention
  }
];

/* ===== Process ===== */
export const processSteps = [
  {
    title: 'DISCOVERY',
    copy: 'Every project begins with understanding — of the client, the site, the brief and the rituals the space must hold. We listen, observe, and translate intent into the first lines of a design.'
  },
  {
    title: 'DEVELOPMENT',
    copy: 'Through design meetings led by senior members of the studio, the vision is refined: plans, materials, light, joinery and bespoke pieces are resolved in concert until each room speaks with one voice.'
  },
  {
    title: 'DETAILING',
    copy: 'The vision becomes tangible — every cabinet, threshold, panel and finish is drawn at full size in our own ateliers, where manufacturing precision meets atelier craft.'
  },
  {
    title: 'DELIVERY',
    copy: 'We seamlessly orchestrate the installation, sequencing trades and material flow so the finished space arrives intact, on time, and quietly true to the original brief.'
  }
] as const;

/* ===== Awards ===== */
export const awards = [
  { title: 'Designed-in-China Award — Whole-House Customisation', year: '2024' },
  { title: 'Red Dot — Product Design', year: '2023' },
  { title: 'iF Design Award — Interior Architecture', year: '2023' },
  { title: 'Designed-in-China Award — Smart Cabinetry System', year: '2022' },
  { title: 'Asia Design Prize — Furniture & Lighting', year: '2022' }
];

/* ===== Footer / studio ===== */
export const studio = {
  city: 'Dubai',
  country: 'United Arab Emirates',
  street: 'Sheikh Zayed Road · Trade Centre District',
  email: 'studio@suofeiya.com',
  phone: '+971 4 000 0000',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' }
  ]
} as const;

export const nav = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  {
    label: 'Studio',
    href: '/studio',
    children: [
      { label: 'Our Studio', href: '/studio' },
      { label: 'Careers', href: '/careers' },
      { label: 'FAQ', href: '/faq' }
    ]
  },
  { label: 'Insights', href: '/insights' }
] as const;

export const faqs = [
  {
    q: 'Where is Suofeiya based?',
    a: 'Suofeiya operates from a studio in Dubai with manufacturing and atelier facilities in Guangzhou, allowing us to fuse local design intent with global manufacturing scale.'
  },
  {
    q: 'Do you take on individual rooms or whole-house projects?',
    a: 'Both. Most of our work is whole-house — from architecture through to bespoke cabinetry — but we also accept single-room commissions where the brief is well defined.'
  },
  {
    q: 'What is the typical project timeline?',
    a: 'A whole-house project typically spans 9 to 14 months from first meeting to handover. Single-room and procurement-only briefs run 12 to 20 weeks.'
  },
  {
    q: 'Do you work outside of the UAE?',
    a: 'Yes. We deliver projects across the GCC, South-East Asia and Europe, with installation teams travelling from our ateliers.'
  },
  {
    q: 'Can you collaborate with my existing architect?',
    a: 'Of course. We frequently come in for interior design, procurement, or bespoke joinery only — and we are equally comfortable owning the whole-house brief end to end.'
  }
];

export const objectsRail = [
  IMG.closet,
  IMG.bathroomVanity,
  IMG.objectsHero,
  IMG.kitchenCabinets,
  IMG.looseFurniture
];
