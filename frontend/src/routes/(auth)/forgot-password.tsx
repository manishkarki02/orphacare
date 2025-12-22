import { ForgotPasswordPage } from "@/features/auth/pages/ForgotPasswordPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/forgot-password")({
  component: ForgotPasswordPage,
});
