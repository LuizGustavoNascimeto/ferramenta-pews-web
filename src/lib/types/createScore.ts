import { z } from "zod";
import { createScoreSchema } from "../schemas/createScoreSchema";

export type createScoreReq = z.infer<typeof createScoreSchema>;

export type createScoreRes = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  patientUUID: string;
  fcm: number;
  frm: number;
  avaliacaoNeurologica: number;
  avaliacaoCardiovascular: number;
  avaliacaoRespiratoria: number;
  nebulizacao: boolean;
  eps_Emese: boolean;
  final_rating: number;
  intervention: {
    description: string;
    tempoControleSSVV: string;
  };
};