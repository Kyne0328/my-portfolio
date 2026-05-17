'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { skills } from '@/data/portfolio';
import {
  SiC, SiPython, SiJavascript, SiPhp, SiDart, SiKotlin,
  SiNodedotjs, SiMysql, SiPostgresql, SiSupabase, SiFirebase, SiFlutter,
  SiAndroid, SiWireshark, SiLinux, SiUbuntu,
  SiGit, SiGithub, SiGithubactions, SiVercel, SiRender, SiFigma,
} from 'react-icons/si';
import { Database, Shield, Bot, Code2, Monitor, FileCode } from 'lucide-react';

type IconEl = React.ReactElement;

interface SkillMeta { icon: IconEl; color: string }

const SI = (C: React.ComponentType<{ size?: number }>, color: string): SkillMeta => ({
  icon: <C size={14} />,
  color,
});
const LU = (C: React.ComponentType<{ size?: number; className?: string }>, color: string): SkillMeta => ({
  icon: <C size={14} />,
  color,
});

const skillMeta: Record<string, SkillMeta> = {
  Java:                             LU(Code2, '#b07219'),
  Python:                           SI(SiPython, '#3572A5'),
  JavaScript:                       SI(SiJavascript, '#f1e05a'),
  PHP:                              SI(SiPhp, '#4F5D95'),
  Dart:                             SI(SiDart, '#00B4AB'),
  Kotlin:                           SI(SiKotlin, '#7F52FF'),
  C:                                SI(SiC, '#555555'),
  SQL:                              LU(Database, '#e38c00'),
  'Node.js':                        SI(SiNodedotjs, '#339933'),
  MySQL:                            SI(SiMysql, '#4479A1'),
  PostgreSQL:                       SI(SiPostgresql, '#336791'),
  Supabase:                         SI(SiSupabase, '#3ECF8E'),
  Firebase:                         SI(SiFirebase, '#FFCA28'),
  Flutter:                          SI(SiFlutter, '#02569B'),
  'Android development':            SI(SiAndroid, '#3DDC84'),
  Wireshark:                        SI(SiWireshark, '#1a7f4b'),
  'Cybersecurity fundamentals':     LU(Shield, '#1a7f4b'),
  'LLM-integrated developer tools': LU(Bot, '#7c3aed'),
  Windows:                          LU(Monitor, '#00a4ef'),
  Linux:                            SI(SiLinux, '#e95420'),
  Ubuntu:                           SI(SiUbuntu, '#E95420'),
  Git:                              SI(SiGit, '#F05032'),
  GitHub:                           SI(SiGithub, 'currentColor'),
  'GitHub Actions':                 SI(SiGithubactions, '#2088FF'),
  Vercel:                           SI(SiVercel, 'currentColor'),
  Render:                           SI(SiRender, '#46E3B7'),
  'VS Code':                        LU(FileCode, '#007ACC'),
  Figma:                            SI(SiFigma, '#F24E1E'),
};

const categoryColors: Record<string, { bgClass: string; iconColor: string }> = {
  Languages:           { bgClass: 'bg-tag-blue/10',   iconColor: '#3b82f6' },
  'Backend & Database':{ bgClass: 'bg-tag-green/10',  iconColor: '#10b981' },
  'Security & AI':     { bgClass: 'bg-tag-orange/10', iconColor: '#f59e0b' },
  'Platforms & Tools': { bgClass: 'bg-tag-purple/10', iconColor: '#8b5cf6' },
};

const skillCategories = [
  {
    title: 'Languages',
    skills: skills.languages,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Backend & Database',
    skills: skills.backend,
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
        <circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
];

function SkillBadge({ name }: { name: string }) {
  const meta = skillMeta[name];
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary/50 border border-border text-sm hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default">
      {meta && (
        <span className="shrink-0 flex items-center" style={{ color: meta.color }}>
          {meta.icon}
        </span>
      )}
      <span>{name}</span>
    </div>
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
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.title}-${skill}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: skillIndex * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <SkillBadge name={skill} />
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
