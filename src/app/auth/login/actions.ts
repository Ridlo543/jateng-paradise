"use server";

import { DetaSource } from "@/lib/sources/deta";
import { JWTSource } from "@/lib/sources/jwt";
import { Failure } from "@/lib/types/failure";
import { compare } from "bcrypt";
import { either } from "fp-ts";
import { cookies } from "next/headers";

type LoginProps = {
  email: string;
  password: string;
};
const login = async (
  props: LoginProps
): Promise<either.Either<Failure, boolean>> => {
  try {
    // check email availability
    const queryRes = await DetaSource.query({
      baseName: "users",
      payload: {
        query: [{ email: props.email }],
        limit: 1,
      },
    });
    if (!queryRes.ok)
      throw { message: "Email not found! Please register first" } as Failure;

    // password validation
    const queryResJson = await queryRes.json();
    const items = queryResJson.items as Array<any>;
    if (items.length == 0)
      throw { message: "Email not found! Please register first" } as Failure;

    const userData = items.at(0);
    if (!(await compare(props.password, userData.password)))
      throw { message: "Incorrect password! Please try again" } as Failure;

    // generate jwt
    const generatedJWT = await JWTSource.generate({
      payload: { ...userData, password: null },
    });

    // save session
    cookies().set("auth-token", generatedJWT);

    return either.right(true);
  } catch (e) {
    return either.left(e as Failure);
  }
};

export { login };
