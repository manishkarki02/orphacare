import AuthLayout from "@/features/auth/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/(auth)/sign-in")({
  component: SignInPage,
});

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      title="Sign In to OrphaCare"
      subtitle="Welcome back! Please enter your details."
      image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2670&auto=format&fit=crop" // Hands holding or similar
      quote="Connecting Hearts, Building Futures."
      overlayColor="bg-[#6366F1]/60 mix-blend-multiply" // Approximate purple overlay
    >
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-text-dark">
            Email or Username
          </label>
          <input
            type="text"
            placeholder="Enter your email or username"
            className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
          />
        </div>

        <div className="space-y-2">
           <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-text-dark">
                Password
              </label>
              <Link to="/sign-in" className="text-sm font-medium text-[#6366F1] hover:underline">
                Forgot Password?
              </Link>
           </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <Button className="w-full bg-[#6366F1] hover:bg-[#5558E3] text-white font-bold py-6 text-lg rounded-xl shadow-lg">
          Sign In
        </Button>
        
        <p className="text-center text-text-muted">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-[#6366F1] font-bold hover:underline">
                Register
            </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
