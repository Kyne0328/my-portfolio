'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { siteConfig } from '@/data/portfolio';

const highlights = [
  { label: 'Program', value: 'BS Computer Science' },
  { label: 'Year', value: '3rd Year' },
  { label: 'Focus', value: 'Backend, Security, AI Tools' },
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading title="About Me" />

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-6"
        >
          <p className="text-lg text-foreground leading-relaxed">
            I&apos;m a{' '}
            <span className="text-primary font-semibold">third-year BS Computer Science student</span>{' '}
            at <span className="text-highlight">{siteConfig.university}</span>, focused on
            backend development, cybersecurity fundamentals, and practical software engineering.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I enjoy building projects that solve real problems, from mobile applications and
            database-backed systems to local AI-assisted developer tools. I like working on the
            parts of software that make workflows more reliable, controlled, and useful.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m currently improving my technical communication through README files, project
            documentation, and team-based academic work while continuing to strengthen my skills in
            backend systems, security-aware development, and automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={index < highlights.length - 1 ? 'pb-4 border-b border-border' : ''}
              >
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-primary">{item.value}</p>
              </motion.div>
            ))}
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
