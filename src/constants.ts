
import { ServiceItem, Testimonial, Division, TeamMember, Pillar, HeroContent, OpportunityProfile, TransitionStage } from './types';

export const HERO_CONTENT: HeroContent = {
  title: "A Coordinated Team for Your",
  highlight: "Practice Transition",
  description: "We help Canadian podiatrists navigate the 3-to-5 year window around a practice sale — confidentially matching sellers with qualified buyers and guiding both sides through a seamless transition.",
  backgroundImage: "/images/hero-bg.jpg", // Local clinic hallway photo
  buttonPrimary: "I Want to Sell",
  buttonSecondary: "I Want to Acquire"
};

// Flywheel order: every transaction starts with a sale, then the buyer
// brings the clinic online (Build) and optimizes it (Renovate).
export const DIVISIONS: Division[] = [
  {
    id: 'selling',
    title: 'SELL',
    step: '1',
    iconName: 'Key',
    summary: 'Exit your practice confidentially, on your terms.',
    services: [
      {
        title: 'The Exit-Ready Schedule Framework™',
        description: 'The crucial role of scheduling in readying your practice for transition.'
      },
      {
        title: 'Strategic Planning for Exiting Your Business™',
        description: 'Crafting a strategy that sells your practice by making your business more attractive to potential buyers.'
      },
      {
        title: 'The Practice Valuation Plan™',
        description: 'Recognize the red flags and green lights in preparing your business financials for buyer scrutiny for a solid valuation plan.'
      },
      {
        title: 'The Transition Ready Team System™',
        description: 'Ensuring team stability in the sale of your practice for a smooth handoff.'
      }
    ]
  },
  {
    id: 'building',
    title: 'BUILD',
    step: '2',
    iconName: 'Home',
    summary: 'Bring your newly acquired clinic online — even if foot care is new to you.',
    services: [
      {
        title: 'The Foundational Schedule Builder™',
        description: 'Create your ideal schedule, for profitability and life balance.'
      },
      {
        title: 'The New Clinic Patient Magnet™',
        description: 'Promote your unique clinic, and connect with ideal patients.'
      },
      {
        title: 'The Strong Start Financial Framework™',
        description: 'From comprehensive financial procedures to secure your clinic’s future.'
      },
      {
        title: 'The Staff Building Platform™',
        description: 'Hire, develop, and retain a committed team aligned with your vision.'
      }
    ]
  },
  {
    id: 'renovating',
    title: 'RENOVATE',
    step: '3',
    iconName: 'Hammer',
    summary: 'Profitability coaching for new owners and operating partners.',
    services: [
      {
        title: 'The Schedule Renovation Blueprint™',
        description: 'Fix your flow, free up time, and bring consistency to your week.'
      },
      {
        title: 'The Patient Growth Reset™',
        description: 'Refresh your marketing to attract better-fit patients and re-engage those you’ve lost.'
      },
      {
        title: 'The Financial Systems Overhaul™',
        description: 'Streamline your financial systems to gain clarity and support smarter growth.'
      },
      {
        title: 'The Team Optimization Method™',
        description: 'Align your current staff, improve communication, and reduce friction.'
      }
    ]
  }
];

