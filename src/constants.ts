
import { ServiceItem, Testimonial, Division, TeamMember, Pillar, HeroContent } from './types';

export const HERO_CONTENT: HeroContent = {
  title: "Enhance Your Practice,",
  highlight: "Enrich Your Life!",
  description: "We provide the blueprint for every stage of your clinic's lifecycle for startup, growth, or exit focused on both profitability and your personal freedom.",
  backgroundImage: "/images/hero-bg.jpg", // Local clinic hallway photo
  buttonPrimary: "Explore Our Frameworks",
  buttonSecondary: "Book a Strategy Call"
};

export const DIVISIONS: Division[] = [
  {
    id: 'building',
    title: 'BUILDING',
    step: '1',
    iconName: 'Home',
    summary: 'Establish a rock-solid foundation for your new practice.',
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
    title: 'RENOVATING',
    step: '2',
    iconName: 'Hammer',
    summary: 'Fix the flow and modernize an existing practice.',
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
  },
  {
    id: 'selling',
    title: 'SELLING',
    step: '3',
    iconName: 'Key',
    summary: 'Prepare your practice for a lucrative exit and smooth transition.',
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
  }
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Sarah Jenkins',
    role: 'Lead Podiatrist',
    clinic: 'Toronto Foot Care Centre',
    content: 'The Foundational Schedule Builder completely changed my work-life balance. I’m seeing more patients in less time.'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Clinic Manager',
    clinic: 'Vancouver Orthotics',
    content: 'We used the Renovating track to overhaul our financial systems. We doubled our revenue in 18 months.'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Chiropodist',
    clinic: 'Montreal Step Right',
    content: 'The Exit-Ready Framework gave me the roadmap I needed to sell my practice for what it was truly worth.'
  }
];

export const NAV_LINKS = [
  { label: 'Home', value: 'home' },
  { label: 'Services', value: 'services' },
  { label: 'About Us', value: 'about' },
  { label: 'Contact', value: 'contact' }
];
