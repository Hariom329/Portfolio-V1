
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Code, Briefcase, Home, Menu, Mail, FileText } from 'lucide-react'; // Added Menu, Mail, FileText
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as React from "react"; // Import React for useState

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: Code },
  { name: 'Internships', href: '/internships', icon: Briefcase },
  { name: 'Case Studies', href: '/case-studies', icon: FileText }, // Added Case Studies
  { name: 'Contact', href: '/contact', icon: Mail }, // Added Contact
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-primary sm:inline-block">
            Hariom Mishra
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-4 text-sm font-medium md:flex lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              <span className="flex items-center gap-1">
                <item.icon className="h-4 w-4" />
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-5 w-5 text-foreground/80" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background p-6 sm:w-[300px]">
              <nav className="mt-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                      pathname === item.href ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : 'text-foreground/80'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
