export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'language' | 'security' | 'platform';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface GithubContributions {
  total: number;
  weeks: {
    contributionDays: {
      contributionCount: number;
      date: string;
    }[];
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}
