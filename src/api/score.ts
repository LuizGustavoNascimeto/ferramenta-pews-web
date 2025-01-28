import { scoreReq, scoreRes } from "@/lib/types/score";

export const createScore = async (data: scoreReq): Promise<scoreRes> => {
  // const response = await api.post("/patient", data);
  const response = {
    data: {
      ...data,
      id: "example-id",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };
  console.log(response.data);

  return response.data;
};
