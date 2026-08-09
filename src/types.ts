
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Stethoscope' | 'TrendingUp' | 'Users' | 'FileText' | 'ShieldCheck' | 'GraduationCap' | 'Home' | 'Hammer' | 'Key';
}

export interface SubService {
  title: string;
  description: string;
}

export interface TransformationStage {
  id: string;
  title: string;
  subtitle: string;
  step: string;
  iconName: string;
  summary: string;
  points: string[];
}

export interface Division {
  id: string;
  title: string;
  step: string;
  iconName: string;
  summary: string;
  services: SubService[];
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  objectives: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  clinic: string;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credibility?: string;
  bio: string;
  image: string;
  videoUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface HeroContent {
  title: string;
  highlight: string;
  description: string;
  backgroundImage: string;
  buttonPrimary: string;
  buttonSecondary: string;
}

export enum PageView {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
  OPPORTUNITIES = 'opportunities',
  BUYERS = 'buyers',
  HOW_IT_WORKS = 'how-it-works'
}

export interface OpportunityProfile {
  id: string;
  region: string;
  province: string;
  // 'public' shows the blind profile openly; 'gated' shows only a confidential teaser.
  // Visibility is chosen case-by-case by each seller.
  visibility: 'public' | 'gated';
  status: 'available' | 'under-discussion' | 'closed';
  revenueBand: string;
  rooms: number;
  staff: number;
  premises: string;
  successionPreference: string;
  highlight: string;
}
