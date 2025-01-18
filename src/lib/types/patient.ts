import { z } from "zod";
import { patientSchema } from "../schemas/patientSchema";

export type patientReq = z.infer<typeof patientSchema>;

export type patientRes = patientReq & {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type patientUpdate = Partial<patientRes>;
