
import { Skeleton } from "@/components/ui/skeleton";

export default function VolunteerCardSkeleton() {
  return (
    <div className="bg-white dark:bg-bg-card rounded-[20px] overflow-hidden shadow-sm border border-border flex flex-col items-center">
      <div className="w-full aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
        <Skeleton className="w-full h-full rounded-none" />
      </div>
      <div className="py-6 flex flex-col items-center gap-2 w-full px-6">
        <Skeleton className="h-6 w-32" /> {/* Name */}
        <Skeleton className="h-4 w-16" /> {/* Age */}
      </div>
    </div>
  );
}
