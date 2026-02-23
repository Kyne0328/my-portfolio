import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'FarmDashR',
    description:
      'A Flutter-based platform connecting farmers directly to customers, eliminating middlemen and increasing farmer income.',
    tech: ['Flutter'],
    github: 'https://github.com/Kyne0328/FarmDashr',
    featured: true,
  },
  {
    id: '2',
    title: 'URL-Analysis',
    description:
      'A URL inspection tool that analyzes link parameters and detects phishing behavior using hierarchical clustering and AI-based techniques.',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kyne0328/URL-Analysis',
    featured: true,
  },
];

export const skills = {
  languages: [
    'Java',
    'Python',
    'SQL',
    'MySQL',
    'HTML',
    'CSS',
    'PHP',
    'Dart',
  ],
  security: ['Wireshark'],
  platforms: ['Windows', 'WSL2', 'Ubuntu'],
  devops: ['Git', 'GitHub Actions'],
};

export const socials = {
  email: 'Kynskie13@gmail.com',
  github: 'https://github.com/Kyne0328',
  linkedin: 'https://www.linkedin.com/in/ky-ne-undefined-505b5336a/',
};

export const siteConfig = {
  name: 'Kyne',
  tagline: 'Cybersecurity Student & Security-Conscious Software Developer',
  description:
    '3rd year Cybersecurity student at University of Mindanao - Tagum Campus. Building real-world solutions focused on secure and scalable systems.',
  university: 'University of Mindanao - Tagum Campus',
};
