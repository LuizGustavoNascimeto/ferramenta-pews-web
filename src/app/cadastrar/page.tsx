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
import { userSchema } from "@/lib/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { createUser, getAllUsers } from "@/api/users";
import Link from "next/link";

export default function Entrar() {
  const form = useForm<Zod.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "usuario",
      document: "",
      specialty: "",
      username: "",
      password: "",
      role: "HEALTH_STAFFFF",
    },
  });

  const onSubmit = async (values: Zod.infer<typeof userSchema>) => {
    try {
      const user = await createUser(values);
      console.log("User created:", user);
    } catch (error) { 
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-3/5 h-3/4 bg-background rounded-2xl flex justify-between overflow-hidden">
        <div className="w-2/5 h-full bg-primary flex flex-col justify-between items-center py-40">
          <div className="">
            <h1 className="font-bold text-4xl text-white px-20 text-center">
              Ferramenta PEWS
            </h1>
          </div>
          <div className="flex  flex-col text-white gap-1">
            <div className="">Já possui conta?</div>
            <Link href={"/entrar"} className="w-[100%]">
              <Button variant={"outline"} className="border-white w-full">Entrar</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start p-10 w-3/5 gap-10">
          <h1 className="font-semibold text-4xl text-primary w-full text-center">Criar Conta</h1>
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
                  name="document"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Documento </FormLabel>
                      <FormControl>
                        <Input placeholder="***.***.***-**" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="specialty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Especialidade </FormLabel>
                      <FormControl>
                        <Input placeholder="Medico geral" {...field} />
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
