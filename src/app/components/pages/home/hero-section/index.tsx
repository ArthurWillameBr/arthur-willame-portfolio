"use client";

import { Button } from "@/app/components/button";
import { ArrowRight } from "lucide-react";
import { HomePageInfo } from "@/types/page-info";
import { RichText } from "@/app/components/rich-text";
import { CMSIcon } from "@/app/components/cms-icon";


interface HeroSectionProps {
  homeInfo: HomePageInfo;
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-start pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-center flex-col text-center">
        <div className="flex flex-col items-center space-y-2 lg:space-y-4 justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-tight font-semibold">
            Olá, eu sou o Arthur Willame
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Desenvolvedor <span className="text-violet-500">Front-end</span>
          </p>
          <div className="flex flex-col items-center justify-center w-[388px] md:w-[522px] lg:w-[622px]">
            <div className="text-sm md:text-base">
              <RichText content={homeInfo.introduction.raw} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-3 pt-1 pb-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_black"
                  className="hover:text-violet-600 transition-all"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
            <Button onClick={handleContact} className="shadow-lg font-semibold">
              Entre em contato
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
