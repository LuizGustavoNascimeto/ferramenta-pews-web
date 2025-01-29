import React from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardProps {
  name: string,
  dateAvaluation?: Date,
  pewsPontuation?: number,
  patientId?: string,

}

export default function Card({name, dateAvaluation, pewsPontuation, patientId} : CardProps) {
  return (
    <div className="grid grid-cols-4 place-items-center rounded-md bg-card py-3 px-5">
      <h1 className="justify-self-start">{name}</h1>
      <h2>{dateAvaluation?.toDateString()}</h2>
      <h2>{pewsPontuation}</h2>
      <Link href={`/Pacientes/${patientId}`} className="justify-self-end">
        <Button className="w-fit">
          <Settings></Settings>
        </Button>
      </Link>
    </div>
  )
};
