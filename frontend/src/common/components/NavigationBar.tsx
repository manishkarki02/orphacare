import LogoIcon from "@/components/icons/LogoIcon";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";

export default function NavigationBar() {
  const navigate = useNavigate();
  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Reports",
      to: "/reports",
    },
    {
      label: "Volunteers",
      to: "/volunteers",
    },
    {
      label: "Donations",
      to: "/donations",
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  return (
    <header className="my-8 flex items-center">
      <h1 className="flex gap-2 items-center text-lg leading-tight tracking-[-0.015rem] font-bold text-dark">
        <LogoIcon className={"size-6"} />
        <span>Orphacare</span>
      </h1>
      <nav className="ml-auto flex items-center font-medium text-[14px]">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="mr-4 hover:underline underline-offset-10"
            activeProps={{
              className: "underline decoration-2 font-bold text-brand",
            }}
            inactiveProps={{
              className: "text-dark",
            }}
          >
            {link.label}
          </Link>
        ))}
        <Button
          variant={"outline"}
          className="hover:cursor-pointer"
          onClick={() => navigate({ to: "/sign-in" })}
        >
          Sign In / Register
        </Button>
      </nav>
    </header>
  );
}
