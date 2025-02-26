"use client";
import { z } from "zod";
import { createScoreSchema } from "./createScoreSchema";

export const createPatientSchema = z.object({
  patientUUID: z.string().uuid({ message: "UUID do paciente é obrigatório" }),
  name: z.string({ message: "Nome é obrigatório" }),
  diagnosis: z.string({ message: "Diagnóstico é obrigatório" }),
  bed: z.number({ message: "Leito é obrigatório" }),
  birthDate: z.string({ message: "Data de nascimento é obrigatória" }),
  admissionDate: z.string({ message: "Data de admissão é obrigatória" }),
  score: createScoreSchema,
});