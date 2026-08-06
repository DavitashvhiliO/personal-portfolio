export type Language = 'en' | 'ka';

export interface WorkExperience {
  id: string;
  title: string;
  date: string;
  company: string;
  companyLinkText?: string;
  companyLink?: string;
  jobIn?: string;
  jobInLinkText?: string;
  jobInLink?: string;
  type: string;
  desc: string[];
  descSub?: string[];
  caseStudyText?: string;
  caseStudyImages?: string[];
  thumbnails?: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  date: string;
  company: string;
  companyLink?: string;
  desc: string[];
  caseStudyText?: string;
  caseStudyImages?: string[];
  thumbnails?: string[];
  status?: string;
  domain?: string;
  isDisabled?: boolean;
  image?: string;
}

export interface Skill {
  category: string;
  text: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
}

export interface Tool {
  category: string;
  text: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    position: string;
    bio: string;
  };
  sectionTitles: {
    workExperience: string;
    featuredProjects: string;
    skills: string;
    education: string;
    tools: string;
    languages: string;
  };
  workExperience: WorkExperience[];
  featuredProjects: FeaturedProject[];
  skills: Skill[];
  education: {
    title: string;
    items: EducationItem[];
  };
  tools: Tool[];
  languages: LanguageItem[];
  footer: {
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    addressText: string;
    dribbbleLabel: string;
    behanceLabel: string;
  };
}
