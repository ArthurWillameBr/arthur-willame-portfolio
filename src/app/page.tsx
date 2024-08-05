import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { WorkExperience } from "./components/pages/home/work-experience";
import { KnowTechs } from "./components/pages/home/know-techs";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { HomePageData } from "@/types/page-info";

const getPageData = (): Promise<HomePageData> => {
  const query = `
 query PageInfoQuery {
  page(where: {slug: "home"}) {
    knownTechs {
      iconSvg
      name
    }
    socials {
      iconSvg
      url
    }
    technologies {
      name
    }
    introduction {
      raw
    }
    highlightProjects {
      slug
      thumbnail {
        url
      }
      title
      shortDescription
      technologies {
        name
      }
    }
  }
  workExperiences {
    companyLogo {
      url
    }
    role
    companyName
    companyUrl
    startDate
    endDate
    description {
      raw
    }
    technologies {
      name
    }
  }
}
`

return fetchHygraphQuery(
  query,
   60 * 60 * 24, 
)
}

export default async function Home() {
  
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiencies={workExperiences}  /> 
    </>
  );
}
