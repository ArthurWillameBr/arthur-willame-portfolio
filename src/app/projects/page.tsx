import { Metadata } from "next";
import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";

export const metadata: Metadata = {
  title: "Projetos" 
}

export default function ProjectsPage() {
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  );
}
