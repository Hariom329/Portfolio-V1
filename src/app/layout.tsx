import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MotionProvider } from '@/components/providers/motion-provider';
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Hariom Mishra's Portfolio",
  description: 'Personal portfolio website of Hariom Mishra, showcasing skills, projects, and experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          'min-h-screen bg-background font-sans text-foreground'
        )}
      >
        <MotionProvider>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </MotionProvider>
      </body>
    </html>
  );
}
