"use client";
import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().nonempty("Nome de usuário é obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
});

