import { z } from "zod";

export class ProductsEntitySchema {
  static Base = z.object({
    page: z.number(),
    per_page: z.number(),
    total: z.number(),
    total_pages: z.number(),

    data: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        year: z.number(),
        color: z.string(),
        pantone_value: z.string(),
      })
    ),

    support: z.object({
      url: z.string(),
      text: z.string(),
    }),
  });

  static Single = z.object({
    data: z.object({
      id: z.number(),
      name: z.string(),
      year: z.number(),
      color: z.string(),
      pantone_value: z.string(),
    }),

    support: z.object({
      url: z.string(),
      text: z.string(),
    }),
  });
}

export type ProductsBaseEntity = z.infer<typeof ProductsEntitySchema.Base>;
export type ProductsSingleEntity = z.infer<typeof ProductsEntitySchema.Single>;
