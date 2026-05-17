'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { skills } from '@/data/portfolio';
import {
  Bot,
  Code2,
  Database,
  FileCode,
  GitBranch,
  HardDrive,
  Monitor,
  Server,
  Shield,
  Smartphone,
  Wrench,
} from 'lucide-react';

const skillIconColors: Record<string, string> = {
  Java: '#b07219',
  Python: '#3572A5',
  C: '#555555',
  JavaScript: '#b68a35',
  PHP: '#4F5D95',
  SQL: '#8a6a2b',
  Dart: '#315c4c',
  Kotlin: '#7F52FF',
  'Node.js': '#315c4c',
  MySQL: '#8a6a2b',
  APIs: '#315c4c',
  HTML: '#b68a35',
  CSS: '#315c4c',
  Flutter: '#315c4c',
  Wireshark: '#315c4c',
  Windows: '#5f6f64',
  Linux: '#202421',
  WSL2: '#5f6f64',
  Ubuntu: '#b68a35',
  Git: '#b68a35',
  GitHub: '#202421',
  'GitHub Actions': '#315c4c',
  'VS Code': '#5f6f64',
  Figma: '#b68a35',
};

const categoryColors: Record<string, { bgClass: string; iconColor: string }> = {
  Languages: { bgClass: 'bg-primary/10', iconColor: '#315c4c' },
  'Backend & Database': { bgClass: 'bg-accent/10', iconColor: '#b68a35' },
  'Web & Mobile': { bgClass: 'bg-tag-green/10', iconColor: '#315c4c' },
  'Security & AI Tools': { bgClass: 'bg-tag-orange/10', iconColor: '#b68a35' },
  'Platforms & Tools': { bgClass: 'bg-muted', iconColor: '#5f6f64' },
};

const skillCategories = [
  {
    title: 'Languages',
    skills: skills.languages,
    icon: Code2,
  },
  {
    title: 'Backend & Database',
    skills: skills.backend,
    icon: Server,
  },
  {
    title: 'Web & Mobile',
    skills: [...skills.web, ...skills.mobile],
    icon: Smartphone,
  },
  {
    title: 'Security & AI Tools',
    skills: [...skills.security, ...skills.aiTools],
    icon: Shield,
  },
  {
    title: 'Platforms & Tools',
    skills: [...skills.platforms, ...skills.devops],
    icon: Wrench,
  },
];

function SkillIcon({ name }: { name: string }) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Java: Code2,
    Python: Code2,
    C: Code2,
    JavaScript: Code2,
    PHP: Code2,
    SQL: Database,
    Dart: Code2,
    Kotlin: Code2,
    'Node.js': Server,
    MySQL: Database,
    APIs: Server,
    'Server-side development': Server,
    HTML: FileCode,
    CSS: FileCode,
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
    WSL2: HardDrive,
    Ubuntu: HardDrive,
    Git: GitBranch,
    GitHub: GitBranch,
    'GitHub Actions': GitBranch,
    'VS Code': FileCode,
    Figma: Wrench,
  };

  const IconComponent = iconMap[name];
  const color = skillIconColors[name] || 'currentColor';

  if (!IconComponent) return null;

  return (
    <span style={{ color }}>
      <IconComponent className="w-4 h-4" />
    </span>
  );
}

function CategoryBadge({ title, Icon }: { title: string; Icon: React.ComponentType<{ className?: string }> }) {
  const colors = categoryColors[title];

  return (
    <div className={`p-2 rounded-lg ${colors.bgClass}`} style={{ color: colors.iconColor }}>
      <Icon className="w-5 h-5" />
    </div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading title="Skills" subtitle="Technologies and workflows I work with" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
          >
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <CategoryBadge title={category.title} Icon={category.icon} />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.title}-${skill}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: skillIndex * 0.03 }}
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
