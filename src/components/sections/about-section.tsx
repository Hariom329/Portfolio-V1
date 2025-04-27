'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionWrapper } from './section-wrapper';
import { Card, CardContent } from '@/components/ui/card';


export function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="mb-4 text-lg text-foreground/80 text-balance">
            Hello! I'm Hariom, a passionate and driven Computer Science and Engineering student at Jaypee University of Engineering and Technology. My journey in tech has led me to explore various domains, particularly backend development with tools like Apollo GraphQL, and the fascinating world of Machine Learning, where I've worked with models like LLaMA and Stable Diffusion.
          </p>
          <p className="mb-4 text-lg text-foreground/80 text-balance">
            I thrive on building practical solutions to real-world problems. From developing a static code analyzer inspired by ISRO challenges to creating AI-powered personal assistants and fashion stylists, I enjoy pushing the boundaries of what's possible with code.
          </p>
          <p className="text-lg text-foreground/80 text-balance">
            Beyond coding, I've had the privilege of leading the Android Development wing at GDSC, mentoring fellow students and fostering a collaborative learning environment. I'm always eager to learn new technologies and contribute to innovative projects.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <Card className="overflow-hidden rounded-lg shadow-lg border-primary/30">
            <CardContent className="p-0">
             <Image
                src="/IMG_35455.png" // Replace with actual photo if available
                alt="Hariom Mishra"
                width={300}
                height={300}
                className="object-cover aspect-square transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
