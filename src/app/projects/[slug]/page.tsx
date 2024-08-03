import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/projects/project-sections";
import { ProjectPageData } from "@/types/page-info";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
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
  const data = fetchHygraphQuery<ProjectPageData>(
    query,
     60 * 60 * 24, // 1 day
  )

  return data
};
export default async function Project({ params: { slug } }: ProjectPageProps) {
  const { project } = await getProjectDetails(slug);

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateMetadata({
  params: { slug },
}: ProjectPageProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}