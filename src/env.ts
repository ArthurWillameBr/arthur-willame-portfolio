import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_WEBHOOK_URL: z.string().url(),
    NEXT_PUBLIC_HYGRAPH_URL: z.string().url(),
    NEXT_PUBLIC_HYGRAPH_TOKEN: z.string(),
})

console.log("NEXT_PUBLIC_WEBHOOK_URL", process.env.NEXT_PUBLIC_WEBHOOK_URL)

export const env = envSchema.parse(process.env)