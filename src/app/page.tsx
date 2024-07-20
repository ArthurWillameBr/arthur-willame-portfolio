import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { WorkExperience } from "./components/pages/home/work-experience";
import { KnowTechs } from "./components/pages/know-techs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
      <WorkExperience /> 
    </main>
  );
}
