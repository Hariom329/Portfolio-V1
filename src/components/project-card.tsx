'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react'; // Assuming Github icon is relevant

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string; // Optional live demo link
  status?: string;
  index: number;
}

export function ProjectCard({ title, description, technologies, githubLink, liveLink, status, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full bg-card border-primary/20 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
          {status && <CardDescription className="text-xs text-primary">{status}</CardDescription>}
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="mb-4 text-sm text-foreground/80 text-balance">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-secondary/70 hover:bg-secondary/90">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-3 pt-4">
          {githubLink && (
            <Button variant="outline" size="sm" asChild className="hover:bg-accent hover:text-accent-foreground">
              <Link href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub Repository`}>
                <Github className="mr-2 h-4 w-4" /> Code
              </Link>
            </Button>
          )}
           {liveLink && (
             <Button variant="default" size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
               <Link href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${title} Live Demo`}>
                 <ExternalLink className="mr-2 h-4 w-4" /> Demo
               </Link>
             </Button>
           )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
