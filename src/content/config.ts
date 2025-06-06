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
const smartEntrycollection=defineCollection({
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
      maximum_accuracy: z.string(),
      framerate: z.string(),
      Ingress_Protection_Degree: z.string(),
      size: z.string(),
      battery: z.string(),
    }).optional(),
    price: z.string().optional(),
  }),
});
const smartHomeAppliancesCollection=defineCollection({
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
      interface: z.string(),
      power_source: z.string(),
      energy_consumption: z.string(),
      network_port: z.string(),
      dimensions: z.string(),
      package_size: z.string(),
      net_weight: z.string(),    
    }).optional(),
    price: z.string().optional(),
  }),
});
const homeSensorCollection=defineCollection({
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
      interface: z.string(),
      power_source: z.string(),
      energy_consumption: z.string(),
      network_port: z.string(),
      dimensions: z.string(),
       package_size: z.string(),
       net_weight: z.string(),
     
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
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    contents: z.array(z.string()),
    author: z.string(),
    role: z.string().optional(),
    authorImage: image(),
    authorImageAlt: z.string(),
    pubDate: z.date(),
    cardImage: image(),
    cardImageAlt: z.string(),
    readTime: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});
export const collections = {
   'blog': blogCollection,
  'wire-free': wifiFreeCollection,
  'outdoor-wifi': outdoorWifiFreeCollection,
  'indoor-wifi': indoorWifiFreeCollection,
  'smartentry': smartEntrycollection,
  'smarthomeappliances': smartHomeAppliancesCollection,
  'homesensor': homeSensorCollection,
};