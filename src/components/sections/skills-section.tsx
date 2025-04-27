'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { Code, Database, Wrench, BrainCircuit, Smartphone } from 'lucide-react'; // Added BrainCircuit and Smartphone

const skills = {
  Languages: {
    icon: Code,
    items: ['C', 'C++', 'Java', 'JavaScript', 'Kotlin', 'Python'],
  },
  'Tools/Platforms': {
    icon: Wrench,
    items: ['Android Studio', 'Apollo', 'FireBase', 'GitHub', 'Google Colab', 'Hugging Face', 'Kaggle', 'TensorFlow2'],
  },
  Databases: {
    icon: Database,
    items: ['FireStore', 'MongoDB', 'MySQL'],
  },
  'Machine Learning': { // Added ML category
      icon: BrainCircuit,
      items: ['PyTorch', 'LLaMA3', 'LLaMA2', 'CTransformers', 'Stable Diffusion'],
  },
  'Mobile Development': { // Added Mobile category
      icon: Smartphone,
      items: ['Android (Kotlin/Java)', 'Android Studio'],
  }
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, { icon: Icon, items }], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-card border-primary/20">
              <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                 <Icon className="h-6 w-6 text-primary" />
                 <CardTitle className="text-lg font-semibold text-foreground">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm bg-secondary/80 hover:bg-secondary text-secondary-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
