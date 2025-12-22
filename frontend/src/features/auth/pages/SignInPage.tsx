import AuthLayout from "../components/AuthLayout";
import { SignInForm } from "../components/SignInForm";

export const SignInPage = () => {
  return (
    <AuthLayout
      title="Sign In to OrphaCare"
      subtitle="Welcome back! Please enter your details."
      image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2670&auto=format&fit=crop"
      quote="Connecting Hearts, Building Futures."
      overlayColor="bg-[#6366F1]/60 mix-blend-multiply"
    >
      <SignInForm />
    </AuthLayout>
  );
};
