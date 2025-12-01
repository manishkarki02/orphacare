import { Request, Response, NextFunction } from "express";
import { AuthenticationError } from "@/utils/errorClass.utils";
import * as tokenUtils from "@/utils/token.utils";

function tokenValidator(tokenType: "ACCESS_TOKEN" | "REFRESH_TOKEN") {
  return async (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers["authorization"];
    if (!bearerToken || !bearerToken.trim()) {
      throw new AuthenticationError(
        `${tokenType.replace("_", " ").toLowerCase()} is required`
      );
    }
    const accessToken = bearerToken.split(" ")[1];

    const userData = await tokenUtils.validateJWTToken(tokenType, accessToken);
    res.locals.userId = userData.userId;
    res.locals.role = userData.role;
    next();
  };
}

export const accessTokenValidator = tokenValidator("ACCESS_TOKEN");
export const refreshTokenValidator = tokenValidator("REFRESH_TOKEN");
