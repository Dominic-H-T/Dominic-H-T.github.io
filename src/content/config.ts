import { defineCollection, z } from 'astro:content';

const techCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    language: z.string(),
    role: z.string().default('Major Developer'),
    tags: z.array(z.string()),
    mitreTags: z.array(z.string()).optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    notPubliclyShared: z.boolean().optional(),
    status: z.enum(['Active', 'Production', 'Research', 'Archived', 'Completed']).default('Active'),
    featured: z.boolean().default(false),
  }),
});

const filmCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    logline: z.string(),
    role: z.string(),
    runtime: z.string(),
    format: z.string().default('4K Digital'),
    date: z.string(),
    festivalLaurels: z.array(z.string()).optional(),
    trailerUrl: z.string().optional(),
    screenplayUrl: z.string().optional(),
    status: z.enum(['Completed', 'In Production', 'Post-Production', 'Festival Circuit']).default('Completed'),
    featured: z.boolean().default(false),
  }),
});

const leadershipCollection = defineCollection({
  type: 'content',
  schema: z.object({
    organization: z.string(),
    role: z.string(),
    period: z.string(),
    focusArea: z.string(),
    achievements: z.array(z.string()),
    link: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  tech: techCollection,
  film: filmCollection,
  leadership: leadershipCollection,
};
