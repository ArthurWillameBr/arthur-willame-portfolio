import type { RichTextContent } from '@graphcms/rich-text-types'
import { technologies } from './projects'

export type WorkExperience = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate?: string
  technologies: technologies[]
  description: {
    raw: RichTextContent
  }
}
