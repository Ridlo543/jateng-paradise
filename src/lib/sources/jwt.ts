import { JWTPayload, JWTVerifyResult, SignJWT, jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET_KEY as string;
const generateSecretKey = (): Uint8Array => {
  return new TextEncoder().encode(secretKey);
};

type GenerateProps = {
  payload: JWTPayload;
};
const generate = async (props: GenerateProps): Promise<string> => {
  return new SignJWT(props.payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime("1h")
    .sign(generateSecretKey());
};

type VerifyProps = {
  payload: string;
};
const verify = (props: VerifyProps): Promise<JWTVerifyResult> => {
  return jwtVerify(props.payload, generateSecretKey());
};

export const JWTSource = { generate, verify };
