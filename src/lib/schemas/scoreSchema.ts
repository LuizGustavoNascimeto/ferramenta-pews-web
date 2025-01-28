import { z } from "zod";

const CardiovascularEnum = z.enum([
  "Corado ou TEC 1-2 seg",
  "Pálido ou TEC 3 seg ou FC acima do limite superior para a idade",
  "Moteado ou TEC 4 seg ou FC ≥ 20 bpm acima do limite superior para a idade",
  "Acinzentado / cianótico ou TEC ≥ 5 seg ou FC ≥ 30 bpm acima do limite superior para a idade ou bradicardia para a idade",
]);

const NeurologicaEnum = z.enum([
  "Ativo",
  "Sonolento/Hipoativo",
  "Irritado",
  "Letárgico/Obnubilado ou resposta reduzida à dor",
]);

const RespiratoriaEnum = z.enum([
  "FR normal para a idade, sem retração",
  "FR acima do limite superior para a idade, uso de musculatura acessória ou FiO2 ≥ 30% ou 4 litros/min de O2",
  "FR ≥ 20 rpm acima do limite superior para a idade, retrações subcostais, intercostais e de fúrcula ou FiO2 ≥ 40% ou 6 litros/min de O2",
  "FR ≥ 5 rpm abaixo do limite inferior para a idade, retrações subcostais, intercostais, de fúrcula, do esterno e gemência ou FiO2 ≥ 50% ou 8 litros/min de O2",
]);

const scoreSchema = z.object({
  estadoConsciencia: z.enum(["vigila", "sono"]),

  fc: z.number().min(0, "FC deve ser um valor positivo"),
  rpm: z.number().min(0, "RPM deve ser um valor positivo"),

  avaliacaoNeurologica: z.string(),
  avaliacaoCardioVascular: z.string(),
  avaliacaoRespiratoria: z.string(),
  nebulizacao: z.boolean(),
  emese: z.boolean(),
});

export default scoreSchema;
