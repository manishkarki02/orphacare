import HttpStatus from "http-status";
import * as authService from "@/services/auth.service";
import ApiResponse from "@/utils/response.utils";
import { ValidatedRequestHandler } from "@/types";
import {
  LoginRequestSchema,
  RegisterRequestSchema,
} from "@/validations/auth.schema";

const bcrypt = require("bcrypt");
const {
  createNewAccessToken,
  createNewRefreshToken,
} = require("../services/jwt_handler.js");
const { CustomError } = require("../middleware/error_handler.js");
const { Roles } = require("../constants/enums.js");

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

// //admin
// const user = await prisma.user.create({
//   data: {
//     name: "Sheela Pokhrel",
//     address: "Kathmandu, Nepal",
//     emailAddress: "angila.pokhrel58@gmail.com",
//     phoneNumber: "9842149651",
//     password: "admin123",
//     role: Roles.admin,
//   },
// });
