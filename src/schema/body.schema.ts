import { z } from "zod";

export const bodySchema = z.object({
  appId: z.string(),
  provider: z.string(),
  token: z.string(),
});

export type BodyType = z.infer<typeof bodySchema>;
