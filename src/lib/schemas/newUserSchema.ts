"use client";
import { z } from "zod";

export const newUserSchema = z.object({
  username: z.string({ required_error: "Username é obrigatório" }),
  email: z.string({ required_error: "Email é obrigatório" }),
  cpf: z.string({ required_error: "CPF é obrigatório" }),
  password: z.string({ required_error: "Password é obrigatório" }),
});

