import { JWTPayload } from "jose";
import { cookies } from "next/headers";
import { JWTSource } from "../sources/jwt";

const authTokenKey = "auth-token";

const readSession = async (): Promise<JWTPayload | undefined> => {
  const authToken = cookies().get(authTokenKey)?.value;
  if (authToken) {
    try {
      const verifyResult = await JWTSource.verify({ payload: authToken });
      return verifyResult.payload;
    } catch (e) {
      return undefined;
    }
  }
};

const deleteSession = () => {
  cookies().delete(authTokenKey);
};

export const AuthRepository = {
  readSession,
  deleteSession,
};
