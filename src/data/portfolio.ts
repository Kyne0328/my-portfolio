import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Rel.AI MCP',
    description:
      'Local MCP bridge that allows ChatGPT to interact with configured local workspaces through a trusted local server. Supports repository snapshots, selected file reads, file writes, text replacements, verification commands, git diff inspection, and controlled local workflow review — keeping file access visible and auditable.',
    tech: ['Node.js', 'JavaScript', 'MCP', 'Git', 'Developer Tools'],
    github: 'https://github.com/Kyne0328/rel-ai-mcp',
    featured: true,
  },
  {
    id: '2',
    title: 'Rel.AI',
    description:
      'Local coding-assistance workflow that generates ChatGPT coding requests from selected workspace context and applies returned patches through a controlled local native bridge. Focused on controlled file access, patch-based updates, and practical developer workflow automation.',
    tech: ['JavaScript', 'Node.js', 'Browser Extension', 'Developer Tools'],
    github: 'https://github.com/Kyne0328/Rel.AI',
    featured: true,
  },
  {
    id: '3',
    title: 'URL-Analysis',
    description:
      'Machine learning web app for exploring URL patterns using hierarchical clustering and unsupervised learning techniques. Contributed frontend implementation, Python-based analysis concepts, and project integration.',
    tech: ['Python', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Kyne0328/URL-Analysis',
    featured: true,
  },
  {
    id: '4',
    title: 'JJ-Clover SMS Booking and Dispatch System',
    description:
      'Android-first Flutter app for SMS-based water delivery booking and dispatch. Supports customer SMS commands, delivery zone validation, encrypted operational data, order tracking, scheduling, customer records, message handling, and delivery logs.',
    tech: ['Flutter', 'Dart', 'Android', 'SMS Workflows'],
    github: 'https://github.com/jayvienmocallay/JJ-Clover-SMS-Booking---Dispatch-System',
    featured: false,
  },
  {
    id: '5',
    title: 'FarmDashr',
    description:
      'Farm-to-table marketplace connecting local farmers with customers for fresh, locally sourced produce. Supports product management, customer browsing, orders, and marketplace workflows.',
    tech: ['Flutter', 'Dart', 'Mobile App'],
    github: 'https://github.com/Kyne0328/FarmDashr',
    featured: false,
  },
];

export const skills = {
  languages: ['Java', 'Python', 'C', 'JavaScript', 'PHP', 'SQL', 'Dart', 'Kotlin'],
  backend: ['Node.js', 'MySQL', 'PostgreSQL', 'Supabase', 'Firebase', 'Flutter', 'Android development'],
  security: ['Wireshark', 'Cybersecurity fundamentals'],
  aiTools: ['AI-assisted coding workflows', 'MCP servers'],
  platforms: ['Windows', 'Linux', 'Ubuntu'],
  devops: ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Render', 'VS Code', 'Figma'],
};

export const socials = {
  email: 'kyneant@gmail.com',
  github: 'https://github.com/Kyne0328',
  linkedin: 'https://linkedin.com/in/kyne-anthony-pizon',
};

export const siteConfig = {
  name: 'Kyne Anthony Pizon',
  tagline: 'Software Engineer Intern · Backend Systems · AI Infrastructure · Security',
  description:
    'Third-year BS Computer Science student seeking a Software Engineer Intern role in backend systems, AI infrastructure, or security software. Experienced with Node.js, Python, Flutter, SQL, local developer tools, and machine learning concepts. Focused on building reliable software, improving development workflows, and growing in backend and secure system design.',
  university: 'University of Mindanao - Tagum Campus',
};

export const education = {
  degree: 'BS Computer Science',
  school: 'University of Mindanao - Tagum Campus',
  year: '3rd Year',
  graduation: 'Expected 2027',
  coursework: [
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
    'Database Systems',
    'Software Engineering',
    'Web Development',
    'Mobile Application Development',
    'Artificial Intelligence Fundamentals',
    'Cybersecurity Fundamentals',
  ],
};

export const experience = {
  title: 'Academic Project Programmer & Documentation Contributor',
  org: 'University of Mindanao - Tagum Campus',
  description:
    'Served as programmer in academic group projects. Assisted with project documentation, README creation, development tasks, debugging, testing, and project completion. Collaborated during planning and implementation while improving technical communication through written documentation and team-based software work.',
};

export const languages = ['English', 'Filipino', 'Cebuano'];
