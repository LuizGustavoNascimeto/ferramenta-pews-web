"use client";
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  document: z.string().nonempty("Documento é obrigatório"),
  specialty: z.string().nonempty("Especialidade é obrigatória"),
  username: z.string().nonempty("Nome de usuário é obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
  role: z.string().nonempty("Role é obrigatório"),
});

