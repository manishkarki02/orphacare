
import { Skeleton } from "@/components/ui/skeleton";

export default function AboutPageSkeleton() {
  return (
    <div className="flex flex-col">
      {/* Hero Skeleton */}
      <div className="py-12 md:py-20 px-6 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col gap-6">
           <Skeleton className="h-12 w-3/4" />
           <Skeleton className="h-6 w-full" />
           <Skeleton className="h-6 w-5/6" />
           <div className="flex gap-4 pt-4">
              <Skeleton className="h-14 w-40 rounded-xl" />
              <Skeleton className="h-14 w-40 rounded-xl" />
           </div>
        </div>
        <div className="aspect-square rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-gray-800">
           <Skeleton className="w-full h-full" />
        </div>
      </div>

      {/* Story Skeleton */}
      <div className="py-20 px-6 max-w-4xl mx-auto flex flex-col gap-8 w-full">
        <div className="flex flex-col items-center gap-4 text-center">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-4 w-full max-w-lg" />
        </div>
        <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
        </div>
      </div>

      {/* Impact/Stats Skeleton */}
      <div className="py-20 bg-gray-50 dark:bg-bg-card w-full">
        <div className="px-6 max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <Skeleton className="h-32 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
