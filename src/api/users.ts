import { userReq, userRes } from "@/lib/types/users";
import api from "./api";

export const getAllUsers = async (): Promise<userRes[]> => {
  const response = await api.get("/users/listAll");
  console.log(response.data);
  return response.data;
};

export const createUser = async (data: userReq): Promise<userRes> => {
  const response = await api.post("/users", data);
  console.log(response.data);
  return response.data;
};

export const loginUser = async (data: { username: string; password: string }) => {
  const response = await api.post("/login", data);
  return response.data;
};