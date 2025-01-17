"use client";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Title from "@/components/ui/title";
import { pacienteSchema } from "@/lib/schemas/pacienteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function page() {
  const form = useForm<z.infer<typeof pacienteSchema>>({
    resolver: zodResolver(pacienteSchema),
  });
  function onSubmit(values: z.infer<typeof pacienteSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const FormRow = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex space-x-4 items-center">{children}</div>;
  };
  return (
    <div className="w-full py-[60px] px-4 flex flex-col space-y-4">
      <Title>Cadastro de Paciente</Title>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nome"
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
            name="diagnostico"
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
          <FormRow>
            <FormField
              control={form.control}
              name="dataNascimento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl>
                    <DatePicker />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idh"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IDH</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="leito"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leito</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormRow>
          <div className=" flex flex-row justify-end space-x-4">
            <Button variant={"outline"}>+ Adicionar avaliação PEWS</Button>
            <Button type="submit">Cadastrar</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
