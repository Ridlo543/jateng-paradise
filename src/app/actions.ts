"use server";

import { cookies } from "next/headers";

export const logout = () => {
  cookies().delete("auth-token");
};
