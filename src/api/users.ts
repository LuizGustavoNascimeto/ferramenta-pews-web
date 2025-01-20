import { userSchema } from "@/lib/schemas/userSchema";
import { userReq, userRes } from "@/lib/types/users";
import api from "./api";

export const getAllUsers = async (): Promise<userRes[]> => {
  const response = await api.get("/users/listAll");
  return response.data;
};
