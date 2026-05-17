'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { socials } from '@/data/portfolio';

const socialIcons = {
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export function ContactSection() {
  const contacts = [
    { name: 'Email', url: `mailto:${socials.email}`, icon: 'email' as const, label: socials.email },
    { name: 'GitHub', url: socials.github, icon: 'github' as const, label: '@Kyne0328' },
    { name: 'LinkedIn', url: socials.linkedin, icon: 'linkedin' as const, label: 'linkedin.com/in/kyne-anthony-pizon' },
  ];

  return (
    <Section id="contact" alternate>
      <SectionHeading title="Get in Touch" subtitle="Open to jobs, project feedback, and collaboration" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-muted-foreground text-lg leading-relaxed text-center mb-8">
          I&apos;m currently building my software engineering portfolio and improving my
          backend, cybersecurity, and documentation skills. Feel free to reach out for
          project discussions, internship opportunities, or feedback.
        </p>

        <Card className="divide-y divide-border p-0 overflow-hidden">
          {contacts.map((contact, index) => {
            const isEmail = contact.url.startsWith('mailto:');
            return (
              <motion.a
                key={contact.name}
                href={contact.url}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 px-6 py-5 hover:bg-primary/5 transition-colors duration-200 cursor-pointer"
                aria-label={`Open ${contact.name} contact link`}
              >
                <div className="text-primary shrink-0">
                  {socialIcons[contact.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">{contact.name}</p>
                  <p className="text-muted-foreground text-sm truncate">{contact.label}</p>
                </div>
                <div className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 shrink-0">
                  {arrowIcon}
                </div>
              </motion.a>
            );
          })}
        </Card>
      </motion.div>
    </Section>
  );
}
