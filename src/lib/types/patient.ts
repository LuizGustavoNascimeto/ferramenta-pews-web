import { z } from "zod";
import { patientSchema } from "../schemas/patientSchema";

export type patientReq = z.infer<typeof patientSchema>;

export type patientRes = patientReq & {
  uuid: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type patientsPagination = {
  page: number;
  pageSize: number;
  total?: number;
  patientList: patientRes[];
};
export type patientUpdate = Partial<patientRes>;
