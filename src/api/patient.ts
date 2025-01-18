import { patientSchema } from "@/lib/schemas/patientSchema";
import { patientReq, patientRes } from "@/lib/types/patient";

/*END POINT AINDA NÃO CRIADO */
export const createPatient = async (data: patientReq): Promise<patientRes> => {
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
