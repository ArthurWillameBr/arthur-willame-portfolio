"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, NotepadText } from "lucide-react";
import { TechBadge } from "@/app/components/tech-badge";
import { Link } from "@/app/components/link";
import { fadeUpAnimation } from "@/app/lib/animations";
import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <motion.div
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <motion.div
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image
            src={project.thumbnail.url}
            alt={project.title}
            width={420}
            height={304}
            quality={100}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          {...fadeUpAnimation}
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          transition={{ duration: 0.7 }}
        >
          <NotepadText />
          {project.title}
        </motion.h3>

        <motion.p
          {...fadeUpAnimation}
          className="text-gray-400 my-6"
          transition={{ duration: 0.2, delay: 0.3 }}
        >
         {project.shortDescription}
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
         {project.technologies.map((tech, i) => (
          <TechBadge 
            name={tech.name}
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
          />
         ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};
