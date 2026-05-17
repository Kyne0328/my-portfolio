import { Navbar } from '@/components/Navbar';
import { CursorSpotlight } from '@/components/CursorSpotlight';
import { LoadingScreen } from '@/components/LoadingScreen';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  GithubSection,
  ContactSection,
} from '@/sections';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorSpotlight />
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GithubSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kyne. All rights reserved.</p>
      </footer>
    </>
  );
}
