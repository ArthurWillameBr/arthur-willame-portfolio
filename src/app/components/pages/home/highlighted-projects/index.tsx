import { HorizontalDivider } from "@/app/components/horizontal-devider";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/projects";

interface HighlightedProjectsProps {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-14">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-14" />
      <div>
        <div>
         {projects?.map((project) => {
          return (
            <div key={project.slug}>
               <ProjectCard project={project}/>
               <HorizontalDivider className="my-14" />
            </div>
          )
         })}
        </div>

        <p className="flex items-center gap-3">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <ArrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
