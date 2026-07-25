export const siteConfig = {
  name: 'Md Arif Hossain',
  title: 'Software Engineer II — Flutter & Android Developer',
  tagline:
    'I build high-performance, scalable mobile apps used by hundreds of thousands across Bangladesh — from vehicle tracking systems to AI-powered fitness apps.',
  email: 'arif.dev24@gmail.com',
  phone: '+880 1701585073',
  phoneHref: '+8801701585073',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/md-arif-hossainn',
  linkedin: 'https://www.linkedin.com/in/md-arif-hossainn/',
  cvPath: '/Md_Arif_Hossain_CV.pdf',
  url: 'https://mdarifhossain.vercel.app',
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

export const aboutParagraphs = [
  "I'm a Software Engineer with 4+ years of experience building mobile products with Flutter, Kotlin and Android. Today I'm a Software Engineer II at Nagorik Technologies, where I lead mobile work end to end — from first architecture sketch to a shipped release.",
  "I've shipped 10+ production apps — one past 500K downloads and two more past 100K. My focus is the unglamorous work that keeps apps alive at that scale: clean architecture, secure payment gateway integrations, and modernizing legacy codebases so they stop crashing and start scaling.",
  'I hold a BSc in Computer Science & Engineering from Daffodil International University (CGPA 3.54/4), where I maintained a 50% academic excellence waiver every semester.',
];

export const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '10+', label: 'Apps shipped' },
  { value: '700K+', label: 'Combined downloads' },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Dart', 'Kotlin', 'Java', 'C', 'C++'],
  },
  {
    title: 'Mobile',
    skills: [
      'Flutter',
      'Android SDK',
      'Cross-Platform Development',
      'Custom Widgets',
      'Material Design',
      'Responsive & Adaptive UI',
      'Animations',
      'Platform Channels',
      'Isolates & Concurrency',
    ],
  },
  {
    title: 'Architecture & Patterns',
    skills: ['Clean Architecture', 'MVVM', 'SOLID Principles', 'OOP'],
  },
  {
    title: 'State Management',
    skills: ['Riverpod', 'Bloc', 'Cubit', 'GetX', 'StateNotifier', 'LiveData'],
  },
  {
    title: 'Tools & Practices',
    skills: [
      'Git',
      'CI/CD',
      'Android Studio',
      'Flutter DevTools',
      'Performance Profiling',
      'Agile',
      'Testing',
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      'REST API Integration',
      'Retrofit',
      'Firebase',
      'SQLite',
      'ROOM',
      'Coroutines',
    ],
  },
  {
    title: 'Other',
    skills: [
      'Payment Gateway Integration (bKash, international)',
      'In-App Purchase',
      'Push Notifications',
      'Deep Linking',
      'WorkManager',
      'Security',
    ],
  },
];

