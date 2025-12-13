import { useEffect, useState } from "react";
import ChildCard from "./ChildCard";
import ChildCardSkeleton from "./ChildCardSkeleton";
import { cn } from "@/lib/utils";
import { CHILDREN_DATA } from "@/features/children/data";

const LOCATIONS = ["All", "Gauteng", "Western Cape", "KwaZulu-Natal", "Limpopo"];

export default function ChildrenGrid() {
  const [activeLocation, setActiveLocation] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredChildren =
    activeLocation === "All"
      ? CHILDREN_DATA
      : CHILDREN_DATA.filter((child) => child.location === activeLocation); // Simple strict match for now

  return (
    <section className="py-12 md:py-20 px-6 max-w-[1400px] mx-auto" id="children-grid">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark tracking-tight">
            Waiting for a Family
          </h2>
          <p className="text-text-muted mt-2 text-lg">
            Meet the wonderful children looking for a forever home.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeLocation === loc
                  ? "bg-text-dark text-white shadow-lg scale-105"
                  : "bg-white text-text-muted hover:bg-gray-100 border border-border"
              )}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <ChildCardSkeleton key={i} />
            ))
          : filteredChildren.map((child) => (
              <ChildCard key={child.id} {...child} />
            ))}
      </div>
    </section>
  );
}

