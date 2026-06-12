import { ServiceItem, CoreValue, GalleryItem } from './types';

export const HERO_IMAGE = '/src/assets/images/home.jpeg';
export const KITCHEN_IMAGE = '/src/assets/images/kitchens and interiors.jpeg';
export const BATHROOM_IMAGE = '/src/assets/images/bathroom_renovations.jpeg';
export const FINISHING_IMAGE = '/src/assets/images/finishing_detail_work.jpeg';
export const PLUMBING_IMAGE = '/src/assets/images/plumbing.jpeg';
export const MAINTENANCE_IMAGE = '/src/assets/images/property_maintenance.jpeg';
export const GENERAL_TRADES_IMAGE = '/src/assets/images/general trades and support work.jpeg';
export const CONSULTATION_IMAGE = '/src/assets/images/projectplanning and consultation.jpeg';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'construction',
    title: 'Construction & Project Works',
    tagline: 'End-to-end building and structural execution.',
    category: 'construction',
    image: HERO_IMAGE,
    iconName: 'Wrench',
    bulletPoints: [
      'Residential construction from foundation to final key hand-over',
      'Small to mid-scale commercial builds engineered to commercial codes',
      'Structural alterations, renovations & complex brick and steel extensions',
      'Dedicated project coordination & site supervision by certified tradesmen'
    ]
  },
  {
    id: 'interiors',
    title: 'Kitchens & Bespoke Interiors',
    tagline: 'Custom interior solutions designed for function and longevity.',
    category: 'interiors',
    image: KITCHEN_IMAGE,
    iconName: 'Layout',
    bulletPoints: [
      'Bespoke, custom kitchen design & professional kitchen installation',
      'Built-in luxury cupboards (BIC) & sleek tailored wardrobes',
      'Premium custom cabinetry & space-saving storage solutions',
      'Interior layout refinement & aesthetic material coordination'
    ]
  },
  {
    id: 'bathrooms',
    title: 'Bathroom Design & Renovations',
    tagline: 'Modern, clean, and durable bathroom spaces.',
    category: 'interiors',
    image: BATHROOM_IMAGE,
    iconName: 'Sliders',
    bulletPoints: [
      'Full, high-end bathroom renovations and strip-outs',
      'Plumbing upgrades, sanitary installations & fixture fittings',
      'Premium tiling, wet-room rendering & structural waterproofing',
      'Modern fixture installation (luxury showers, free-standing basins, matte fittings)'
    ]
  },
  {
    id: 'electrical-services',
    title: 'Electrical Services',
    tagline: 'Reliable, compliant electrical solutions.',
    category: 'utility',
    image: FINISHING_IMAGE,
    iconName: 'Zap',
    bulletPoints: [
      'Complete home & office wiring & expert rewiring projects',
      'Aesthetic lighting design, smart wiring & task light installations',
      'Distribution Board (DB) upgrades & circuit breaker diagnostics',
      'Comprehensive fault finding, testing & certified home electrical repairs'
    ]
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    tagline: 'Professional plumbing for new and existing spaces.',
    category: 'utility',
    image: PLUMBING_IMAGE,
    iconName: 'Droplet',
    bulletPoints: [
      'Sewer & service pipe installations & high-traffic plumbing upgrades',
      'Tailored bathroom & custom kitchen plumbing infrastructure',
      'Advanced leak detection, burst pipe repair & pressure resolutions',
      'Solar & standard geyser installation, testing & regular maintenance'
    ]
  },
  {
    id: 'finishing',
    title: 'Finishing & Detail Work',
    tagline: 'Where quality is defined.',
    category: 'construction',
    image: FINISHING_IMAGE,
    iconName: 'Paintbrush',
    bulletPoints: [
      'Precision tiling for high-traffic floors & elegant accent walls',
      'Premium interior & exterior painting with climate-hardened paints',
      'Plaster ceiling installation, gypsum cornices & drywall repairs',
      'Exceptional final finishing, custom timber detailing & polishing work'
    ]
  },
  {
    id: 'property-maintenance',
    title: 'Property Maintenance',
    tagline: 'Ongoing care and upkeep for residential and commercial properties.',
    category: 'utility',
    image: MAINTENANCE_IMAGE,
    iconName: 'ShieldCheck',
    bulletPoints: [
      'Routine facility maintenance & comprehensive structural inspections',
      'Carpentry repairs, locks adjustment, and lock replacements',
      'Preventative weatherproofing (roof painting, gutter clearing, window seals)',
      'All-inclusive ongoing property care services for developers & managers'
    ]
  },
  {
    id: 'general-trades',
    title: 'General Trades & Support Work',
    tagline: 'Flexible support across multiple structural trades.',
    category: 'construction',
    image: GENERAL_TRADES_IMAGE,
    iconName: 'Hammer',
    bulletPoints: [
      'Expert general carpentry, custom moulding & structural framing',
      'Minor construction works, partition walls & concrete adjustments',
      'Pristine site preparation, brick clearing & accurate workspace adjustments',
      'Multi-trade coordination & physical project support services'
    ]
  },
  {
    id: 'consultation',
    title: 'Project Planning & Consultation',
    tagline: 'Professional scoping, material advice & site studies.',
    category: 'planning',
    image: CONSULTATION_IMAGE,
    iconName: 'Compass',
    bulletPoints: [
      'Comprehensive project scoping, task schedules & advisory consulting',
      'Curated choice of high-end raw materials and finish guidance',
      'Professional site assessments, ground studies & leveling reviews',
      'Streamlined coordination planning for multi-month construction timelines'
    ]
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Reliability',
    description: 'We show up as promised. Solid structures require solid commitments.',
    icon: 'Shield'
  },
  {
    title: 'Innovation',
    description: 'Adopting the smartest construction methods, materials, and space layout systems.',
    icon: 'Cpu'
  },
  {
    title: 'Ownership',
    description: 'Single point of accountability. We take full responsibility for quality from start to finish.',
    icon: 'Award'
  },
  {
    title: 'Teamwork',
    description: 'Coordinating multiple trades seamlessly under one standard of elite craftsmanship.',
    icon: 'Users'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    image: '/src/assets/images/kitchens and interiors.jpeg',
    title: 'Bespoke Modern Open-Plan Kitchen',
    category: 'interiors',
    location: 'Borrowdale Brooke, Harare',
    description: 'Tailored luxury cabinets with high-grade hinges, seamless solid quartz kitchen countertops, and integrated sensory undercabinet LED strips.'
  },
  {
    id: 'g2',
    image: '/src/assets/images/home.jpeg',
    title: 'Architectural Residential Development',
    category: 'construction',
    location: 'Glen Lorne, Harare',
    description: 'Turnkey luxury duplex unit featuring architectural brick framing, reinforced slate concrete slabs, and modern custom fittings.'
  },
  {
    id: 'g3',
    image: '/src/assets/images/bathroom_innovations.jpeg',
    title: 'Custom Vanity & Wet-Room Innovations',
    category: 'interiors',
    location: 'Chisipite, Harare',
    description: 'Luxury floating double vanity with gold matte fixtures, frameless glass layout adjustments, and modern concealed drain plumbing.'
  },
  {
    id: 'g4',
    image: '/src/assets/images/bathroom_renovations.jpeg',
    title: 'Premium Porcelain Bathroom Makeover',
    category: 'renovations',
    location: 'Highlands, Harare',
    description: 'High-end tiling, expert waterproofing membrane application, and elegant standalone tub framing.'
  },
  {
    id: 'g5',
    image: '/src/assets/images/bathroom_rennovations.jpeg',
    title: 'Contemporary En-Suite Remodel',
    category: 'renovations',
    location: 'The Grange, Harare',
    description: 'Flawless grout lines, dark floor tiles, luxury wall-hung toilet installation, and high-pressure mixer calibration.'
  },
  {
    id: 'g6',
    image: '/src/assets/images/finishing_detail_work.jpeg',
    title: 'Master Finish Carpentry & Detailing',
    category: 'construction',
    location: 'Vainona, Harare',
    description: 'Craftsman architraves, modern custom skirting boards, shadow-line gypsum cornices, and climate-hardened matte paint finish.'
  },
  {
    id: 'g7',
    image: '/src/assets/images/finishing_&_detail_work.jpeg',
    title: 'Precision Architectural Ceiling Finishing',
    category: 'renovations',
    location: 'Avondale, Harare',
    description: 'Seamless drywall framing, pristine plaster skin coating, and recessed warm downlighter layouts.'
  },
  {
    id: 'g8',
    image: '/src/assets/images/plumbing.jpeg',
    title: 'Copper Mainline Pipe & Valve Calibration',
    category: 'utility',
    location: 'Belgravia, Harare',
    description: 'Industrial-grade leak-proof copper pressure manifold setup, heavy-duty stop-cock installation, and complete drainage testing.'
  },
  {
    id: 'g9',
    image: '/src/assets/images/property_maintenance.jpeg',
    title: 'Commercial Roof Weatherproofing & Restoration',
    category: 'utility',
    location: 'Milton Park, Harare',
    description: 'Routine structure servicing, systematic rust prevention coating, gutter cleaning, and leak-proof gasket seals.'
  },
  {
    id: 'g10',
    image: '/src/assets/images/projectplanning and consultation.jpeg',
    title: 'Architectural Scoping & On-Site Consultation',
    category: 'construction',
    location: 'Harare CBD Bureau',
    description: 'On-site measurement verification, luxury structural material catalog review, and phased trade synchronization schedules.'
  },
  {
    id: 'g11',
    image: '/src/assets/images/general trades and support work.jpeg',
    title: 'Structural Wood Framing & Carpentry Support',
    category: 'construction',
    location: 'Mount Pleasant, Harare',
    description: 'Treated pine timber roofing trusses assembly, accurate level alignment, and bracing for heavy-duty load capacity.'
  },
  {
    id: 'g12',
    image: '/src/assets/images/general trades and support work2.jpeg',
    title: 'Phased Partition Framing & Support Work',
    category: 'renovations',
    location: 'Eastgate, Harare',
    description: 'High-rigidity lightweight metal stud walls alignment for premium commercial office space division.'
  },
  {
    id: 'g13',
    image: '/src/assets/images/general trades and support work3.jpeg',
    title: 'Pristine Site Clearance & Civil Support',
    category: 'utility',
    location: 'Greystone Park, Harare',
    description: 'Ground leveling, brick rubble clearance, and meticulous excavation preparation for perimeter precast boundary wall structures.'
  },
  {
    id: 'g14',
    image: '/src/assets/images/upload_9.jpeg',
    title: 'Industrial Sewer Layout & Plumbing Service',
    category: 'utility',
    location: 'Southerton, Harare',
    description: 'Excavation and alignment of thick-walled high-density underground drainage piping system.'
  }
];
