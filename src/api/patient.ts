import { patientSchema } from "@/lib/schemas/patientSchema";
import { patientReq, patientRes } from "@/lib/types/patient";
import api from "./api";

export const createPatient = async (data: patientReq): Promise<patientRes> => {
  const response = await api.post("/patient", data);
  console.log(response.data);
  return response.data;
};

export const getAllPatients = async (): Promise<patientRes[]> => {
  // const response = await api.get("/patient");
  const patients: patientRes[] = [
    {
      id: "1e7b1d9e-8f6d-4b6a-9f1e-2d3b6e4a1e9a",
      name: "John Doe",
      birthDate: new Date("1980-01-01"),
      diagnosis: "Hypertension",
      bed: "A1",
      dih: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2a7b1d9e-8f6d-4b6a-9f1e-2d3b6e4a1e9b",
      name: "Jane Smith",
      birthDate: new Date("1990-02-02"),
      diagnosis: "Diabetes",
      bed: "B2",
      dih: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3b7b1d9e-8f6d-4b6a-9f1e-2d3b6e4a1e9c",
      name: "Alice Johnson",
      birthDate: new Date("1975-03-03"),
      diagnosis: "Asthma",
      bed: "C3",
      dih: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "4c7b1d9e-8f6d-4b6a-9f1e-2d3b6e4a1e9d",
      name: "Bob Brown",
      birthDate: new Date("1985-04-04"),
      diagnosis: "COPD",
      bed: "D4",
      dih: 2,
      createdAt: new Date(),
      updatedAt: new Date("2025-01-01"),
    },
  ];

  return patients;
};

export const getPatientById = async (id: string): Promise<patientRes> => {
  // const response = await api.get(`/patient/${id}`);
  const response = (await getAllPatients()).filter((patient) => patient.id === id)[0];

  return response;
}