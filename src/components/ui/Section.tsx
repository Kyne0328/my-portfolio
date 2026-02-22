import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export function Section({ id, children, className = '', alternate = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 md:px-8 ${alternate ? 'bg-secondary/30' : ''} ${className}`}
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="h-1 w-12 bg-gradient-to-r from-primary to-highlight rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      {subtitle && <p className="text-muted-foreground ml-16">{subtitle}</p>}
    </motion.div>
  );
}
