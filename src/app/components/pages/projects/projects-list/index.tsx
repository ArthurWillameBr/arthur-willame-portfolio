'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUpAnimation } from '@/app/lib/animations'
import { ProjectCard } from './project-card'

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/projects/`}>
            <ProjectCard />
          </Link>
        </motion.div>

        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/projects/`}>
            <ProjectCard />
          </Link>
        </motion.div>

        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/projects/`}>
            <ProjectCard />
          </Link>
        </motion.div>
    </section>
  )
}
