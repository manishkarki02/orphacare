import { validationMiddleware } from "@/common/middlewares/validator.middleware";
import {
  loginRequestSchema,
  registerRequestSchema,
} from "@/features/auth/auth.schema";
import * as authController from "@/features/auth/auth.controller";
import { Router } from "express";
import { catchAsync } from "@/common/utils/error.utils";

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
