import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: z.object({
        image: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});

export const collections = { blog };
