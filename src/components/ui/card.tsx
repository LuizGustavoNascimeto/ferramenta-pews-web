import React from "react";
import { Button } from "@/components/ui/button";

interface CardProps {
  name: string,
  dateAvaluation: string,
  pewsPontuation: string,

}

export default function Card({name, dateAvaluation, pewsPontuation} : CardProps) {
  return (
    <div className="grid grid-cols-4 place-items-center rounded-md bg-card w-full py-3 px-5">
      <h1>{name}</h1>
      <h2>{dateAvaluation}</h2>
      <h2>{pewsPontuation}</h2>
      <Button>config</Button>
    </div>
  )
};
