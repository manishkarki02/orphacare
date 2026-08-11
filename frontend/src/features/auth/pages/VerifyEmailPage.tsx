import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import AuthLayout from "../components/AuthLayout";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { AxiosError } from "axios";

export const VerifyEmailPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const hasVerificationDetails = Boolean(token && email);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    hasVerificationDetails ? "loading" : "error",
  );
  const [message, setMessage] = useState(
    hasVerificationDetails
      ? "Verifying your email address..."
      : "Invalid verification link. Missing token or email.",
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !email) {
      return;
    }

    let redirectTimer: ReturnType<typeof setTimeout> | undefined;

    const verify = async () => {
      try {
        await api.post("/auth/verify", { email, token });
        setStatus("success");
        setMessage("Email verified successfully! Redirecting to login...");
        toast.success("Email verified successfully");
        
        // Redirect after a short delay
        redirectTimer = setTimeout(() => {
          navigate({ to: "/sign-in" });
        }, 3000);
      } catch (error: unknown) {
        setStatus("error");
        setMessage(
          error instanceof AxiosError &&
            typeof error.response?.data?.message === "string"
            ? error.response.data.message
            : "Verification failed. Please try again.",
        );
        toast.error("Verification failed");
      }
    };

    void verify();

    return () => {
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, [token, email, navigate]);

  return (
    <AuthLayout
      title="Email Verification"
      subtitle="Verifying your account..."
      image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop"
      quote="Every child deserves a chance. Thank you for joining us."
      overlayColor="bg-black/30"
    >
      <div className="flex flex-col items-center justify-center space-y-6 py-8">
        {status === "loading" && (
          <div className="flex flex-col items-center gap-4">
             <Loader2 className="h-16 w-16 animate-spin text-[#6366F1]" />
             <p className="text-lg text-text-muted">{message}</p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center gap-4 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <h3 className="text-xl font-bold text-text-dark">Verified!</h3>
            <p className="text-text-muted">{message}</p>
            <Button
              className="mt-4 bg-[#6366F1] hover:bg-[#5558E3] text-white"
              onClick={() => navigate({ to: "/sign-in" })}
            >
              Go to Login
            </Button>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center gap-4 text-center">
            <XCircle className="h-16 w-16 text-red-500" />
            <h3 className="text-xl font-bold text-text-dark">Verification Failed</h3>
            <p className="text-text-muted">{message}</p>
            <Button
              className="mt-4"
              variant="outline"
              onClick={() => navigate({ to: "/sign-up" })}
            >
              Back to Sign Up
            </Button>
          </div>
        )}
      </div>
    </AuthLayout>
  );
};
