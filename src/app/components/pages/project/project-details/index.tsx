"use client";

import { Button } from "@/app/components/button";
import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { TechBadge } from "@/app/components/tech-badge";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";
import { ArrowLeft, Github, Link2 } from "lucide-react";
import { Project } from "@/types/projects";
import { RichText } from "@/app/components/rich-text";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
};

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[-1] opacity-20"
        style={{
          background: `url(/images/bg.png) no-repeat center/cover, url(${project?.pageThumbnail?.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <motion.div
        className="text-gray-400 text-center max-w-[740px] my-4 sm:my-6 text-sm sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText content={project.description.raw} />
      </motion.div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} {...techBadgeAnimation} />
        ))}
      </div>
      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
        {...fadeUpAnimation}
      >
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <Github size={20} />
            Repositório
          </Button>
        </a>
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <Link2 size={20} />
              Projeto Online
            </Button>
          </a>
        )}
      </motion.div>
      <Link href="/projects">
        <ArrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
};
