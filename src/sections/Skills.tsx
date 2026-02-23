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
  Github
} from 'lucide-react';

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Java: Hexagon,
  Python: Code2,
  SQL: Database,
  MySQL: Database,
  HTML: FileCode,
  CSS: FileCode,
  PHP: Code2,
  Dart: Hexagon,
  Wireshark: Shield,
  Windows: Monitor,
  WSL2: Monitor,
  Ubuntu: HardDrive,
  Git: GitBranch,
  'GitHub Actions': Github,
};

const skillIconColors: Record<string, string> = {
  Java: '#b07219',
  Python: '#3572A5',
  SQL: '#e38c00',
  MySQL: '#4479A1',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95',
  Dart: '#00B4AB',
  Wireshark: '#166544',
  Windows: '#00a4ef',
  WSL2: '#0269b3',
  Ubuntu: '#E95420',
  Git: '#F05032',
  'GitHub Actions': '#2088FF',
};

const categoryColors: Record<string, { bgClass: string; iconColor: string }> = {
  'Languages': { bgClass: 'bg-tag-blue/10', iconColor: '#3b82f6' },
  'Security & Networking': { bgClass: 'bg-tag-orange/10', iconColor: '#f59e0b' },
  'Platforms': { bgClass: 'bg-tag-purple/10', iconColor: '#8b5cf6' },
  'DevOps & Tools': { bgClass: 'bg-tag-green/10', iconColor: '#10b981' },
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
    title: 'Security & Networking', 
    skills: skills.security,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  { 
    title: 'Platforms', 
    skills: skills.platforms,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  { 
    title: 'DevOps & Tools', 
    skills: skills.devops,
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
                    key={skill}
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
