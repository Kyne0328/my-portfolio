import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean;
}

export function Card({ children, className = '', hover = false, accent = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      className={`
        bg-card text-card-foreground rounded-xl border border-border p-6 
        ${hover ? 'transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5' : ''} 
        ${accent ? 'border-l-2 border-l-primary' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
