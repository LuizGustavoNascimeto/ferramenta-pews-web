import { createPatientReq, createPatientRes } from "@/lib/types/createPatient";
import api from "./api";
import { patientsPagination } from "@/lib/types/patient";

export const createPatientAPI = async (
  data: createPatientReq
): Promise<createPatientRes> => {
  const response = await api.post("/patient", data);
  return response.data;
};

export const getAllPatients = async (
  page: number,
  pageSize: number
): Promise<patientsPagination> => {
  const response = await api.get(
    `patient/listAll?pageNo=${page}&pageSize=${pageSize}`
  );
  console.log(response.data);
  return response.data;
};

export const getPatientById = async (id: string): Promise<createPatientRes> => {
  const response = await api.get(`/patient/uuid?uuid=${id}`);

  return response.data;
};
