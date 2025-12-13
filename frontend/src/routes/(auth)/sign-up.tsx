import AuthLayout from "@/features/auth/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/(auth)/sign-up")({
  component: SignUpPage,
});

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Let's get you started on your journey to help others."
      image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop" // Boxes/Volunteers
      quote="Join Our Community\nHelp us make a difference in the lives of those who need it most."
      overlayColor="bg-black/30" // Lighter overlay for this image
    >
      <form className="space-y-4 w-full">
        <div className="space-y-2">
          <label className="text-sm font-bold text-text-dark">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-text-dark">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-text-dark">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="(123) 456-7890"
            className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-text-dark">
            Password
          </label>
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

        <div className="space-y-2">
          <label className="text-sm font-bold text-text-dark">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <Button className="w-full bg-[#6366F1] hover:bg-[#5558E3] text-white font-bold py-6 text-lg rounded-xl shadow-lg mt-4">
          Register
        </Button>
        
        <p className="text-center text-text-muted">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-[#6366F1] font-bold hover:underline">
                Sign In
            </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
