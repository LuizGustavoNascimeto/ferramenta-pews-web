import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { scoreReq } from "./types/score";
import { interventionRes } from "./types/intervention";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scoreCalculator(score: scoreReq): number {
  let {
    estadoConsciencia,
    fc,
    rpm,
    avaliacaoNeurologica,
    avaliacaoCardioVascular,
    avaliacaoRespiratoria,
    nebulizacao,
    emese,
  } = score;
  console.log(score);

  let scoreValue = 0;
  if (avaliacaoNeurologica === undefined) {
    avaliacaoNeurologica = 0;
  }
  if (avaliacaoCardioVascular === undefined) {
    avaliacaoCardioVascular = 0;
  }
  if (avaliacaoRespiratoria === undefined) {
    avaliacaoRespiratoria = 0;
  }
  scoreValue += avaliacaoNeurologica;
  scoreValue += avaliacaoCardioVascular;
  scoreValue += avaliacaoRespiratoria;

  if (nebulizacao) {
    scoreValue += 2;
  }

  if (emese) {
    scoreValue += 2;
  }

  return scoreValue;
}

export function intervention(scoreValue: number): interventionRes {
  let res: interventionRes;
  if (scoreValue === 0) {
    res = {
      intervention: "Manter rotina de avaliação. PEWS a cada 24 horas",
      controlTime: "Sinais Vitais de 6/6 horas",
    };
    return res;
  } else if (scoreValue >= 1 && scoreValue <= 2) {
    res = {
      intervention:
        "Avaliação imediata do enfermeiro. Repetir o PEWS em 60 minutos, na permanência da pontuação, comunicar médico pediatra. Registrar orientações médicas em evolução de enfermagem e relatório técnico",
      controlTime: "Sinais Vitais de 4/4 horas",
    };
  } else if (scoreValue === 3) {
    res = {
      intervention:
        "Avaliação imediata do enfermeiro. Repetir o PEWS em 30 minutos, comunicar médico pediatra e definir a necessidade de chamado de intercorrência. Registrar orientações médicas em evolução de enfermagem e relatório técnico",
      controlTime: "Sinais Vitais de 2/2 horas",
    };
  } else if (scoreValue >= 4 && scoreValue <= 6) {
    res = {
      intervention:
        "Avaliação/acompanhamento imediato do enfermeiro(a). Repetir o PEWS em 20 minutos, abrir chamado de intercorrência. Registrar orientações médicas em evolução de enfermagem e relatório técnico",
      controlTime: "Sinais Vitais de 1/1 hora",
    };
  } else if (scoreValue >= 7) {
    res = {
      intervention:
        "Repetir o PEWS imediatamente por um segundo avaliador. Avaliação médica imediata. Considerar fluxo de PCR (Time de Resposta Rápida). Registrar orientações médicas em evolução de enfermagem e relatório técnico",
      controlTime: "Monitorização contínua",
    };
  } else {
    throw new Error("Invalid value");
  }
  return res;
}
