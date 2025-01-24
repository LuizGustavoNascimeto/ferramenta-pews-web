"use client";
import { createPatient } from "@/api/patient";
import { Button } from "@/components/ui/button";
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
import { useSidebar } from "@/components/ui/sidebar";
import Title from "@/components/ui/title";
import { patientSchema } from "@/lib/schemas/patientSchema";
import { patientReq } from "@/lib/types/patient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function page() {
  const form = useForm<patientReq>({
    resolver: zodResolver(patientSchema),
  });
  function onSubmit(values: patientReq) {
    createPatient(values);
  }


  return (
    <div className="w-full px-4 flex flex-col space-y-4">
      <Title>Cadastro de Paciente</Title>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          <div className=" flex flex-row justify-end space-x-4">
            <Button variant={"outline"} type="button">
              + Adicionar avaliação PEWS
            </Button>
            <Button type="submit">Cadastrar</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