// ⚠️ PLACEHOLDER DATA — fictitious profiles for layout/dev only.
// Replace with real seller-approved profiles before launch.
// Each seller chooses their own visibility (public teaser vs gated).
export const OPPORTUNITIES: OpportunityProfile[] = [
  {
    id: 'ON-2401',
    region: 'Southwestern Ontario',
    province: 'ON',
    visibility: 'public',
    status: 'available',
    revenueBand: '$450K – $550K',
    rooms: 3,
    staff: 4,
    premises: 'Leased — 6 years remaining, renewal option',
    transitionPreference: 'Owner retiring; available for a 3-month handover',
    highlight: 'Established podiatry practice with 25+ years of patient goodwill and consistent referral base.'
  },
  {
    id: 'ON-2402',
    region: 'Greater Toronto Area',
    province: 'ON',
    visibility: 'gated',
    status: 'available',
    revenueBand: '$900K – $1.1M',
    rooms: 5,
    staff: 8,
    premises: 'Confidential',
    transitionPreference: 'Confidential',
    highlight: 'Multi-provider practice in a high-density market. Details shared with qualified buyers only.'
  },
  {
    id: 'BC-2403',
    region: 'Lower Mainland, BC',
    province: 'BC',
    visibility: 'public',
    status: 'available',
    revenueBand: '$650K – $750K',
    rooms: 4,
    staff: 5,
    premises: 'Owner-occupied building — available for purchase with practice',
    transitionPreference: 'Flexible; owner open to associate role post-sale',
    highlight: 'Podiatry practice with orthotics lab on site and real estate opportunity.'
  },
  {
    id: 'AB-2404',
    region: 'Calgary Region',
    province: 'AB',
    visibility: 'gated',
    status: 'under-discussion',
    revenueBand: 'Confidential',
    rooms: 0,
    staff: 0,
    premises: 'Confidential',
    transitionPreference: 'Confidential',
    highlight: 'Profitable multi-disciplinary foot care practice. Currently in discussion with a qualified party.'
  }
];

export const TRANSITION_STAGES: TransitionStage[] = [
  {
    id: 'preparation',
    title: '3–5 Years Before',
    subtitle: 'Preparation & Valuation Prep',
    step: '1',
    iconName: 'TrendingUp',
    summary: 'Focus on structuring financials and preparing your practice for a clean, high-value transfer.',
    points: [
      'Valuation audit and operational clean-up',
      'Establishing robust financial reporting',
      'The Exit-Ready Schedule Framework™ integration',
      'Transition Ready Team System™ alignment'
    ]
  },
  {
    id: 'handoff',
    title: 'The Sale Window',
    subtitle: 'Confidential Handoff & Matching',
    step: '2',
    iconName: 'Key',
    summary: 'Confidential matchmaking and seamless transaction coordination without alerting staff or patients.',
    points: [
      'Gated buyer matchmaking with vetted capital',
      'Structuring vendor take-backs and payouts',
      'Confidential clinical assessments',
      'Comprehensive information package preparation'
    ]
  },
  {
    id: 'optimization',
    title: '3–5 Years After',
    subtitle: 'Integration & Profitability Coaching',
    step: '3',
    iconName: 'Award',
    summary: 'Ensuring the new owner is fully supported to protect your legacy and scale practice margins.',
    points: [
      'The Foundational Schedule Builder™ training',
      'The New Clinic Patient Magnet™ strategy',
      'The Four Pillars of practice optimization coaching',
      'Staff integration and communication alignment'
    ]
  }
];

export const MARKET_STATS = [
  { label: 'Practices in Ontario', value: '850+' },
  { label: 'Ontario Clinic Capacity', value: '3,000' },
  { label: 'Foot Care Schools in Canada', value: '2' },
  { label: 'Provinces We Serve', value: '10' }
];

