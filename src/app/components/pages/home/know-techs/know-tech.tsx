"use client";

import { CMSIcon } from "@/app/components/cms-icon";
import { KnownTech as IKnownTech } from "@/types/projects";

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-violet-500 hover:bg-gray-600/30 transition-all">
      <div className="h-28 flex items-center justify-between">
        <p className="font-medium text-lg">{tech.name}</p>
          <CMSIcon icon={tech.iconSvg} />
      </div>
    </div>
  );
};
