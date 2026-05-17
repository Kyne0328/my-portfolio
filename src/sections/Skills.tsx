'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { skills } from '@/data/portfolio';
import {
  Code2,
  Shield,
  Monitor,
  FileCode,
  Database,
  Hexagon,
  GitBranch,
  HardDrive,
  Github,
  Server,
  Bot,
  Smartphone,
  Wrench,
} from 'lucide-react';

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Java: Hexagon,
  Python: Code2,
  C: Code2,
  JavaScript: Code2,
  SQL: Database,
  MySQL: Database,
  HTML: FileCode,
  CSS: FileCode,
  PHP: Code2,
  Dart: Hexagon,
  Kotlin: Hexagon,
  'Node.js': Server,
  APIs: Server,
  'Server-side development': Server,
  Flutter: Smartphone,
  'Android development': Smartphone,
  Wireshark: Shield,
  'URL analysis': Shield,
  'Basic network analysis': Shield,
  'Cybersecurity fundamentals': Shield,
  'AI-assisted coding workflows': Bot,
  'MCP servers': Bot,
  'Local development automation': Bot,
  Windows: Monitor,
  Linux: HardDrive,
  WSL2: Monitor,
  Ubuntu: HardDrive,
  Git: GitBranch,
  GitHub: Github,
  'GitHub Actions': Github,
  'VS Code': FileCode,
  Figma: Wrench,
};

const skillIconColors: Record<string, string> = {
  Java: '#b07219',
  Python: '#3572A5',
  C: '#555555',
  JavaScript: '#f1e05a',
  SQL: '#e38c00',
  MySQL: '#4479A1',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95',
  Dart: '#00B4AB',
  Kotlin: '#7F52FF',
  'Node.js': '#339933',
  APIs: '#047857',
  'Server-side development': '#047857',
  Flutter: '#02569B',
  'Android development': '#3DDC84',
  Wireshark: '#166544',
  'URL analysis': '#166544',
  'Basic network analysis': '#166544',
  'Cybersecurity fundamentals': '#166544',
  'AI-assisted coding workflows': '#047857',
  'MCP servers': '#047857',
  'Local development automation': '#047857',
  Windows: '#00a4ef',
  Linux: '#333333',
  WSL2: '#0269b3',
  Ubuntu: '#E95420',
  Git: '#F05032',
  GitHub: '#24292e',
  'GitHub Actions': '#2088FF',
  'VS Code': '#007ACC',
  Figma: '#F24E1E',
};

const categoryColors: Record<string, { bgClass: string; iconColor: string }> = {
  Languages: { bgClass: 'bg-tag-blue/10', iconColor: '#3b82f6' },
  'Backend & Database': { bgClass: 'bg-tag-green/10', iconColor: '#10b981' },
  'Security & AI': { bgClass: 'bg-tag-orange/10', iconColor: '#f59e0b' },
  'Platforms & Tools': { bgClass: 'bg-tag-purple/10', iconColor: '#8b5cf6' },
};

const skillCategories = [
  {
    title: 'Languages',
    skills: skills.languages,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Backend & Database',
    skills: [...skills.backend, 'HTML', 'CSS'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    title: 'Security & AI',
    skills: [...skills.security, ...skills.aiTools],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Platforms & Tools',
    skills: [...skills.platforms, ...skills.devops],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
];

function SkillIcon({ name }: { name: string }) {
  const IconComponent = skillIcons[name];
  const color = skillIconColors[name] || 'currentColor';
  if (!IconComponent) return null;
  return (
    <span style={{ color }}>
      <IconComponent className="w-4 h-4" />
    </span>
  );
}

function CategoryBadge({ title }: { title: string }) {
  const colors = categoryColors[title];
  return (
    <div className={`p-2 rounded-lg ${colors.bgClass}`} style={{ color: colors.iconColor }}>
      {skillCategories.find((c) => c.title === title)?.icon}
    </div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading title="Skills" subtitle="Technologies I work with" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <CategoryBadge title={category.title} />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.title}-${skill}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      delay: skillIndex * 0.03,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border text-sm hover:border-primary/50 hover:bg-primary/5 transition-colors">
                      <SkillIcon name={skill} />
                      <span>{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
