"use client";
import { getAllPatients } from "@/api/patient";
import Card from "@/components/ui/card";
import Title from "@/components/ui/title";
import { patientRes } from "@/lib/types/patient";
import { useEffect, useState } from "react";

export default function painel() {
  const [patients, setPatients] = useState<patientRes[]>([]);
  
    useEffect(() => {
      async function fetchPatients() {
        const data = await getAllPatients();
        setPatients(data);
      }
      fetchPatients();
    }, []);
  
    console.log(patients);


  return (
    <div className="w-full space-y-4">
      <Title>Painel</Title>
      <div>
        <h2 className="font-medium text-2xl">Espaços de trabalho</h2>
        <div>
          <div className="grid grid-cols-4 place-items-center rounded-md py-3 px-5">
            <h3>Nome</h3>
            <h3>Data de inscrição</h3>
            <h3></h3>
            <h3>Configuração</h3>
          </div>
          <Card name="Hospital UEMmmm" dateAvaluation={new Date}></Card>
        </div>
      </div>
      <div>
        <h2 className="font-medium text-2xl">Pacientes recentes</h2>
        <div>
          <div className="grid grid-cols-4 place-items-center rounded-md w-full py-3 px-5">
            <h3>Nome</h3>
            <h3>Data de avaliação</h3>
            <h3>Pontuação</h3>
            <h3>Configuração</h3>
          </div>
          {patients.map((patient) => (
            <Card name={patient.name} dateAvaluation={patient.updatedAt} pewsPontuation={patient.dih} patientId={patient.id}></Card>
          ))}
        </div>
      </div>

    </div>
  );
}
