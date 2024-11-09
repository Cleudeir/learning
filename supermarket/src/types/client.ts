import * as z from "zod";
import { enderecoSchema } from "./endereco";

export const clientSchema = z.object({
  id: z.number().optional(),
  nome: z.string().nonempty().max(255),
  sobrenome: z.string().nonempty().max(255),
  cpfCnpj: z.string().transform((value: string) =>
    value.replace(/[^\d]+/g, "")
  ).refine(value => value.length === 11 || value.length === 14),
  dataNascimento: z.string().transform(value=>{
    const [_data] = value.split("T")
    return _data.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1");
  }),
  dataRegistro: z.string().transform((value: string) =>
    new Date(value).getTime().toString()
  ).optional(),
  sexo: z.string(),
  telefone: z.string(),
  email: z.string().email(),
  senha: z.string().min(6).max(255),
  endereco: enderecoSchema,
  status: z.boolean(),
});

export type Client = z.infer<typeof clientSchema>;