export const PILLARS: Pillar[] = [
  {
    id: 'schedule',
    title: 'Build the Schedule',
    description: 'Efficient scheduling is crucial for both patient care and provider well-being.',
    iconName: 'Calendar',
    color: 'emerald',
    objectives: [
      'Balance schedules for business owners & providers',
      'Integrate patient appointments with personal time',
      'Minimize wasted downtime & reduce stress',
      'Hands-on implementation support'
    ]
  },
  {
    id: 'patients',
    title: 'Get the Patients',
    description: 'Attracting and retaining patients is vital for sustainable practice growth.',
    iconName: 'Magnet',
    color: 'blue',
    objectives: [
      'Targeted marketing & community engagement',
      'Effective recall & retention programs',
      'Strategic referral partnerships',
      'Comprehensive digital marketing campaigns'
    ]
  },
  {
    id: 'money',
    title: 'Mind the Money',
    description: 'Financial health is essential for sustaining, growing, and eventually selling a practice.',
    iconName: 'BarChart3',
    color: 'emerald',
    objectives: [
      'Robust financial planning & succession strategies',
      'Optimized billing & accounting systems',
      'Service diversification & fee schedule updates',
      'Valuation guidance for future exits'
    ]
  },
  {
    id: 'staff',
    title: 'Keep the Staff',
    description: 'A dedicated and satisfied team is the backbone of any successful practice.',
    iconName: 'Heart',
    color: 'blue',
    objectives: [
      'Supportive workplace culture & engagement',
      'Professional development opportunities',
      'Structured performance appraisal systems',
      'Effective communication strategies'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'patrick-rainville',
    name: 'Patrick Rainville',
    role: 'Co-founder, Transition Marketing',
    credibility: 'Market positioning & digital outreach',
    bio: 'Directs firm-wide transition marketing, leveraging data-driven campaigns to connect clinics with qualified podiatrists and strategic buyers.',
    image: '/images/patrick.png'
  },
  {
    id: 'tina-rainville',
    name: 'Tina Rainville',
    role: 'Co-founder, Transition Financials',
    credibility: 'Financial operations & valuations',
    bio: 'Leads operations and financial structuring for practice transitions, aligning tax considerations and preparing clean, audit-ready numbers.',
    image: '/images/tina.png'
  },
  {
    id: 'dave-simard',
    name: 'Dave Simard',
    role: 'Co-founder, Operations Optimization',
    credibility: 'Post-sale efficiency',
    bio: 'Guides operational scaling and post-sale clinic performance, coaching new owners to achieve peak profitability.',
    image: '/images/dave.png'
  },
  {
    id: 'jodi-simard',
    name: 'Jodi Simard',
    role: 'Co-founder, Client Process & Systems',
    credibility: 'Systems & client-facing process',
    bio: 'Focuses on integrating client-facing systems and streamlining operational processes to guarantee smooth, friction-free ownership handovers.',
    image: '/images/jody.png'
  },
  {
    id: 'peter-ferguson',
    name: 'Peter Ferguson',
    role: 'Co-founder, Practice Transition Lead',
    credibility: 'Succession & valuation',
    bio: 'Acts as the primary front-facing lead for practice transitions, guiding sellers through valuations, exit strategies, and confidential buyer matching.',
    image: '/images/peter.png?v=3'
  },
  {
    id: 'kathy-ferguson',
    name: 'Kathy Ferguson',
    role: 'Co-founder, Assessment & Patient Acceptance',
    credibility: 'Transition planning & clinical alignment',
    bio: 'Leads clinical practice assessments and patient acceptance protocols, ensuring structured, high-retention transitions for patient care.',
    image: '/images/kathy.png?v=3'
  }
];

// ⚠️ PLACEHOLDER DATA — fictitious testimonials for layout/dev only.
// Replace with real transition stories before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Sarah Jenkins',
    role: 'Retired Podiatrist',
    clinic: 'Southwestern Ontario',
    content: 'After 28 years, I didn’t know where to start. They coordinated my accountant and lawyer, found a serious buyer, and my staff never heard a whisper until the day I chose to tell them.'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Operating Partner',
    clinic: 'Private Investment Group',
    content: 'We acquired two clinics through their transition network. Their team brought our first clinic online under new ownership and their transition coaching took margins up within the first year.'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Podiatrist & Seller',
    clinic: 'Lower Mainland, BC',
    content: 'The valuation prep meant no surprises during due diligence. The sale closed on schedule and I stayed on as an associate — exactly the transition I wanted.'
  }
];

export const NAV_LINKS = [
  { label: 'Home', value: 'home' },
  { label: 'Opportunities', value: 'opportunities' },
  { label: 'For Buyers', value: 'buyers' },
  { label: 'How It Works', value: 'how-it-works' },
  { label: 'About Us', value: 'about' },
  { label: 'Contact', value: 'contact' }
];
