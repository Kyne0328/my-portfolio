'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { skills } from '@/data/portfolio';

import { ReactNode } from 'react';

const skillIcons: Record<string, ReactNode> = {
  Java: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.762.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.778.968-4.358-.355.103-.507.166-.507.166s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.082-.073M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.433-2.053-3.837-5.322-1.28-6.773 2.496-1.418 3.645-1.565 3.645-1.565M9.734 23.924c4.322.227 10.959-.154 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zm0 2.818c-1.467 0-2.655 1.188-2.655 2.655s1.188 2.655 2.655 2.655 2.655-1.188 2.655-2.655-1.188-2.655-2.655-2.655zm0 2.655a.613.613 0 110-1.227.613.613 0 010 1.227z"/>
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.545 4.255c.636 0 1.164.346 1.164 1.064 0 .545-.255 1.015-.691 1.015-.636 0-1.036-.727-1.036-1.015 0-.718.528-1.064.563-1.064zM8.255 7.127h7.49c.073 0 .136.018.191.055l1.236 1.309c.145.146.218.346.218.528v6.4c0 .4-.31.727-.71.727H6.574c-.4 0-.71-.327-.71-.727V9.019c0-.182.073-.382.218-.528l1.236-1.309c.055-.037.118-.055.191-.055h.746zm7.127 1.673c.073.091.118.2.118.4v.982l-3.418 3.636-.018.018c-.382.4-.673.655-1.236.655-.564 0-.965-.255-1.347-.655l-.018-.018-3.418-3.636V9.2c0-.2.045-.309.118-.4l.382-.473c.073-.109.145-.182.291-.182h3.709c.146 0 .218.073.291.182l.382.473z"/>
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zm-.923 3.232l-.382.764c-.162.315-.461.539-.818.539-.245 0-.491-.1-.682-.291l1.308-2.612c.145-.3.109-.491.036-.618-.146-.2-.4-.309-.691-.309h-.509c-.2 0-.4.073-.582.2l-1.126 2.065c-.127.218-.182.4-.182.582 0 .308.255.564.564.564.3 0 .546-.127.72-.345l.382-.764c.2-.382.564-.636.991-.636.382 0 .709.2.873.564l.254.618c.017.055.055.073.109.073.055 0 .091-.018.128-.055l.055-.109c.036-.073.073-.145.073-.254.036-.382-.073-.764-.382-1.034l-.728-.691c-.255-.245-.618-.382-1.008-.382-.4 0-.746.145-1.01.4l-1.308 2.289c-.255.455-.255.982.036 1.378.255.364.618.573 1.035.573.382 0 .709-.145 1.001-.4l.4-.782c.145-.291.436-.491.8-.491.218 0 .4.055.564.164l.018.018c.073.073.127.127.2.127.036 0 .055 0 .073-.018l.018-.055c.018-.036.018-.073.018-.109-.036-.073-.109-.145-.2-.2l-.764-.691z"/>
    </svg>
  ),
  Dart: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
    </svg>
  ),
  Wireshark: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
    </svg>
  ),
  Windows: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M3 5.5l10-5.5L23 5.5v13L13 24l-10-5.5v-13zm10 2.5l-7 4.5v7l7 4.5 7-4.5v-7l-7-4.5z"/>
    </svg>
  ),
  WSL2: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.5H13v-2h4.5c.828 0 1.5-.672 1.5-1.5v-7c0-.828-.672-1.5-1.5-1.5H13v-2h4.5c2.484 0 4.5 2.016 4.5 4.5v7c0 2.484-2.016 4.5-4.5 4.5zM6.5 6.5H3v7h3.5c.828 0 1.5-.672 1.5-1.5v-4c0-.828-.672-1.5-1.5-1.5zm0 8.5H3v-4h3.5c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5z"/>
    </svg>
  ),
};

const skillIconColors: Record<string, string> = {
  Java: '#b07219',
  Python: '#3572A5',
  SQL: '#e38c00',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95',
  Dart: '#00B4AB',
  Wireshark: '#166544',
  Windows: '#00a4ef',
  WSL2: '#0269b3',
};

const categoryColors: Record<string, { bgClass: string; iconColor: string }> = {
  'Languages': { bgClass: 'bg-tag-blue/10', iconColor: '#3b82f6' },
  'Security & Networking': { bgClass: 'bg-tag-orange/10', iconColor: '#f59e0b' },
  'Platforms': { bgClass: 'bg-tag-purple/10', iconColor: '#8b5cf6' },
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
];

function SkillIcon({ name }: { name: string }) {
  const icon = skillIcons[name];
  const color = skillIconColors[name] || 'currentColor';
  if (!icon) return null;
  return (
    <span className="flex items-center justify-center w-5 h-5" style={{ color }}>
      {icon}
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

      <div className="grid md:grid-cols-3 gap-6">
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
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
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
