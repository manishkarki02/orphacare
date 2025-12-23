import { VerifyEmailPage } from "@/features/auth/pages/VerifyEmailPage";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const verifySearchSchema = z.object({
  token: z.string().optional(),
  email: z.string().optional(),
});

export const Route = createFileRoute("/verify-email")({
  validateSearch: (search) => verifySearchSchema.parse(search),
  component: VerifyEmailPage,
});