export const experience = [
  {
    company: 'Nagorik Technologies Ltd',
    location: 'Mirpur DOHS, Dhaka',
    role: 'Software Engineer II',
    period: 'Feb 2025 – Present',
    current: true,
    points: [
      'Led end-to-end development of 10+ mobile apps from concept to deployment, focused on performance, scalability and maintainability.',
      'Modernized legacy systems by migrating them to the latest tech stacks — improving stability and reducing crash rates.',
      'Engineered secure local and international payment gateway integrations.',
      'Championed code quality through structured reviews and modular architecture.',
    ],
  },
  {
    company: 'Nexdecade Technology Pvt Ltd',
    location: 'Dhaka, Bangladesh',
    role: 'Android Developer',
    period: 'Aug 2023 – Jan 2025',
    current: false,
    points: [
      'Built and launched a VTS (Vehicle Tracking System) app from scratch, outperforming the previous version.',
      'Collaborated closely with product and design teams, contributing to a 15% increase in user satisfaction scores.',
      'Built advanced customer segmentation with graphical data representations.',
      'Integrated multiple third-party services, driving a 30% increase in customer engagement over four months.',
    ],
  },
  {
    company: 'Dynamic Megasoft Limited',
    location: 'Dhaka, Bangladesh',
    role: 'Software Developer',
    period: 'Sep 2022 – Jul 2023',
    current: false,
    points: [
      'Built a fast data retrieval system using Retrofit, LiveData and Coroutines within a multi-module architecture.',
      'Designed and implemented an in-house NGO management system.',
      'Optimized app performance across a wide range of device sizes and orientations.',
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  badge?: string;
  image: string;
  accentFrom: string;
  accentTo: string;
  /** Renders the wide horizontal card. Also carries the "Featured" eyebrow. */
  featured?: boolean;
  /** Wide at lg only. Placed so the bento grid closes with no empty cells. */
  wide?: boolean;
  /** Public store listings. Rendered as separate buttons, so a card can have both. */
  links?: { label: 'Google Play' | 'App Store'; href: string }[];
};

export const projects: Project[] = [
  {
    name: 'GP VTS',
    subtitle: 'Vehicle Tracking System',
    description:
      'The leading vehicle tracking app in Bangladesh, rated 4.1★ by 1,500+ reviewers. Nationwide 24-hour real-time tracking, emergency engine blocking, geo-fence and over-speed alerts, plus trip, mileage and fuel-consumption reporting across a whole fleet.',
    tech: ['Flutter', 'Riverpod', 'SOLID', 'REST API'],
    badge: '500K+ Downloads',
    image: '/projects/gp-vts.svg',
    accentFrom: '#2563EB',
    accentTo: '#60A5FA',
    featured: true,
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.grameenphone.vts',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/grameenphone-vehicle-tracking/id971702615',
      },
    ],
  },
  {
    name: 'Jeeto',
    subtitle: 'Competitive Quiz Platform',
    description:
      'A competitive quiz platform with 30+ categories and 250+ topics, plus daily live quizzes and prize tournaments that kept 100K+ players coming back.',
    tech: ['Flutter', 'Clean Architecture', 'Firebase'],
    badge: '100K+ Downloads',
    image: '/projects/jeeto.svg',
    accentFrom: '#7C3AED',
    accentTo: '#A78BFA',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/jeeto/id1642685295',
      },
    ],
  },
  {
    name: 'Deen',
    subtitle: 'Islamic Companion App',
    description:
      'A complete Islamic companion rated 4.5★ on Google Play: prayer times with adhan alerts, the full Quran with audio recitation and translations, Hadith and Dua collections, Qibla compass, Tasbih counter and Zakat calculator — localized across English, Arabic and Bangla.',
    tech: [
      'Flutter',
      'Clean Architecture',
      'Localization',
      'In-App Purchase',
      'Push Notifications',
    ],
    badge: '100K+ Downloads',
    image: '/projects/deen.svg',
    accentFrom: '#0F766E',
    accentTo: '#5EEAD4',
    wide: true,
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=tech.nagorik.deen',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/ie/app/deen-pro-quran-prayer-athan/id6450675915',
      },
    ],
  },
  {
    name: 'DailyCal AI',
    subtitle: 'Track Your Bites',
    description:
      'An AI-powered nutrition tracker: photograph a meal and get instant calories and macros. Adds diet planning, water and exercise logging, weight history with Apple Health sync, and subscription billing.',
    tech: ['Flutter', 'GetX', 'Clean Architecture', 'AI', 'In-App Purchase'],
    badge: 'AI-Powered',
    image: '/projects/dailycal-ai.svg',
    accentFrom: '#059669',
    accentTo: '#34D399',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.dailycalai.app',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/ie/app/daily-cal-track-your-bites/id6745953709',
      },
    ],
  },
  {
    name: 'Deal Finder',
    subtitle: 'Consumer Deals Platform',
    description:
      'A deals aggregator spanning travel, hotels, dining, fashion, home goods and electronics — with bKash and Robi service integrations built in.',
    tech: ['Flutter', 'Clean Architecture', 'bKash'],
    badge: '10K+ Downloads',
    image: '/projects/deal-finder.svg',
    accentFrom: '#EA580C',
    accentTo: '#FB923C',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=bd.com.dealfinder.deals',
      },
    ],
  },
  {
    name: 'M2M Vehicle Tracker',
    subtitle: 'Fleet Management',
    description:
      'Real-time GPS fleet tracking rated 4.0★: live location, engine blocking, geo-fence and over-speed alerts, document-renewal reminders and 14+ analytical reports for operations teams.',
    tech: ['Flutter', 'Riverpod', 'SOLID', 'Google Maps'],
    badge: '10K+ Downloads',
    image: '/projects/m2m.svg',
    accentFrom: '#0891B2',
    accentTo: '#22D3EE',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.m2mbd.vts',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/m2m-vehicle-tracking-system/id1472843586',
      },
    ],
  },
  {
    name: 'RapidRide',
    subtitle: 'Ride-Hailing Platform',
    description:
      'A full-stack Uber-like system with separate driver and rider apps, real-time ride requests, Google Maps navigation, push notifications and an admin web panel.',
    tech: ['Flutter', 'Google Maps API', 'Firebase'],
    badge: 'Personal Project',
    image: '/projects/rapidride.svg',
    accentFrom: '#DB2777',
    accentTo: '#F472B6',
  },
  {
    name: 'NGO Management System',
    subtitle: 'Operations Suite',
    description:
      'A complete management app for NGOs covering branches, customers, loans, installments and employees — built for field teams with unreliable connectivity.',
    tech: ['Kotlin', 'MVVM', 'Retrofit', 'LiveData'],
    image: '/projects/ngo.svg',
    accentFrom: '#4F46E5',
    accentTo: '#818CF8',
    wide: true,
  },
  {
    name: 'Foody',
    subtitle: 'Recipe App',
    description:
      'A recipe app with full offline support, rich filtering, favorites and dark/light themes — backed by a ROOM cache so it works with no connection at all.',
    tech: ['Kotlin', 'MVVM', 'ROOM', 'Retrofit'],
    badge: 'Personal Project',
    image: '/projects/foody.svg',
    accentFrom: '#CA8A04',
    accentTo: '#FACC15',
  },
];

export const education = [
  {
    title: 'BSc in Computer Science & Engineering',
    org: 'Daffodil International University',
    period: '2018 – 2022',
    detail: 'CGPA 3.54 / 4.00',
  },
];

export const awards = [
  {
    title: 'Academic Excellence Waiver',
    org: 'Daffodil International University',
    detail:
      '50% tuition waiver maintained every semester for outstanding academic performance.',
  },
  {
    title: 'Mobile Application Development Certification',
    org: 'Skills for Employment Investment Program (SEIP), Bangladesh',
    detail:
      'Government-backed professional certification in mobile application development.',
  },
];
