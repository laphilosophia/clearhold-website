import { defineCollection, z } from 'astro:content'

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    section: z.enum(['overview', 'concepts', 'guides', 'reference', 'support']),
  }),
})

export const collections = {
  docs: docsCollection,
}
