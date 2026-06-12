
import { ServiceItem, Testimonial, Division, TeamMember, Pillar, HeroContent, OpportunityProfile } from './types';

export const HERO_CONTENT: HeroContent = {
  title: "Ready to Sell Your",
  highlight: "Foot Care Practice?",
  description: "We help Canadian chiropodists and podiatrists exit on their terms — confidentially connecting sellers with qualified buyers, and guiding both sides through the transition with the right professional team.",
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
    highlight: 'Established chiropody clinic with 25+ years of patient goodwill and consistent referral base.'
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
    role: 'Co-founder, Build Lead',
    credibility: 'Startup & scale, 30 years experience',
    bio: 'Coordinates firm-wide strategy with 30 years of experience helping clinic owners navigate startup and scaling phases.',
    image: '/images/patrick.png'
  },
  {
    id: 'tina-rainville',
    name: 'Tina Rainville',
    role: 'Co-founder, Build Operations',
    credibility: 'Operations & Finance (CFO of RCPC)',
    bio: 'Leads operations and finance for the Build division, ensuring foundational stability and effective clinic launches.',
    image: '/images/tina.png'
  },
  {
    id: 'dave-simard',
    name: 'Dave Simard',
    role: 'Co-founder, Renovate Lead',
    credibility: 'Operations streamlining',
    bio: 'Expert in streamlining operations and strategic planning, guiding established clinics through critical growth transitions.',
    image: '/images/dave.png'
  },
  {
    id: 'jodi-simard',
    name: 'Jodi Simard',
    role: 'Co-founder, Renovate Operations',
    credibility: 'Four Pillars alignment',
    bio: 'Focuses on aligning practices with the Four Pillars framework, optimizing patient growth and team culture.',
    image: '/images/jody.png'
  },
  {
    id: 'peter-ferguson',
    name: 'Peter Ferguson',
    role: 'Co-founder, Sell Lead',
    credibility: 'Succession & valuation',
    bio: 'Leads the Sell division, helping podiatrists navigate successful career transitions, practice valuations, and exits.',
    image: '/images/peter.png?v=3'
  },
  {
    id: 'kathy-ferguson',
    name: 'Kathy Ferguson',
    role: 'Co-founder, Sell Operations',
    credibility: 'Transition planning',
    bio: 'Specializes in transition planning, ensuring a smooth handoff and maximum value realization for practice owners.',
    image: '/images/kathy.png?v=3'
  }
];

// ⚠️ PLACEHOLDER DATA — fictitious testimonials for layout/dev only.
// Replace with real transition stories before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Sarah Jenkins',
    role: 'Retired Chiropodist',
    clinic: 'Southwestern Ontario',
    content: 'After 28 years, I didn’t know where to start. FHN coordinated my accountant and lawyer, found a serious buyer, and my staff never heard a whisper until the day I chose to tell them.'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Operating Partner',
    clinic: 'Private Investment Group',
    content: 'We acquired two clinics through FHN’s network. Their Build team brought our first clinic online and the Four Pillars coaching took margins up within the first year.'
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
