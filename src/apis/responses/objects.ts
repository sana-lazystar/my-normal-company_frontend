import { z } from 'zod';

export const product = z.object({
  seller: z.string(),
  name: z.string(),
  price: z.number(),
  favorite: z.boolean(),
});

export const productList = z.array(product);
