import { validationMiddleware } from "@/middlewares/validator.middleware";
import { catchAsync } from "@/utils/error.utils";
import {
  loginRequestSchema,
  registerRequestSchema,
} from "@/validations/auth.schema";
import * as authController from "@/controllers/auth.controller";
import { Router } from "express";

const router = Router();

router.post(
  "/signup",
  validationMiddleware(registerRequestSchema),
  catchAsync(authController.signUpUser)
);

router.post(
  "/signin",
  validationMiddleware(loginRequestSchema),
  catchAsync(authController.loginUser)
);

export default router;
