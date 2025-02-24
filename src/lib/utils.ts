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
export function neurologicEvaluation(score: number): string {
  switch (score) {
    case 0:
      return "Ativo";
    case 1:
      return "Sonolento / hipoativo";
    case 2:
      return "Irritado";
    case 3:
      return "Letárgico / obnubilado ou resposta reduzida à dor";
    default:
      throw new Error("Invalid value");
  }
}

export function cardiovascularEvaluation(score: number): string {
  switch (score) {
    case 0:
      return "Corado ou TEC 1-2 seg";
    case 1:
      return "Pálido ou TEC 3 seg ou FC acima do limite superior para a idade";
    case 2:
      return "Moteado ou TEC 4 seg ou FC ≥ 20 bpm acima do limite superior para a idade";
    case 3:
      return "Acinzentado / cianótico ou TEC ≥ 5 seg ou FC ≥ 30 bpm acima do limite superior para a idade ou bradicardia para a idade";
    default:
      throw new Error("Invalid value");
  }
}

export function respiratoryEvaluation(score: number): string {
  switch (score) {
    case 0:
      return "FR normal para a idade, sem retração";
    case 1:
      return "FR acima do limite superior para a idade, uso de musculatura acessória ou FiO2 ≥ 30% ou 4 litros/min de O2";
    case 2:
      return "FR ≥ 20 rpm acima do limite superior para a idade, retrações subcostais, intercostais e de fúrcula ou FiO2 ≥ 40% ou 6 litros/min de O2";
    case 3:
      return "FR ≥ 5 rpm abaixo do limite inferior para a idade, retrações subcostais, intercostais, de fúrcula, do esterno e gemência ou FiO2 ≥ 50% ou 8 litros/min de O2";
    default:
      throw new Error("Invalid value");
  }
}
