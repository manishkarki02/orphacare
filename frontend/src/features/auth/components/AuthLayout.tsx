
import LogoIcon from "@/components/icons/LogoIcon";
import { Link } from "@tanstack/react-router";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  image: string;
  quote?: string;
  overlayColor?: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  image,
  quote,
  overlayColor = "bg-[#6366F1]/80",
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-bg-body">
      {/* Image Side (Hidden on Mobile/Tablet) */}
      <div className="hidden lg:flex flex-1 relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Authentication background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className={`absolute inset-0 ${overlayColor}`} />
        </div>

        {/* Content over image */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full h-full">
          <div className="flex gap-2 items-center text-lg leading-tight tracking-[-0.015rem] font-bold text-white">
            <LogoIcon className={"size-6 text-white"} />
            <span>Orphacare</span>
          </div>
          
          {quote && (
            <div className="max-w-lg">
                <blockquote className="text-4xl font-bold mb-4 leading-tight">
                    "{quote}"
                </blockquote>
                <p className="text-lg opacity-90">
                    Join us in making a difference, one child at a time.
                </p>
            </div>
          )}
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative">
         {/* Top right actions (Logo link home) */}
         <div className="absolute top-6 right-6 md:top-12 md:right-12">
             {/* Could put theme toggle here if needed */}
         </div>

        <div className="w-full max-w-md space-y-8">
            <div className="flex justify-center mb-8 lg:hidden">
                 <Link to="/" className="flex items-center gap-2">
                    <LogoIcon className="size-8 text-[#6366F1]" />
                    <span className="text-2xl font-bold text-text-dark">OrphaCare</span>
                 </Link>
            </div>

          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-text-dark tracking-tight">
              {title}
            </h1>
            <p className="text-text-muted mt-2">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
