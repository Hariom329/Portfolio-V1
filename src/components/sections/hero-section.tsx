'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Download } from 'lucide-react';

export function HeroSection() {
  return (
    // Added max-w-7xl for consistent width
    <section id="hero" className="container mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-7xl flex-col items-center justify-center px-4 text-center md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center" // Ensure items within this div are centered
      >
        <h1 className="mb-4 text-sm font-mono uppercase tracking-widest text-primary">
          Hi, my name is
        </h1>
        <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
          Hariom Mishra.
        </h2>
        <h3 className="mb-8 text-3xl font-bold text-muted-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          I build things for the Android & beyond.
        </h3>
        <p className="max-w-xl mx-auto mb-8 text-lg text-foreground/80">
          I'm a Computer Science student specializing in backend development, machine learning, and Android development. Currently seeking exciting opportunities.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/#about">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {/* Add CV download link here if available */}
          {/* <Button variant="outline" size="lg">
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
