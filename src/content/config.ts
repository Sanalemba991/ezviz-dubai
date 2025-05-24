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
    specifications: z.object({
      model: z.string().optional(),
      processor: z.string().optional(),
      os: z.string().optional(),
      operating_conditions: z.string().optional(),
      image_sensor: z.string().optional(),
      lens: z.string().optional(),
      lens_mount: z.string().optional(),
      night_vision: z.string().optional(),
      video_compression: z.string().optional(),
      max_resolution: z.string().optional(),
      audio: z.string().optional(),
      sensor: z.string().optional(),
      alarm: z.string().optional(),
      camera_siren: z.string().optional(),
      base_siren: z.string().optional(),
      wifi: z.string().optional(),
      network_requirement: z.string().optional(),
      local_storage: z.string().optional(),
      cloud_storage: z.string().optional(),
      camera_capacity: z.string().optional(),
      buttons: z.string().optional(),
      antenna: z.string().optional(),
      ethernet: z.string().optional(),
      power: z.string().optional(),
      battery: z.string().optional(),
      dc_power: z.string().optional(),
      power_consumption: z.string().optional(),
      camera_dimensions: z.string().optional(),
      base_dimensions: z.string().optional(),
      weight: z.string().optional(),
      ip_rating: z.string().optional(),
    }).optional(),
    price: z.string().optional(),
  }),
});

export const collections = {
  'wifiFree': wifiFreeCollection,
};