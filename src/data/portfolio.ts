import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Rel.AI MCP',
    description:
      'A local MCP bridge that lets ChatGPT work with configured local workspaces through controlled file access, repository snapshots, verification commands, and git diff review.',
    tech: ['Node.js', 'JavaScript', 'MCP', 'Git', 'Developer Tools'],
    github: 'https://github.com/Kyne0328/rel-ai-mcp',
    featured: true,
  },
  {
    id: '2',
    title: 'Rel.AI',
    description:
      'A local coding-assistance workflow that creates ChatGPT coding requests from selected workspace context and applies returned patches through a controlled local bridge.',
    tech: ['JavaScript', 'Node.js', 'Browser Extension', 'Developer Tools'],
    github: 'https://github.com/Kyne0328/Rel.AI',
    featured: true,
  },
  {
    id: '3',
    title: 'URL-Analysis',
    description:
      'A machine learning-based web application for exploring URL patterns using hierarchical clustering, unsupervised learning concepts, and URL inspection techniques.',
    tech: ['Python', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Kyne0328/URL-Analysis',
    featured: true,
  },
  {
    id: '4',
    title: 'JJ-Clover SMS Booking and Dispatch System',
    description:
      'An Android-first Flutter app for SMS-based water delivery booking and dispatch, including customer SMS commands, delivery zone validation, encrypted operational data, orders, schedules, and delivery logs.',
    tech: ['Flutter', 'Dart', 'Android', 'SMS Workflows'],
    github: 'https://github.com/jayvienmocallay/JJ-Clover-SMS-Booking---Dispatch-System',
    featured: false,
  },
  {
    id: '5',
    title: 'FarmDashR',
    description:
      'A Flutter-based farm-to-table marketplace that connects local farmers with customers and supports product management, browsing, orders, and marketplace workflows.',
    tech: ['Flutter', 'Dart', 'Mobile App'],
    github: 'https://github.com/Kyne0328/FarmDashr',
    featured: false,
  },
];

export const skills = {
  languages: [
    'Java',
    'Python',
    'C',
    'JavaScript',
    'PHP',
    'SQL',
    'Dart',
    'Kotlin',
  ],
  backend: ['Node.js', 'Python', 'PHP', 'MySQL', 'APIs', 'Server-side development'],
  web: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  mobile: ['Flutter', 'Dart', 'Kotlin', 'Android development'],
  security: ['Wireshark', 'URL analysis', 'Basic network analysis', 'Cybersecurity fundamentals'],
  aiTools: ['AI-assisted coding workflows', 'MCP servers', 'Local development automation'],
  platforms: ['Windows', 'Linux', 'WSL2', 'Ubuntu'],
  devops: ['Git', 'GitHub', 'GitHub Actions', 'VS Code', 'Figma'],
};

export const socials = {
  email: 'kyneant@gmail.com',
  github: 'https://github.com/Kyne0328',
  linkedin: 'https://linkedin.com/in/kyne-anthony-pizon',
};

export const siteConfig = {
  name: 'Kyne Anthony Pizon',
  tagline: 'BS Computer Science Student | Software Developer | Backend & Cybersecurity Enthusiast',
  description:
    'Third-year BS Computer Science student focused on backend development, cybersecurity fundamentals, and AI-assisted developer tools. Building practical web, mobile, and automation projects that solve real problems.',
  university: 'University of Mindanao - Tagum Campus',
};
