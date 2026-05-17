'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { siteConfig, education, experience, languages } from '@/data/portfolio';

const highlights = [
  { label: 'Program', value: education.degree },
  { label: 'Year', value: education.year },
  { label: 'Graduation', value: education.graduation },
  { label: 'Focus', value: 'Backend · Security · AI Tools' },
  { label: 'Languages', value: languages.join(' · ') },
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading title="About Me" />

      <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
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
            at <span className="text-highlight">{siteConfig.university}</span>, seeking a Software Engineer Intern
            role focused on backend systems, AI infrastructure, or security software.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I enjoy building projects that solve real problems — from mobile applications and
            database-backed systems to local AI-assisted developer tools. I like working on the
            parts of software that make workflows more reliable, controlled, and useful.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Experienced with Node.js, Python, Flutter, SQL, and local developer tooling. Currently
            improving technical communication through README files, project documentation, and
            team-based academic work while strengthening my skills in backend systems,
            security-aware development, and automation.
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
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className={index < highlights.length - 1 ? 'pb-4 border-b border-border' : ''}
              >
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-primary text-sm">{item.value}</p>
              </motion.div>
            ))}
          </Card>
        </motion.div>
      </div>

      {/* Relevant Coursework */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h3 className="text-lg font-semibold mb-4 text-foreground">Relevant Coursework</h3>
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((course, index) => (
            <motion.span
              key={course}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.04 }}
              className="px-3 py-1.5 rounded-lg border border-border bg-secondary/40 text-sm text-muted-foreground"
            >
              {course}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* School Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-foreground">School-Related Experience</h3>
        <Card className="border-l-2 border-l-primary">
          <div className="flex items-start justify-between gap-4 mb-2">
            <p className="font-semibold text-foreground">{experience.title}</p>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{experience.org}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">{experience.description}</p>
        </Card>
      </motion.div>
    </Section>
  );
}
