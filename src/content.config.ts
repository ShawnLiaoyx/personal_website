import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		excerpt: z.string().max(240),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		year: z.number().int(),
		role: z.string(),
		tags: z.array(z.string()).default([]),
		tech: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		cover: z.string().min(1),
		gallery: z.array(z.string()).default([]),
		links: z
			.object({
				live: z.string().url().optional(),
				github: z.string().url().optional(),
			})
			.optional(),
	}),
});

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		excerpt: z.string().max(280),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		category: z.string(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
		cover: z.string().optional(),
	}),
});

export const collections = {
	work: workCollection,
	blog: blogCollection,
};
