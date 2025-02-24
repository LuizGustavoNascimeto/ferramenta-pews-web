"use client";

import { getAllPatients } from "@/api/patient";
import { Button } from "@/components/ui/button";
import PatientRow from "@/components/pacienteLista/patientRow";
import { Input } from "@/components/ui/input";
import Title from "@/components/ui/title";
import { patientRes } from "@/lib/types/patient";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Paciente() {
  const [patients, setPatients] = useState<patientRes[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(patients);

  useEffect(() => {
    async function fetchPatients() {
      const data = await getAllPatients();
      setPatients(data);
    }
    fetchPatients();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = patients.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="gap-3 flex flex-col min-w-[800px]">
      <Title>Lista de Pacientes</Title>

      <div className="flex flex-row items-end gap-1 w-full">
        <Link href={"/cadastrarPaciente"} className="">
          <Button>Novo Paciente</Button>
        </Link>

        <div className="flex flex-col gap-2 w-full">
          <h2 className="font-semibold">Pesquisar</h2>

          <Input
            type="text"
            placeholder="Ex: João Pereira"
            value={searchTerm}
            onChange={handleSearch}
            className=""
          />
        </div>
      </div>

      <div className="grid grid-cols-4 place-items-center rounded-md w-full py-3 px-5">
        <h3 className="justify-self-start font-semibold">Nome</h3>
        <h3 className="font-semibold">Data de avaliação</h3>
        <h3 className="font-semibold">Pontuação</h3>
      </div>

      {filteredItems.length > 0 ? (
        <div className="gap-3 flex flex-col">
          {filteredItems.map((patient) => (
            <PatientRow
              name={patient.name}
              dateAvaluation={patient.updatedAt}
              pewsPontuation={patient.dih}
              patientId={patient.id}
            ></PatientRow>
          ))}
        </div>
      ) : (
        <div className="gap-3 flex flex-col">
          {patients.map((patient) => (
            <PatientRow
              name={patient.name}
              dateAvaluation={patient.updatedAt}
              pewsPontuation={patient.dih}
              patientId={patient.id}
            ></PatientRow>
          ))}
        </div>
      )}
    </div>
  );
}
