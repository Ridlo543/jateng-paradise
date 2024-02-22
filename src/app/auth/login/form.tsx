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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { either } from "fp-ts";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "./actions";

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const result = await login({
      email: values.email,
      password: values.password,
    }).finally(() => setIsLoading(false));

    if (either.isLeft(result)) {
      toast({
        title: "Error!",
        description: result.left.message,
      });
    } else {
      router.replace("/dashboard");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            disabled={isLoading}
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
            disabled={isLoading}
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
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
