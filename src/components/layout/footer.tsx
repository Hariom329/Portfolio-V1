import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      {/* Added max-w-7xl for constrained width, mx-auto for centering, px for padding */}
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0 md:px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} Hariom Mishra. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/hariomMishra2003" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-foreground/80 hover:text-primary" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
             <Link href="https://www.linkedin.com/in/hariom-mishra-848515233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
               <Linkedin className="h-5 w-5 text-foreground/80 hover:text-primary" />
             </Link>
           </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:hariommishra013@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-foreground/80 hover:text-primary" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
