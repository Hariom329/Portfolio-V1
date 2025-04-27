import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { EducationSection } from '@/components/sections/education-section';
import { AchievementsSection } from '@/components/sections/achievements-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
    </div>
  );
}
