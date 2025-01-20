import { z } from "zod";
import { userSchema } from "../schemas/userSchema";

export type userReq = z.infer<typeof userSchema>;

export type userRes = userReq & {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type userUpdate = Partial<userRes>;
