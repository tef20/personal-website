import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.object({ src: z.string(), alt: z.string() }),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
