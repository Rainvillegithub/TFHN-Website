
import { ServiceItem, Testimonial, Division, TeamMember, Pillar, HeroContent } from './types';

export const HERO_CONTENT: HeroContent = {
  title: "Guiding Private Practices to Their",
  highlight: "Ideal Scene",
  description: "Whether you are starting from scratch, fixing your flow, or preparing for a lucrative exit, we provide the blueprint for every stage of your clinic's lifecycle.",
  backgroundImage: "https://picsum.photos/seed/modernclinicarch/1920/1080", // Change this URL to your specific hero image
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
    id: 'tm1',
    name: 'Practice Development Lead',
    role: 'Building Division Expert',
    bio: 'Specializing in helping new clinics establish strong foundations and efficient workflows from day one.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'tm2',
    name: 'Clinical Operations Director',
    role: 'Renovating Division Expert',
    bio: 'Expert in streamlining clinical procedures and enhancing patient retention strategies for established practices.',
    image: 'https://images.unsplash.com/photo-1573496359-7013ac2bebb5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'tm3',
    name: 'HR & Staffing Specialist',
    role: 'Team Optimization Lead',
    bio: 'Dedicated to helping clinics hire, train, and retain top-tier talent aligned with the business vision.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'tm4',
    name: 'Strategic Business Advisor',
    role: 'Selling & Exit Planning',
    bio: 'Focuses on practice valuation and creating strategic roadmaps for profitable business exits.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'tm5',
    name: 'Financial Systems Expert',
    role: 'Profitability Consultant',
    bio: 'Transforms financial chaos into clarity, ensuring practices maximize revenue and minimize waste.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'tm6',
    name: 'Marketing & Growth Lead',
    role: 'Patient Acquisition',
    bio: 'Specializes in ethical marketing strategies that attract ideal patients to your clinic.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&q=80&w=400'
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
