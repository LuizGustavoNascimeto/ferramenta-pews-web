"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/datePicker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Title from "@/components/ui/title";
import { intervention, scoreCalculator } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createPatientAPI } from "@/api/patient";
import { createPatientSchema } from "@/lib/schemas/createPatientSchema";

export default function CadastrarPaciente() {
  const cardioOptions = [
    { text: "Corado ou TEC 1-2 seg", value: 0 },
    {
      text: "Pálido ou TEC 3 seg ou FC acima do limite superior para a idade",
      value: 1,
    },
    {
      text: "Moteado ou TEC 4 seg ou FC ≥ 20 bpm acima do limite superior para a idade",
      value: 2,
    },
    {
      text: "Acinzentado / cianótico ou TEC ≥ 5 seg ou FC ≥ 30 bpm acima do limite superior para a idade ou bradicardia para a idade",
      value: 3,
    },
  ];
  const neuroOptions = [
    { text: "Ativo", value: 0 },
    { text: "Sonolento/Hipoativo", value: 1 },
    { text: "Irritado", value: 2 },
    { text: "Letárgico/Obnubilado ou resposta reduzida à dor", value: 3 },
  ];
  const respOptions = [
    { text: "FR normal para a idade, sem retração", value: 0 },
    {
      text: "FR acima do limite superior para a idade, uso de musculatura acessória ou FiO2 ≥ 30% ou 4 litros/min de O2",
      value: 1,
    },
    {
      text: "FR ≥ 20 rpm acima do limite superior para a idade, retrações subcostais, intercostais e de fúrcula ou FiO2 ≥ 40% ou 6 litros/min de O2",
      value: 2,
    },
    {
      text: "FR ≥ 5 rpm abaixo do limite inferior para a idade, retrações subcostais, intercostais, de fúrcula, do esterno e gemência ou FiO2 ≥ 50% ou 8 litros/min de O2",
      value: 3,
    },
  ];
  const form = useForm<z.infer<typeof createPatientSchema>>({
    resolver: zodResolver(createPatientSchema),
    defaultValues: {
      name: "",
      diagnosis: "",
      birthDate: "",
      admissionDate: "",
      score: {
        fcm: 0,
        frm: 0,
        avaliacaoNeurologica: 0,
        avaliacaoCardiovascular: 0,
        avaliacaoRespiratoria: 0,
        nebulizacao: false,
        eps_Emese: false,
        final_rating: 0,
        intervention: {
          description: "",
          tempoControleSSVV: "",
        },
      },
    },
  });

  const [scoreValue, setScoreValue] = useState(0);

  const watchField = [
    form.watch("score.avaliacaoCardiovascular"),
    form.watch("score.avaliacaoNeurologica"),
    form.watch("score.avaliacaoRespiratoria"),
    form.watch("score.nebulizacao"),
    form.watch("score.eps_Emese"),
  ];

  useEffect(() => {
    const score = scoreCalculator(form.getValues().score);
    setScoreValue(score);
  }, watchField);

  const onSubmit = async (values: z.infer<typeof createPatientSchema>) => {
    console.log("Form values:", values);
    try {
      const formatDate = (date: string) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      const patientData = {
        ...values,
        birthDate: formatDate(values.birthDate),
        admissionDate: formatDate(new Date().toISOString()),
        final_rating: scoreValue,
      };
      console.log(patientData);
      const patient = await createPatientAPI(patientData);
      console.log("Pacient created:", patient);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const [hasScore, setHasScore] = useState(false);

  return (
    <div className="w-full px-4 flex flex-col space-y-4">
      <Title>Cadastro de Paciente</Title>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Fulano da Silva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="diagnosis"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Diagnóstico</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Cefaleia tensional causada por estresse prolongado"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row gap-4">
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem className="flex flex-col gap">
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl>
                    <DatePicker control={form.control} name="birthDate" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="bed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Leito</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="04"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>
          <div className={`space-y-4 ${hasScore ? "" : "hidden"}`}>
            <Separator />
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="score.fcm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frequência Cardiaca</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="102"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="score.frm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RPM</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="12"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="score.avaliacaoNeurologica"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avaliação Neurológica</FormLabel>
                  <Select
                    onValueChange={(data) => {
                      field.onChange(Number(data));
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {neuroOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value.toString()}
                        >
                          {option.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="score.avaliacaoRespiratoria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avaliação Respiratória</FormLabel>
                  <Select
                    onValueChange={(data) => {
                      field.onChange(Number(data));
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {respOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value.toString()}
                        >
                          {option.text.toString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="score.avaliacaoCardiovascular"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avaliação Cardiovascular</FormLabel>
                  <Select
                    onValueChange={(data) => {
                      field.onChange(Number(data));
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cardioOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value.toString()}
                        >
                          {option.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="score.nebulizacao"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Nebulização de resgate em 15 minutos</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="score.eps_Emese"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2  space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      3 episódios ou mais de emese no pós operatório{" "}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <div className="font-bold text-xl py-2">
              Pontuação: <span className="text-primary">{scoreValue}</span>
            </div>
          </div>
          <div className=" flex flex-row justify-end space-x-4">
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setHasScore(!hasScore)}
            >
              {hasScore ? "- Cancelar" : "+ Adicionar avaliação PEWS"}
            </Button>
            <Button type="submit" onClick={() => onSubmit(form.getValues())}>
              Cadastrar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}