"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpAnimation } from "@/app/lib/animations";
import { ProjectCard } from "./project-card";
import { Project } from "@/types/projects";

interface ProjectsListProps {
  projects: Project[];
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <motion.div {...fadeUpAnimation} transition={{ duration: 0.5 }}>
        {projects.map((project) => (
          <Link key={project.title} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </motion.div>
    </section>
  );
};
