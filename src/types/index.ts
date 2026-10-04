export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  status: 'Operational' | 'Active Lab' | 'Prototype' | 'Production';
  category: 'Hardware & Recon' | 'SOC & Telemetry' | 'Automation & VAPT';
  highlights: string[];
  architectureBadges: string[];
  telemetryLog?: string[];
  githubUrl?: string;
  demoCommand?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  program: string;
  period: string;
  location: string;
  current: boolean;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Hands-on';
    focus?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  completedYear: string;
  focus: string[];
}
