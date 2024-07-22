import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_WEBHOOK_URL: z.string().url(),
    HYGRAPH_URL: z.string().url(),
    HYGRAPH_TOKEN: z.string(),
})

export const env = envSchema.parse(process.env)