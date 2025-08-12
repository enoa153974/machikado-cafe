// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        category: z.string(),
        image: z.string().optional(),
    }),
});

export const collections = {
    news,
};
