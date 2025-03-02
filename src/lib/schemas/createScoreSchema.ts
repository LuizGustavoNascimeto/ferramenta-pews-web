import { z } from "zod";

export const interventionSchema = z.object({
  description: z.string({ message: "Descrição é obrigatória" }),
  tempoControleSSVV: z.string({ message: "Tempo de controle SSVV é obrigatório" }),
});

export const createScoreSchema = z.object({
  patientUUID: z.string().uuid({ message: "UUID do paciente é obrigatório" }),
  fcm: z.number({ message: "FCM é obrigatório" }),
  frm: z.number({ message: "FRM é obrigatório" }),
  avaliacaoNeurologica: z.number({ message: "Avaliação Neurológica é obrigatória" }),
  avaliacaoCardiovascular: z.number({ message: "Avaliação Cardiovascular é obrigatória" }),
  avaliacaoRespiratoria: z.number({ message: "Avaliação Respiratória é obrigatória" }),
  nebulizacao: z.boolean({ message: "Nebulização é obrigatória" }),
  eps_Emese: z.boolean({ message: "EPS/Emese é obrigatório" }),
  final_rating: z.number({ message: "Avaliação final é obrigatória" }),
  intervention: interventionSchema,
});