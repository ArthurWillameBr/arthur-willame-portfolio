import { env } from "@/env"

export const fetchHygraphQuery = async <T>(
    query: string,
    revalidate?: number,
  ): Promise<T> => {
    const response = await fetch(env.NEXT_PUBLIC_HYGRAPH_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
      },
      next: {
        revalidate,
      },
      body: JSON.stringify({
        query,
      }),
    })
  
    const { data } = await response.json()
  
    return data
  }
  