import { ContactForm } from '@/components/contact-form';
import { SectionWrapper } from '@/components/sections/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-foreground/80 text-balance">
            I'm currently open to new opportunities and collaborations. Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out.
          </p>
          <Card className="bg-card border-accent/20">
             <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
                <CardDescription className="text-foreground/70">Find me on these platforms</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                   <Mail className="h-5 w-5 text-primary" />
                   <Link href="mailto:c29hariommishra@gmail.com" className="text-foreground/90 hover:text-primary transition-colors">
                    c29hariommishra@gmail.com
                   </Link>
                </div>
                 <div className="flex items-center gap-3">
                   <Linkedin className="h-5 w-5 text-primary" />
                   <Link href="https://www.linkedin.com/in/hariom-mishra-848515233/" target="_blank" rel="noopener noreferrer" className="text-foreground/90 hover:text-primary transition-colors">
                    LinkedIn Profile
                   </Link>
                 </div>
                 <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <Link href="https://github.com/hariomMishra2003" target="_blank" rel="noopener noreferrer" className="text-foreground/90 hover:text-primary transition-colors">
                     GitHub Profile
                    </Link>
                 </div>
             </CardContent>
          </Card>
        </div>
        <div>
           <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
