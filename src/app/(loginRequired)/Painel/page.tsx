"use client";
import { getAllPatients } from "@/api/patient";
import { PaginationPacients } from "@/components/pacienteLista/paginationPacients";
import PatientRow from "@/components/pacienteLista/patientRow";
import Card from "@/components/pacienteLista/patientRow";
import Title from "@/components/ui/title";
import { patientRes, patientsPagination } from "@/lib/types/patient";
import { useEffect, useState } from "react";

export default function painel() {
  const [patients, setPatients] = useState<patientRes[]>([]);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(2);
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


  return (
    <div className="w-full space-y-4 min-w-[800px]">
      <Title>Painel</Title>
      <div>
        <h2 className="font-medium text-2xl">Espaços de trabalho</h2>
        <div>
          <div className="grid grid-cols-4 place-items-center rounded-md w-full py-3 px-5">
            <h3 className="justify-self-start font-semibold">Nome</h3>
            <h3 className="font-semibold">Data de inscrição</h3>
          </div>
          <Card name="Hospital UEMmmm" dateAvaluation={new Date}></Card>
        </div>
      </div>
      <div>
        <h2 className="font-medium text-2xl">Pacientes recentes</h2>
        <div>
          <div className="grid grid-cols-4 place-items-center rounded-md w-full py-3 px-5">
            <h3 className="justify-self-start font-semibold">Nome</h3>
            <h3 className="font-semibold">Data de avaliação</h3>
            <h3 className="font-semibold">Pontuação</h3>
          </div>
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
        </div>
      </div>

    </div>
  );
}
