import { useEffect } from "react";
import useThemeStore from "./hooks/useThemeStore";

export function App() {
  const init = useThemeStore((state) => state.init);
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="w-full h-screen">
      <div className="bg-green-200 h-[100px] full-width"></div>
      <div className="bg-pink-400 h-[100px]"></div>
      <div className="bg-neutral-500 h-[100px]"></div>
    </div>
  );
}
