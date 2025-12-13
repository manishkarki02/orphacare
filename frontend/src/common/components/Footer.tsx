
import LogoIcon from "@/components/icons/LogoIcon";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-8 md:py-12 md:mt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-muted">
      <div className="flex items-center gap-2 font-bold text-text-dark order-2 md:order-1">
        <LogoIcon className="size-5 text-brand" />
        <span>Orphacare</span>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 order-1 md:order-2">
        <Link to="/privacy" className="hover:text-brand hover:underline">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:text-brand hover:underline">
          Terms of Service
        </Link>
        <Link to="/contact" className="hover:text-brand hover:underline">
          Contact Us
        </Link>
      </div>

      <div className="text-center md:text-right order-3">
        &copy; {currentYear} OrphaCare. All rights reserved.
      </div>
    </footer>
  );
}
