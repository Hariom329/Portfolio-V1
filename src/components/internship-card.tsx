'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react'; // Added icons

interface InternshipCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  index: number;
}

export function InternshipCard({ company, role, duration, location, description, technologies, index }: InternshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="bg-card border-accent/20 hover:border-accent/40 transition-colors duration-300 shadow-sm hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground mb-1">{role}</CardTitle>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
             <div className="flex items-center gap-1">
                <Building className="h-4 w-4 text-accent" />
                <span>{company}</span>
             </div>
             <span className="hidden sm:inline">•</span>
             <div className="flex items-center gap-1">
                 <Calendar className="h-4 w-4 text-accent" />
                 <span>{duration}</span>
             </div>
              <span className="hidden sm:inline">•</span>
             <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{location}</span>
             </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/80 text-balance mb-4">
            {description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
           <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs border-accent text-accent/90">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        {/* <CardFooter>
          Add links or further details if necessary
        </CardFooter> */}
      </Card>
    </motion.div>
  );
}
