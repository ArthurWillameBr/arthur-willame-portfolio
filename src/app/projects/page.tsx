import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { ProjectsPageData } from "@/types/page-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos"
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query projectQuery {
    projects {
      shortDescription
      slug
      title
      thumbnail {
        url
      }
      technologies {
        name
      }
    }
  }
  `;
  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 1 day
  );
  
};

export default async function ProjectsPage() {

  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects}/>
    </>
  );
}
