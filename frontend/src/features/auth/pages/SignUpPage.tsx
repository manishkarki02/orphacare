import AuthLayout from "../components/AuthLayout";
import { SignUpForm } from "../components/SignUpForm";

export const SignUpPage = () => {
  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Let's get you started on your journey to help others."
      image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop"
      quote="Join Our Community. Help us make a difference in the lives of those who need it most."
      overlayColor="bg-black/30"
    >
      <SignUpForm />
    </AuthLayout>
  );
};
