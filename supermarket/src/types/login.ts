import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
});
export type LoginType= z.infer<typeof loginSchema>;