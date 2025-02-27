"use client";

import { getAllPatients } from "@/api/patient";
import { PaginationPacients } from "@/components/pacienteLista/paginationPacients";
import PatientRow from "@/components/pacienteLista/patientRow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Title from "@/components/ui/title";
import { patientRes, patientsPagination } from "@/lib/types/patient";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Paciente() {
  const [patients, setPatients] = useState<patientRes[]>();
  const [searchTerm, setSearchTerm] = useState("");

  // Estados de paginação
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(7);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPatients = async (page: number, size: number) => {
    const data: patientsPagination = await getAllPatients(page, size);
    setPatients(data.patientList);
    data.total = 25;
    setTotalPages(Math.ceil(data.total / size)); // data.total representa o total de pacientes
  };

  useEffect(() => {
    fetchPatients(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
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

      {/* {filteredItems ? (
        <div className="gap-3 flex flex-col">
          {filteredItems.map((patient) => (
            <PatientRow
              key={patient.uuid}
              name={patient.name}
              dateAvaluation={patient.admissionDate}
              patientId={patient.uuid}
            />
          ))}
        </div>
      ) : ( */}

      <div className="gap-3 flex flex-col">
        {patients &&
          patients.map((patient) => (
            <PatientRow
              key={patient.uuid}
              name={patient.name}
              dateAvaluation={patient.admissionDate}
              patientId={patient.uuid}
            />
          ))}
      </div>
      {/* )} */}
      <div className="flex my-5 justify-center">
        <PaginationPacients
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
