import AuthLayout from "../components/AuthLayout";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";

export const ForgotPasswordPage = () => {
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to receive a reset link."
      image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2670&auto=format&fit=crop" // Reuse login image
      quote="Recovery is a process. It takes time. It takes patience. It takes everything you've got."
      overlayColor="bg-[#6366F1]/60 mix-blend-multiply"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};
