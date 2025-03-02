import React from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";

interface CardProps {
  name: string;
  dateAvaluation: Date;
  pewsPontuation?: number;
  patientId?: string;
}

export default function PatientRow({
  name,
  dateAvaluation,
  pewsPontuation,
  patientId,
}: CardProps) {
  return (
    <Link href={`/Pacientes/${patientId}`} className="justify-self-end">
      <div className="grid grid-cols-4 place-items-center rounded-md bg-card py-3 px-5">
        <h1 className="justify-self-start">{name}</h1>
        <h2>{format(dateAvaluation, "dd/MM/yyyy")}</h2>
        {pewsPontuation ? <h2>{pewsPontuation}</h2> : <h2>Sem pontuação</h2>}
        <div className="justify-self-end">
          <Button className="w-fit">
            <Settings />
          </Button>
        </div>
      </div>
    </Link>
  );
}
