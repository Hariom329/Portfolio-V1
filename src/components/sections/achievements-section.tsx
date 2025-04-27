'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { Trophy, Award, Users, Presentation } from 'lucide-react'; // Added Presentation icon

const achievementsData = [
  {
    icon: Trophy,
    title: 'JUET BUILDS Hackathon - 3rd Place',
    description: 'Developed Horimiya, an all-purpose Engineer Assistant Discord Bot, securing 3rd place overall.',
  },
  {
    icon: Award,
    title: 'RIDE JIIT Noida 2024 Winner',
    description: 'Won all phases and secured potential funding for a fashion-centric Social Media Platform and Tool.',
  },
   {
    icon: Presentation, // Changed to Presentation icon
    title: 'RIDE JIIT Noida - ML Lead',
    description: 'Led the machine learning development, successfully presenting the module to investors.',
  },
  {
    icon: Users,
    title: 'GDSC Android Development Lead',
    description: 'Mentored 50+ students, led projects, and organized events like Compose Camp.',
  },
];

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="Achievements & Leadership">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-card border-accent/20 hover:border-accent/40 transition-colors duration-300 shadow-sm hover:shadow-lg">
              <CardHeader className="flex flex-row items-start space-x-4 pb-3">
                 <achievement.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                 <div>
                   <CardTitle className="text-lg font-semibold text-foreground mb-1">{achievement.title}</CardTitle>
                   <CardDescription className="text-foreground/80 text-balance">{achievement.description}</CardDescription>
                 </div>
              </CardHeader>
              {/* CardContent can be used if more details are needed */}
              {/* <CardContent></CardContent> */}
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
