'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: 'Jaypee University of Engineering and Technology',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    duration: 'Aug 2021 - Jun 2025',
    location: 'Guna, Madhya Pradesh, India',
    details: 'CGPA: 6.3',
  },
  {
    institution: 'Surmount International School',
    degree: 'Higher Secondary School (Class XII)',
    duration: '2019 - 2021',
    location: 'Gorakhpur, Uttar Pradesh, India',
  },
   {
    institution: 'H.P Children’s Academy',
    degree: 'Secondary School (Class X)',
    duration: '2008 - 2019',
    location: 'Gorakhpur, Uttar Pradesh, India',
  },
];

export function EducationSection() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary/30 before:content-[''] before:dark:bg-primary/20">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-background border-2 border-primary">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <Card className="bg-card border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{edu.institution}</CardTitle>
                <CardDescription className="text-primary">{edu.degree}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                {edu.details && <p className="text-sm text-foreground/90">{edu.details}</p>}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
