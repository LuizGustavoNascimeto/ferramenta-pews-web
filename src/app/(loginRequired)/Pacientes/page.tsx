"use client";
import { getAllPatients } from "@/api/patient";
import { patientRes } from "@/lib/types/patient";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Paciente() {
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
    <div>
      {patients.map((patient) => (
        <div key={patient.id}>
          <Link href={`/Pacientes/${patient.id}`}>Clique a aqui</Link>
        </div>
      ))}
    </div>
  );
}
