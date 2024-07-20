'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/lib/animations'

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
        <motion.div
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            Home
          </h2>
          <Image
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão`}
            src="/connectNotes.png"
            unoptimized
          />
        </motion.div>
    </section>
  )
}
