"use client";

import { Button } from "@/components/ui/button";
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
import { newUserSchema } from "@/lib/schemas/newUserSchema";
import { userSchema } from "@/lib/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function Entrar() {
  const form = useForm<Zod.infer<typeof newUserSchema>>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      username: "",
    },
  });


  const onSubmit = (values: Zod.infer<typeof newUserSchema>) => {
    console.log(values);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-3/5 h-3/4 bg-background rounded-2xl flex justify-between overflow-hidden">
        <div className="w-2/5 h-full bg-primary flex flex-col items-center py-40">
          <div className="">
            <h1 className="font-bold text-4xl text-white px-20 text-center">
              Ferramenta PEWS
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start p-10 w-3/5 gap-10">
          <h1 className="font-semibold text-4xl text-primary w-full text-center">
            Criar Conta
          </h1>
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Nome </FormLabel>
                      <FormControl>
                        <Input placeholder="Jordana da silva" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Email </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jordanadasilva@gmail.com"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> cpf </FormLabel>
                      <FormControl>
                        <Input placeholder="***.***.***-**" {...field} />
                      </FormControl>
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
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Confirmar Senha </FormLabel>
                      <FormControl>
                        <Input placeholder="********" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <div className="flex flex-row justify-end items-center">
                  <Button type="submit"> Criar conta</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
