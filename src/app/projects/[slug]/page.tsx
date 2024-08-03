import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/projects/project-sections";
import { ProjectPageData } from "@/types/page-info";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

interface ProjectPageProps {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
    query project {
    project(where: {slug: "${slug}"}) {
    pageThumbnail {
      url
    }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `;
  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 1 day
  );
};
export default async function Project({params: {slug} }:ProjectPageProps) {
  const {project} = await getProjectDetails(slug);


  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections />
    </>
  );
}
