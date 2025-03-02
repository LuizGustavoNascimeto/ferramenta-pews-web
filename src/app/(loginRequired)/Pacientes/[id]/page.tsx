"use client";
import { getPatientById } from "@/api/patient";
import { HistoricRow } from "@/components/paciente/historicoRow";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Title from "@/components/ui/title";
import { createPatientRes } from "@/lib/types/createPatient";
import { patientRes } from "@/lib/types/patient";
import { scoreRes } from "@/lib/types/score";
import {
  cardiovascularEvaluation,
  intervention,
  neurologicEvaluation,
  respiratoryEvaluation,
} from "@/lib/utils";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { Settings } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default async function page() {
  const params = useParams<{ id: string }>();
  const lastScore: scoreRes = {
    scoreValue: 10, // número positivo
    id: "12345", // string obrigatória
    createdAt: new Date("2022-05-22"), // Date opcional, usando 22/05/2022
    updatedAt: new Date(), // Date opcional, usando 22/05/2022
    estadoConsciencia: "vigila", // "vigila" ou "sono"
    fc: 80, // número positivo
    rpm: 16, // número positivo
    avaliacaoNeurologica: 2, // número entre 0 e 3
    avaliacaoCardioVascular: 1, // número entre 0 e 3
    avaliacaoRespiratoria: 3, // número entre 0 e 3
    nebulizacao: false, // boolean
    emese: true, // boolean
  };
  const patient: createPatientRes = await getPatientById(params.id);
  const age =
    new Date().getFullYear() - new Date(patient.birthDate).getFullYear();

  function calcDiffTime(dataInicial: Date, dataFinal = new Date()) {
    const inicio = new Date(dataInicial);
    const fim = new Date(dataFinal);

    const dias = differenceInDays(fim, inicio);
    if (dias > 0) return `${dias} dia(s)`;

    const horas = differenceInHours(fim, inicio);
    if (horas > 0) return `${horas} hora(s)`;

    const minutos = differenceInMinutes(fim, inicio);
    if (minutos > 0) return `${minutos} minuto(s)`;

    const segundos = differenceInSeconds(fim, inicio);
    return `${segundos} segundo(s)`;
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <div className=" flex flex-row justify-between">
          <Title>{patient.name}</Title>
          <Button variant={"outline"}>
            <Settings />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex gap-1">
            <span className="font-semibold">Idade: </span>
            <span>{age}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Diagnóstico: </span>
            <span>{patient.diagnosis}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">DIH: </span>
            <span>{patient.admissionDate}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Leito: </span>
            <span>{patient.bed}</span>
          </div>
        </div>
      </div>
      <Separator />
      {lastScore ? (
        <div className=" flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-row gap-4">
              <h2 className="text-2xl font-semibold">
                Ultima pontuação: {lastScore.scoreValue}{" "}
                <span className="text-sm font-normal opacity-70">
                  {lastScore.createdAt
                    ? `(${calcDiffTime(lastScore.createdAt)} atrás)`
                    : ""}
                </span>
              </h2>
            </div>
            <Button>
              <Link href={"/cadastrarPaciente"}>Adicionar Pews</Link>
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="">
              <p className=" font-semibold">Intervenção:</p>
              <p>{intervention(lastScore.scoreValue).intervention}</p>
            </div>
            <div className="flex gap-1">
              <p className=" font-semibold">Tempo de controle de SSVV:</p>
              <p>{intervention(lastScore.scoreValue).controlTime}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col my-4 gap-2">
          <span className="text-3xl opacity-70 text-center">
            Não há pontuação cadastrada para esse paciente
          </span>

          <span className="text-2xl opacity-70 text-center">
            deseja cadastrar uma nova pontuação?
          </span>
          <div className="flex justify-center ">
            <Button className="w/">Adicionar pontuação</Button>
          </div>
        </div>
      )}
      <Separator />
      {lastScore && (
        <div className="flex flex-col gap-3">
          <div className="flex gap-1">
            <p className=" font-semibold">Estado de consciência:</p>
            <p>{lastScore.estadoConsciencia}</p>
          </div>
          <div className="flex gap-1">
            <p className=" font-semibold">Avaliação neurológica:</p>
            <p>{neurologicEvaluation(lastScore.avaliacaoNeurologica)}</p>
          </div>
          <div className="flex gap-1">
            <p className=" font-semibold">Avaliação cardiovascular:</p>
            <p>{cardiovascularEvaluation(lastScore.avaliacaoCardioVascular)}</p>
          </div>
          <div className="flex gap-1">
            <p className=" font-semibold">Avaliação respiratória:</p>
            <p>{respiratoryEvaluation(lastScore.avaliacaoRespiratoria)}</p>
          </div>
          <div className="flex gap-1">
            <p className=" font-semibold">
              Nebulização de resgate em 15 minutos:
            </p>
            <p>{lastScore.nebulizacao ? "Sim" : "Não"}</p>
          </div>
          <div className="flex gap-1">
            <p className=" font-semibold">
              3 episódios ou mais de emese no pós operatório:
            </p>
            <p>{lastScore.emese ? "Sim" : "Não"}</p>
          </div>
          <HistoricRow
            text="Frequência Cardíaca por minuto"
            value={lastScore.fc}
          />{" "}
          <HistoricRow
            text="Frequência Respiratória minuto"
            value={lastScore.rpm}
          />
        </div>
      )}
    </div>
  );
}
