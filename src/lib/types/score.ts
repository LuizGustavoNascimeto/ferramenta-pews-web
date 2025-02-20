import { z } from "zod";
import scoreSchema from "../schemas/scoreSchema";

export type scoreReq = z.infer<typeof scoreSchema>;

export type scoreRes = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
} & scoreReq;
