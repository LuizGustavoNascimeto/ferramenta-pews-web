import { z } from "zod";
import { patientSchema } from "../schemas/patientSchema";
import { createPatientSchema } from "../schemas/createPatientSchema";

export type createPatientReq = z.infer<typeof createPatientSchema>;

export type createPatientRes = createPatientReq & {
  name: string,
  diagnosis: string,
  bed: number,
  birthDate: string,
  admissionDate: string,
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

export type patientUpdate = Partial<createPatientRes>;