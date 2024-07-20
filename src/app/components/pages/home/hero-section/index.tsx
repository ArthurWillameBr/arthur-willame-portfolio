import { Button } from "@/app/components/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";


const MOCK_CONTACTS = [
    {
        url: "https://www.linkedin.com/in/arthur-willame/",
        icon: <Linkedin />,
    }, 
    {
        url: "https://www.github.com",
        icon: <Github />
    },
    {
        url: "link email",
        icon: <Mail />
    }
]

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-start pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-center flex-col text-center">
        <div className="flex flex-col items-center space-y-2 lg:space-y-4 justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold">
            Olá, eu sou o Arthur Willame
          </h1>
          <p className="text-2xl md:text-2xl lg:text-3xl font-semibold">
            Desenvolvedor <span className="text-violet-500">Front-end</span>
          </p>
          <div className="flex flex-col items-center justify-center w-[422px] md:w-[522px] lg:w-[622px]">
            <p className="text-sm md:text-base">
              Tive o meu primeiro contanto com linhas de código aos 17 anos,
              estudando javascript e lógica de programação. Essa experiência me
              proporcionou uma imersão fascinante no universo do
              desenvolvimento. Desde então eu decidi que queria fazer isso na
              minha vida - eu queria ser um programador. Venho me aprimorando e
              estudando diariamente seja por meio da faculdade, criação de
              projetos pessoas, ou por cursos online. Meu foco é o
              desenvolvimento web.
            </p>
          </div>
          <div>
          <div className="flex items-center justify-center gap-3 pt-1 pb-3">
                {MOCK_CONTACTS.map((contact, index) => (
                    <a key={index} href={contact.url} target="_black" className="hover:text-violet-600 transition-all">{contact.icon}</a>
                ))}
            </div>
            <Button className="shadow-lg font-semibold">
              Entre em contato 
              <ArrowRight className="size-5"/>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
