import NavigationBar from "@/common/components/NavigationBar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <main className="content-grid bg-bg-light dark:bg-bg-dark">
      <NavigationBar />
      <Outlet />
    </main>
  );
}

export default RootLayout;
