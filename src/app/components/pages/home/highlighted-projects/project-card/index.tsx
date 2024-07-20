"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, NotepadText } from "lucide-react";
import { TechBadge } from "@/app/components/tech-badge";
import { Link } from "@/app/components/link";
import { fadeUpAnimation } from "@/app/lib/animations";

export const ProjectCard = () => {
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
            src="/connectNotes.png"
            alt="image"
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
          ConnectNotes
        </motion.h3>

        <motion.p
          {...fadeUpAnimation}
          className="text-gray-400 my-6"
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisitur, quis, id
          architecto a perspiciatis amet corrupti?
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href={`/projects/`}>
          Ver projeto
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};
