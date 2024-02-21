"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { either } from "fp-ts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "./actions";

export default function LoginForm() {
  const loginFormScheme = z.object({
    email: z.string().toLowerCase().min(1),
    password: z.string().toLowerCase().min(1),
  });

  const form = useForm<z.infer<typeof loginFormScheme>>({
    resolver: zodResolver(loginFormScheme),
    defaultValues: {
      email: "rizaldwianggoro@email.com",
      password: "rizal123",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormScheme>) {
    const result = await login({
      email: values.email,
      password: values.password,
    });

    if (either.isLeft(result)) console.log(result.left.message);
    else console.log("success login");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
