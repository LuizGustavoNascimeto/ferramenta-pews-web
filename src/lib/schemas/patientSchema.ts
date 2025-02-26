"use client";
import { z } from "zod";

export const patientSchema = z.object({
  // id: z.string().uuid({ message: "ID inválido, deve ser um UUID" }),
  name: z.string({ message: "Nome é obrigatório" }),
  birthDate: z.date({ message: "Data de nascimento é obrigatória" }),
  diagnosis: z.string({ message: "Diagnóstico é obrigatório" }),
  bed: z.string({ message: "Leito é obrigatório" }),
  admissionDate: z.date({ message: "Data de entrada é obrigatória" }),
});
