
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
  bio: string;
  image: string;
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
  CONTACT = 'contact'
}
