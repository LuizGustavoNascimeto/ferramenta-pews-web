import { z } from "zod";
import { patientSchema } from "../schemas/patientSchema";

export type patientReq = z.infer<typeof patientSchema>;

export type patientRes = patientReq & {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  patientUUID: string;
  score: {
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
};

export type patientUpdate = Partial<patientRes>;