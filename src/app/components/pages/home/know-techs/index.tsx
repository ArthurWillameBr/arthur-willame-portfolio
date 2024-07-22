import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./know-tech";
import { KnownTech as IKnownTech } from "@/types/projects";


interface KnowTechsProps {
  techs: IKnownTech[],
}

export const KnowTechs = ({techs}: KnowTechsProps) => {
  return (
    <section className="container py-14">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
          {techs.map((tech) => (
              <KnownTech key={tech.name} tech={tech} />
          ) )}
      </div>
    </section>
  );
};
