import { z } from "zod";
import { userSchema } from "../schemas/userSchema";

export type userReq = z.infer<typeof userSchema>;

export type userRes = userReq & {
  name: string;
  document: string;
  specialty: string;
  username: string;
  password: string;
  role: "HEALTH_STAFFFF";
};

export type userUpdate = Partial<userRes>;
