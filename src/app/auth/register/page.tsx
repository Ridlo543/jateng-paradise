"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import RegisterForm from "./form";

export default function RegisterPage() {
  return (
    <>
      <p>Register page</p>
      <div className="max-w-[480px] px-4 mx-auto">
        <RegisterForm />
        <Link href={"/auth/register"}>
          <Button variant={"link"}>Sudah punya akun? Masuk sekarang</Button>
        </Link>
      </div>
    </>
  );
}
