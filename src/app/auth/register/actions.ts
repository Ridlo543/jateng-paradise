"use server";

import { DetaSource } from "@/lib/sources/deta";
import { Failure } from "@/lib/types/failure";
import { either } from "fp-ts";

type RegisterProps = {
  name: string;
  email: string;
  password: string;
};
const register = async (
  props: RegisterProps
): Promise<either.Either<Failure, boolean>> => {
  try {
    // check email availability
    const queryResponse = await DetaSource.query({
      baseName: "users",
      payload: {
        query: [{ email: props.email }],
        limit: 1,
      },
    });

    if (!queryResponse.ok) {
      throw {
        message: "Something went wrong! Please try again later",
      } as Failure;
    }

    const queryResponseJson = await queryResponse.json();
    const size = queryResponseJson.paging.size as number;

    if (size > 0) {
      throw { message: "Email already registered! Please login" } as Failure;
    }

    // create a new user
    const response = await DetaSource.insert({
      baseName: "users",
      payload: {
        item: {
          ...props,
        },
      },
    });

    if (response.ok) {
      return either.right(true);
    }

    throw {
      message: "Something went wrong! Please try again later",
    } as Failure;
  } catch (e) {
    return either.left(e as Failure);
  }
};

export { register };
