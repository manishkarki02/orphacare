import prisma from "@/db";
import {
  AuthenticationError,
  BadRequestError,
  InternalServerError,
} from "@/utils/errorClass.utils";
import {
  LoginRequestSchema,
  RegisterRequestSchema,
} from "@/validations/auth.schema";
import { comparePasswordHash, generatePasswordHash } from "@/utils/hash.utils";
import { createJWTToken } from "@/utils/token.utils";
import { Role } from "@/generated/prisma/enums";

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

  const hashedPassword = await generatePasswordHash(password);

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

  if (!(await comparePasswordHash(password, user.password))) {
    throw new AuthenticationError("Invalid email address or password");
  }

  // Create JWT token
  const accessToken = createJWTToken(
    { userId: user.id, role: user.role },
    "ACCESS_TOKEN"
  );
  const refreshToken = createJWTToken(
    { userId: user.id, role: user.role },
    "REFRESH_TOKEN"
  );

  // Return token
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};
