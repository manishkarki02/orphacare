import z from "zod/v4";

// Field Schema
export const emailSchema = z
  .email("Invalid email address")
  .trim()
  .nonempty("Email is required");

const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name must be at most 50 characters")
  .trim();
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(100, "Password must be at most 100 characters");

const phoneSchema = z.string().regex(/^[0-9]{10,15}$/, "Invalid phone number");
const addressSchema = z
  .string()
  .max(200, "Address must be at most 200 characters");

// Request Schemas
export const registerRequestSchema = z.object({
  body: z
    .object(
      {
        name: nameSchema,
        email: emailSchema,
        password: passwordSchema,
        phone: phoneSchema,
        confirmPassword: z.string().min(1, "Confirm Password must be provided"),
        address: addressSchema,
      },
      "Request Body is required"
    )
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password and Confirm Password do not match",
      path: ["confirmPassword"],
    }),
});

export const verificationRequestSchema = z.object({
  body: z.object({
    email: emailSchema,
    token: z.string(),
  })
})

export const loginRequestSchema = z.object({
  body: z.object(
    {
      email: emailSchema,
      password: passwordSchema,
    },
    "Request Body is required"
  ),
});

export type RegisterRequestSchema = z.infer<typeof registerRequestSchema>;
export type VerificationRequestSchema = z.infer<typeof verificationRequestSchema>;
export type LoginRequestSchema = z.infer<typeof loginRequestSchema>;
