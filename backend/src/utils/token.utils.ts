import jwt, { JwtPayload } from "jsonwebtoken";
import Environment from "@/config/env.config";
import { AuthenticationError, BadRequestError } from "./errorClass.utils";

type TokenPayload = { userId: string; role: string };

export const createJWTToken = (
  payload: TokenPayload,
  tokenType: "ACCESS_TOKEN" | "REFRESH_TOKEN"
) => {
  const token = jwt.sign(payload, Environment.get(tokenType), {
    expiresIn: Environment.get(`${tokenType}_EXPIRY`),
  });
  return token;
};

// ---------------------------- Validate JWT Token ---------------------------- //
export function validateJWTToken(
  type: "ACCESS_TOKEN" | "REFRESH_TOKEN",
  token: string
): string {
  try {
    const decoded = jwt.verify(token, Environment.get(type)) as JwtPayload;

    const id = (decoded as JwtPayload)?.userId;
    if (typeof id !== "string")
      throw new BadRequestError("Token payload is missing or malformed.");
    return id;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new AuthenticationError(
        `The ${type.replace("_", " ").toLowerCase()} is expired.`
      );
    } else if (err instanceof jwt.JsonWebTokenError) {
      throw new AuthenticationError(`Invalid token. Details: ${err.message}`);
    } else {
      throw new AuthenticationError(
        `${type.replace("_", " ").toLowerCase()} validation failed.`
      );
    }
  }
}
