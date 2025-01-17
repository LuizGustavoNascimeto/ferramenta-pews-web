"use client";
import { z } from "zod";

export const pacienteSchema = z.object({
  id: z.string().uuid({ message: "ID inválido, deve ser um UUID" }),
  nome: z.string({ message: "Nome é obrigatório" }),
  dataNascimento: z.string({ message: "Data de nascimento é obrigatória" }),
  diagnostico: z.string({ message: "Diagnóstico é obrigatório" }),
  leito: z.string({ message: "Leito é obrigatório" }),
  idh: z.string({ message: "IDH é obrigatório" }),
});

export type Paciente = z.infer<typeof pacienteSchema>;
