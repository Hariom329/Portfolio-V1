'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, title, children, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      // Add mx-auto and max-w-7xl for centering and consistent width
      className={`container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% of the section is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="mb-10 text-3xl font-bold text-center text-foreground sm:text-4xl relative pb-4
                   after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                   after:w-16 after:h-1 after:bg-primary after:rounded-full"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}
