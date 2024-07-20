import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/know-techs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
    </main>
  );
}
