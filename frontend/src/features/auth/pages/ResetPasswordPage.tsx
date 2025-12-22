import AuthLayout from "../components/AuthLayout";
import { ResetPasswordForm } from "../components/ResetPasswordForm";

export const ResetPasswordPage = () => {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a new strong password for your account."
      image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2670&auto=format&fit=crop" // Reuse login image
      quote="New beginnings are often disguised as painful endings."
      overlayColor="bg-[#6366F1]/60 mix-blend-multiply"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};
