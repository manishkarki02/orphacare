import NavigationBar from "@/common/components/NavigationBar";
import Footer from "@/common/components/Footer";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import useThemeStore from "@/hooks/useThemeStore";

import NotFound from "@/common/components/NotFound";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  const init = useThemeStore((state) => state.init);

  useEffect(() => {
    init();
  }, []);

  return (
    <main className="content-grid bg-bg-body font-sans text-text-dark min-h-screen grid-rows-[auto_1fr_auto]">
      <NavigationBar />
      <Outlet />
      <Footer />
    </main>
  );
}
export default RootLayout;
