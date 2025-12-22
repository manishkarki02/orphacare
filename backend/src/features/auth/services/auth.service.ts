import prisma from "@/db";
import {
  AuthenticationError,
  BadRequestError,
  InternalServerError,
} from "@/common/utils/errorClass.utils";
import {
  LoginRequestSchema,
  RegisterRequestSchema,
} from "@/features/auth/auth.schema";
import * as authUtils from "@/features/auth/utils/auth.utils";
import { setCachedToken } from "./tokenCache.service";
import { setCacheUser } from "./userCache.service";
import { Role } from "@/common/types/enums";

export const signUpUser = async (body: RegisterRequestSchema["body"]) => {
  const { name, address, email, phone, password } = body;

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  });

  if (existingUser) {
    throw new BadRequestError("Email or phone number already exists");
  }

  const hashedPassword = await authUtils.generatePasswordHash(password);

  const user = await prisma.user.create({
    data: {
      name,
      address,
      email,
      phone,
      password: hashedPassword,
      role: Role.USER,
    },
  });
  if (!user) {
    throw new InternalServerError("Failed to create user");
  }

  return user;
};

export const signInUser = async (body: LoginRequestSchema["body"]) => {
  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new AuthenticationError("Invalid email address or password");
  }

  if (!(await authUtils.comparePasswordHash(password, user.password))) {
    throw new AuthenticationError("Invalid email address or password");
  }

  // Create JWT token
  const accessToken = authUtils.createJWTToken({
    userId: user.id,
    role: user.role,
  });
  const refreshToken = authUtils.generateRandomToken();

  await setCachedToken("refresh-token", { token: refreshToken });
  await setCacheUser({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    address: user.address,
    role: user.role,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};
