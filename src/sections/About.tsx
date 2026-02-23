'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { siteConfig } from '@/data/portfolio';

const highlights = [
  { label: 'Year', value: '3rd Year' },
  { label: 'Focus', value: 'Cybersecurity' },
  { label: 'Interest', value: 'Secure Systems' },
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
            <span className="text-primary font-semibold">3rd year Cybersecurity student</span>{' '}
            at{' '}
            <span className="text-highlight">{siteConfig.university}</span>,
            focused on building secure and scalable systems that create real-world
            impact.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m passionate about developing solutions that address practical
            challenges, with a strong interest in exploring different areas of
            cybersecurity. My approach combines technical skills with a curious
            mindset, always looking for opportunities to learn and grow in this
            rapidly evolving field.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            When I&apos;m not coding, you can find me researching security
            vulnerabilities, experimenting with new technologies, or working on
            projects that merge my interests in software development and
            cybersecurity.
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
