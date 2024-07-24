"use client";

import { fadeUpAnimation } from "@/app/lib/animations";
import { motion } from "framer-motion";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { ArrowRight, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";

const contactFormData = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
});

type ContactForm = z.infer<typeof contactFormData>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormData),
  });

  async function onSubmit({ email, message, name }: ContactForm) {
    try {
      await axios.post("/api/contact", { email, message, name });
      console.log("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      console.log("Erro ao enviar mensagem", error);
    }
  }
  return (
    <section
      className="py-16 px-6 md:py-32  flex items-center justify-center bg-zinc-950 bg-hero-image bg-cover bg-center bg-no-repeat"
      id="contact"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder="Nome"
            className="w-full h-12 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-600"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-12 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-600"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-600"
            {...register("message")}
            maxLength={500}
          />

          <div className="relative w-max mx-auto mt-6">
              <Button className="z-[2] relative" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="size-4 animate-spin"/> }
                Enviar mensagem
                <ArrowRight size={18} />
              </Button>
            <div className="absolute inset-0 bg-violet-600 blur-2xl opacity-20" />
          </div>
        </motion.form>
      </div>
    </section>
  );
};
