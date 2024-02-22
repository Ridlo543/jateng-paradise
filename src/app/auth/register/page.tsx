"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import RegisterForm from "./form";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[480px] w-full mx-auto px-4 py-8 bg-white shadow-lg border rounded-lg">
        <p className="text-3xl font-semibold text-center">Register</p>
        <div className="mt-8">
          <RegisterForm />
          <Link href={"/auth/login"}>
            <Button variant={"link"}>Sudah punya akun? Masuk sekarang</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
