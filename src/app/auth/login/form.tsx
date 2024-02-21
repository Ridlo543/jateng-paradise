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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function LoginForm() {
  const loginFormScheme = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(1),
  });

  const form = useForm<z.infer<typeof loginFormScheme>>({
    resolver: zodResolver(loginFormScheme),
    defaultValues: {
      email: "rizaldwianggoro@example.com",
      password: "rizal123",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormScheme>) => {};

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
                  <Input placeholder="Insert email address" {...field} />
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
                  <Input placeholder="Insert password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col space-y-2 justify-center">
            <Button type="submit">Login</Button>
            <Link href={"/auth/register"} className="mx-auto">
              <Button variant={"link"}>
                Belum memiliki akun? Daftarkan akun baru sekarang!
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}
