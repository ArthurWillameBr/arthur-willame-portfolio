import { NextResponse } from "next/server";
import { z } from "zod";
import axios from "axios"
import { env } from "@/env"
const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const NEXT_PUBLIC_WEBHOOK_URL = env.NEXT_PUBLIC_WEBHOOK_URL!

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {name, email, message } = bodySchema.parse(body);

   const messageData = {
        embeds: [
            {
                color: 0x0099ff,
                title: "Mensagem de contato",
                fields: [
                  {
                    name: "Nome",
                    value: name,
                    inline: true
                  },
                  {
                    name: "Email",
                    value: email,
                    inline: true
                  },
                  {
                    name: "Mensagem",
                    value: message
                  }
                ],
              }
        ]
   }

   await axios.post(NEXT_PUBLIC_WEBHOOK_URL, messageData);

   return NextResponse.json({ message: "Mensagem enviada com sucesso!" });

  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}