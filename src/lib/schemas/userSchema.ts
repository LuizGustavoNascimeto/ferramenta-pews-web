"use client";
import { z } from "zod";

export const userSchema = z.object({
  username: z.string({ required_error: "Username é obrigatório" }),
  password: z.string({ required_error: "Password é obrigatório" }),
  role: z.string({ required_error: "Role é obrigatório" }),
});

