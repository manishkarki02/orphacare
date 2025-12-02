import { Caste, Gender, Province } from "@/generated/prisma/enums";
import z from "zod/v4";

const nameSchema = (type: string) =>
  z.string().trim().nonempty(`${type} is required`);

const genderSchema = z.enum(Object.values(Gender));

const casteSchema = z.enum(Object.values(Caste));

// Adoption Request Schema
export const createAdoptionRequestSchema = z.object({
  body: z.object({
    name: nameSchema("Name"),
    surName: nameSchema("Surname"),
    age: z
      .number()
      .min(0, "Age must be a non-negative number")
      .max(14, "Age must be less than or equal to 14"),
    caste: casteSchema,
    gender: genderSchema,
    province: z.enum(Object.values(Province)),
    description: z
      .string()
      .trim()
      .max(500, "Description must be at most 500 characters long"),
  }),
});

export const adoptionRequestIdSchema = z.object({
  params: z.object({
    id: z.uuid("Invalid adoption request ID"),
  }),
});

export const fetchAdoptionRequestsSchema = z.object({
  query: z.object({
    caste: z.enum(Object.values(Caste)).optional(),
    minAge: z.coerce.number().int().nonnegative().optional(),
    maxAge: z.coerce.number().int().nonnegative().optional(),
    gender: genderSchema.optional(),
  }),
});

export const updateAdoptionRequestSchema = z.object({
  params: adoptionRequestIdSchema.shape.params,
  body: createAdoptionRequestSchema.shape.body.partial(),
});

// Type Exports
export type CreateAdoptionRequestSchema = z.infer<
  typeof createAdoptionRequestSchema
>;
export type FetchAdoptionRequestsSchema = z.infer<
  typeof fetchAdoptionRequestsSchema
>;
export type AdoptionRequestIdSchema = z.infer<typeof adoptionRequestIdSchema>;
export type UpdateAdoptionRequestSchema = z.infer<
  typeof updateAdoptionRequestSchema
>;
