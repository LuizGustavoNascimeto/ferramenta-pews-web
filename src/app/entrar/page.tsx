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
import { loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "@/api/users";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Entrar() {
  const router = useRouter();

  const form = useForm<Zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: Zod.infer<typeof loginSchema>) => {
    console.log("values", values);
    try {
      const response = await loginUser(values);
      console.log("Login successful:", response);
      router.push("/painel");
    } catch (error) {
      console.error("Error logging in:", error);
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
          <div className="flex flex-col text-white gap-1">
            <div className="">Não possui conta?</div>
            <Link href={"/registrar"} className="w-[100%]">
              <Button variant={"outline"} className="border-white w-full">Criar conta</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start p-10 w-3/5 gap-10">
          <h1 className="font-semibold text-4xl text-primary w-full text-center">Entrar</h1>
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Senha </FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="********" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex flex-row justify-between items-center">
                  <span className="opacity-70">Esqueceu sua senha</span>
                  <Button type="submit"> Entrar</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}