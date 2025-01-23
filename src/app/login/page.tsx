'use client'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function Entrar() {

  const form = useForm()

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-3/5 h-3/4 bg-background rounded-2xl flex justify-between overflow-hidden">
        <div className="w-2/5 h-full bg-primary flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl text-white">Ferramenta</h1>
          <h1 className="font-bold text-4xl text-white">PEWS</h1>
        </div>

        <div className="flex flex-col justify-center items-start p-10 w-3/5 gap-10">
          <h1 className="font-semibold text-2xl">Entrar</h1>
          <div className="w-full">
            <Form {...form}>
              <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Nome </FormLabel>
                  <FormControl>
                    <Input placeholder="Jordana da silva" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Senha </FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                  </FormItem>
                )}
                />
            </Form>
            <div className="flex justify-end items-end w-[100%]">
              <a href="">Esqueceu sua senha?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 