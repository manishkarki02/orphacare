import HttpStatus from "http-status";
import * as authService from "@/services/auth.service";
import ApiResponse from "@/utils/response.utils";
import { ValidatedRequestHandler } from "@/types";
import {
  LoginRequestSchema,
  RegisterRequestSchema,
} from "@/validations/auth.schema";

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

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Login successful.",
    data: responseData,
  });
};
