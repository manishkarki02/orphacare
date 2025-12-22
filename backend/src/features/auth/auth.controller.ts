import HttpStatus from "http-status";
import * as authService from "@/features/auth/services/auth.service";
import ApiResponse from "@/common/utils/response.utils";
import { ValidatedRequestHandler } from "@/common/types";
import {
  LoginRequestSchema,
  RegisterRequestSchema,
} from "@/features/auth/auth.schema";
import { setCookie } from "@/features/auth/utils/auth.utils";
import Environment from "@/config/env.config";

export const signUpUser: ValidatedRequestHandler<
  RegisterRequestSchema
> = async (req, res) => {
  await authService.signUpUser(req.body);

  return ApiResponse.success(res, {
    statusCode: HttpStatus.CREATED,
    message: "User created successfully.",
  });
};

export const loginUser: ValidatedRequestHandler<LoginRequestSchema> = async (
  req,
  res
) => {
  const responseData = await authService.signInUser(req.body);

  setCookie(res, {
    cookieName: "REFRESH_TOKEN",
    path: "/refresh",
    value: responseData.refreshToken,
    expiry: Environment.get("REFRESH_TOKEN_EXPIRY"),
  });

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Login successful.",
    data: responseData,
  });
};
