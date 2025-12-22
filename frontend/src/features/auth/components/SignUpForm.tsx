import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const signUpSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
      .string()
      .regex(/^[0-9]{10,15}$/, { message: "Invalid phone number" }),
    address: z
      .string()
      .max(200, { message: "Address must be at most 200 characters" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpValues = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema as any),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignUpValues) => {
    setIsLoading(true);
    try {
      await api.post("/auth/signup", data);
      toast.success("Account created successfully. Please sign in.");
      navigate({ to: "/sign-in" }); // Using sign-in route instead of signin
    } catch (error: any) {
      console.error(error);
      const message = error.response?.data?.message || "Failed to create account";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-bold text-text-dark">Full Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          disabled={isLoading}
          className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 h-auto focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-bold text-text-dark">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          disabled={isLoading}
          className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 h-auto focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-bold text-text-dark">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          disabled={isLoading}
          className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 h-auto focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-bold text-text-dark">Address</Label>
        <Input
          id="address"
          placeholder="City, Country"
          disabled={isLoading}
          className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 h-auto focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-bold text-text-dark">Password</Label>
        <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              disabled={isLoading}
              className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 h-auto focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 pr-10"
              {...register("password")}
            />
             <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-bold text-text-dark">Confirm Password</Label>
        <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              disabled={isLoading}
              className="w-full bg-white dark:bg-bg-card border border-border rounded-lg px-4 py-3 h-auto focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 pr-10"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button 
        className="w-full bg-[#6366F1] hover:bg-[#5558E3] text-white font-bold py-6 text-lg rounded-xl shadow-lg mt-4" 
        type="submit" 
        disabled={isLoading}
      >
        {isLoading ? "Creating account..." : "Register"}
      </Button>

      <div className="text-center text-text-muted">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-[#6366F1] font-bold hover:underline">
          Sign In
        </Link>
      </div>
    </form>
  );
};
