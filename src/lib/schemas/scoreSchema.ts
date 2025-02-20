import { z } from "zod";
const scoreSchema = z.object({
  estadoConsciencia: z.enum(["vigila", "sono"]),

  fc: z.number().min(0, "FC deve ser um valor positivo"),
  rpm: z.number().min(0, "RPM deve ser um valor positivo"),

  avaliacaoNeurologica: z
    .number()
    .min(0)
    .max(3, "A avaliação neurológica deve ser um número de 0 a 3"),
  avaliacaoCardioVascular: z
    .number()
    .min(0)
    .max(3, "A avaliação cardiovascular deve ser um número de 0 a 3"),
  avaliacaoRespiratoria: z
    .number()
    .min(0)
    .max(3, "A avaliação respiratória deve ser um número de 0 a 3"),
  nebulizacao: z.boolean(),
  emese: z.boolean(),
  scoreValue: z
    .number()
    .min(0, "O valor da pontuação deve ser um número positivo"),
});

export default scoreSchema;
