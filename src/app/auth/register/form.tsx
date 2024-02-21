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
import { register } from "./actions";

export default function RegisterForm() {
  const registerFormScheme = z
    .object({
      name: z.string().min(1),
      email: z.string().toLowerCase().email().min(1),
      password: z.string().toLowerCase().min(1),
      confirmPassword: z.string().toLowerCase().min(1),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Incorrect confirm password",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof registerFormScheme>>({
    resolver: zodResolver(registerFormScheme),
    defaultValues: {
      name: "Rizal Dwi Anggoro",
      email: "rizaldwianggoro@email.com",
      password: "rizal123",
      confirmPassword: "rizal123",
    },
  });

  async function onSubmit(values: z.infer<typeof registerFormScheme>) {
    const result = await register({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (either.isLeft(result)) {
      console.log(result.left.message);
    } else {
      console.log("success");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* confirm password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input {...field} />
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
