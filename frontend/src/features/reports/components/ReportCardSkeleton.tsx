
import { Skeleton } from "@/components/ui/skeleton";

export default function ReportCardSkeleton() {
  return (
    <div className="bg-white dark:bg-bg-card rounded-[20px] overflow-hidden shadow-sm border border-border flex flex-col h-full">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 relative">
        <Skeleton className="w-full h-full rounded-none" />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-4">
        {/* Title/Header */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <Skeleton className="h-6 w-32" /> {/* Name */}
            <Skeleton className="h-4 w-20" /> {/* Age/Gender */}
          </div>
          <Skeleton className="h-6 w-16 rounded-full" /> {/* Badge */}
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Skeleton className="size-4 rounded-full" />
            <Skeleton className="h-4 w-full max-w-[150px]" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="size-4 rounded-full" />
            <Skeleton className="h-4 w-full max-w-[120px]" />
          </div>
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-xl mt-auto" />
      </div>
    </div>
  );
}
