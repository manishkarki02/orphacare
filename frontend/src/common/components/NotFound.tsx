
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 gap-6">
      <h1 className="text-9xl font-bold text-brand opacity-20">404</h1>
      <div className="space-y-2 -mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
          Page Not Found
        </h2>
        <p className="text-lg text-text-muted text-balance max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link to="/" className="mt-4">
        <Button className="bg-[#6366F1] hover:bg-[#5558E3] text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-transform hover:scale-105">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
