// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.union([z.string(), z.date()]),
            category: z.string(),
            image: image().optional(),   // ★ ここは image() だけ
        }),
});

export const collections = { news };
