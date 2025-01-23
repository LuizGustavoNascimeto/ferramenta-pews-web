"use client";
import { getPatientById } from "@/api/patient";
import Title from "@/components/ui/title";
import { patientRes } from "@/lib/types/patient";
import { useParams } from "next/navigation";

export default async function page() {
  const params = useParams<{ id: string }>();
  const patient: patientRes = await getPatientById(params.id);
  const age =
    new Date().getFullYear() - new Date(patient.birthDate).getFullYear();

  return (
    <div className="w-full flex flex-col gap-4 ">
      <div className="flex flex-col gap-3">
        <Title>{patient.name}</Title>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex ">
            <span className="font-semibold">Idade:</span>
            <span>{age}</span>
          </div>
          <div className="flex ">
            <span className="font-semibold">DIH:</span>
            <span>{patient.dih}</span>
          </div>
          <div className="flex ">
            <span className="font-semibold">Diagnóstico:</span>
            <span>{patient.diagnosis}</span>
          </div>
          <div className="flex ">
            <span className="font-semibold">Leito:</span>
            <span>{patient.bed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}