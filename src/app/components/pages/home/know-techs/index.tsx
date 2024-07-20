import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./know-tech";

export const KnowTechs = () => {
  return (
    <section className="container py-14">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
          {Array.from({ length: 6 }).map((_, i) => (
              <KnownTech key={i} tech={{
                url: "/NextJS-Dark.svg",
                name: "Next.js",
            }} />
          ) )}
      </div>
    </section>
  );
};
