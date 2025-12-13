
import { Skeleton } from "@/components/ui/skeleton";

export default function ChildCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 group">
      {/* Image Skeleton */}
      <div className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Text Content Skeleton */}
      <div className="flex flex-col px-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24" /> {/* Name */}
          <div className="flex gap-1.5">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="size-3 rounded-full" />
          </div>
        </div>
        <Skeleton className="h-4 w-32 mt-2" /> {/* Age/Loc */}
        <Skeleton className="h-4 w-20 mt-1" /> {/* Link */}
      </div>
    </div>
  );
}
