
import { Skeleton } from "@/components/ui/skeleton";

export default function ChildDetailsSkeleton() {
  return (
    <div className="py-8 md:py-12 px-6 max-w-[1200px] mx-auto min-h-screen">
      <Skeleton className="h-6 w-32 mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-800">
           <Skeleton className="w-full h-full rounded-none" />
        </div>

        <div className="flex flex-col gap-8">
           <div className="space-y-4">
              <Skeleton className="h-12 w-64" /> {/* Name */}
              <Skeleton className="h-6 w-24" /> {/* ID */}
           </div>

           <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                 <Skeleton className="h-5 w-24" />
                 <Skeleton className="h-6 w-16" />
              </div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                 <Skeleton className="h-5 w-24" />
                 <Skeleton className="h-6 w-16" />
              </div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                 <Skeleton className="h-5 w-24" />
                 <Skeleton className="h-6 w-16" />
              </div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                 <Skeleton className="h-5 w-24" />
                 <Skeleton className="h-6 w-32" />
              </div>
           </div>
           
           <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-32 w-full" />
           </div>
           
           <Skeleton className="h-14 w-full rounded-xl mt-4" />
        </div>
      </div>
    </div>
  );
}
