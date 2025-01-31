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
import Title from "@/components/ui/title";
import { patientSchema } from "@/lib/schemas/patientSchema";
import scoreSchema from "@/lib/schemas/scoreSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function CadastrarPaciente() {
  const cardioOptions = [
    "Corado ou TEC 1-2 seg",
    "Pálido ou TEC 3 seg ou FC acima do limite superior para a idade",
    "Moteado ou TEC 4 seg ou FC ≥ 20 bpm acima do limite superior para a idade",
    "Acinzentado / cianótico ou TEC ≥ 5 seg ou FC ≥ 30 bpm acima do limite superior para a idade ou bradicardia para a idade",
  ];
  const neuroOptions = [
    "Ativo",
    "Sonolento/Hipoativo",
    "Irritado",
    "Letárgico/Obnubilado ou resposta reduzida à dor",
  ];
  const respOptions = [
    "FR normal para a idade, sem retração",
    "FR acima do limite superior para a idade, uso de musculatura acessória ou FiO2 ≥ 30% ou 4 litros/min de O2",
    "FR ≥ 20 rpm acima do limite superior para a idade, retrações subcostais, intercostais e de fúrcula ou FiO2 ≥ 40% ou 6 litros/min de O2",
    "FR ≥ 5 rpm abaixo do limite inferior para a idade, retrações subcostais, intercostais, de fúrcula, do esterno e gemência ou FiO2 ≥ 50% ou 8 litros/min de O2",
  ];
  const combinedSchema = z.intersection(patientSchema, scoreSchema);
  const form = useForm<z.infer<typeof combinedSchema>>({
    resolver: zodResolver(combinedSchema),
  });

  const onSubmit = (data: z.infer<typeof combinedSchema>) => {
    console.log("VALUES");
    console.log(data);

    // createPatient(data);
    // if (hasScore) {
    //   createScore(data);
    // }
  };
  const [hasScore, setHasScore] = useState(true);

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
                <FormItem>
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
              name="dih"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DIH</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="5"
                      type="number"
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
              name="bed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leito</FormLabel>
                  <FormControl>
                    <Input placeholder="Enfermaria 102-B" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className={`space-y-4 ${hasScore ? "" : "none"}`}>
            <hr className="opacity-50" />
            <div className="flex flex-row gap-4">
              <FormField
                control={form.control}
                name="estadoConsciencia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estado de Consciência</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="vigila">Vigila</SelectItem>
                        <SelectItem value="sono">Sono</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fc"
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
                name="rpm"
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
              name="avaliacaoNeurologica"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avaliação Neurológica</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {neuroOptions.map((option, index) => (
                        <SelectItem key={index} value={option}>
                          {option}
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
              name="avaliacaoRespiratoria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avaliação Respiratória</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {respOptions.map((option, index) => (
                        <SelectItem key={index} value={option}>
                          {option}
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
              name="avaliacaoCardioVascular"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avaliação Cardiovascular</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cardioOptions.map((option, index) => (
                        <SelectItem key={index} value={option}>
                          {option}
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
                name="nebulizacao"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Nebulização de resgate em 15 minutos
                    </FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emese"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2  space-y-0 5 5 5 5">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      3 episódios ou mais de emese no pós operatório{" "}
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className=" flex flex-row justify-end space-x-4">
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setHasScore(!hasScore)}
            >
              {hasScore
                ? "- Remover avaliação PEWS"
                : "+ Adicionar avaliação PEWS"}
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
