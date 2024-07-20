'use client'

import Image from "next/image"

type KnownTechProps = {
  tech: {
    url: string,
    name: string,
  }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-violet-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium text-lg">{tech.name}</p>
        <Image src={tech.url} width={42}
          height={34} alt={tech.name}/>
      </div>
    </div>
  )
}
