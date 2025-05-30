import { z, defineCollection } from 'astro:content';

const wifiFreeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    images: z.array(
      z.object({
        url: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
    features: z.array(z.string()).optional(),
    specification: z.object({
      model: z.string(),
      image_sensor: z.string(),
      lens: z.string(),
      resolution: z.string(),
      ip_range: z.string(),
      weight: z.string(),
      storage: z.string(),
    }).optional(),
    price: z.string().optional(),
  }),
});
const outdoorWifiFreeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    images: z.array(
      z.object({
        url: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
    features: z.array(z.string()).optional(),
    specification: z.object({
      model: z.string(),
      image_sensor: z.string(),
      lens: z.string(),
      resolution: z.string(),
      ip_range: z.string(),
      weight: z.string(),
      storage: z.string(),
    }).optional(),
    price: z.string().optional(),
  }),
});
const indoorWifiFreeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    images: z.array(
      z.object({
        url: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
    features: z.array(z.string()).optional(),
    specification: z.object({
      model: z.string(),
      image_sensor: z.string(),
      lens: z.string(),
      resolution: z.string(),
      ip_range: z.string(),
      weight: z.string(),
      storage: z.string(),
    }).optional(),
    price: z.string().optional(),
  }),
});

export const collections = {
  'wire-free': wifiFreeCollection,
  'outdoor-wifi': outdoorWifiFreeCollection,
  'indoor-wifi': indoorWifiFreeCollection,
};