
import { Skeleton } from "@/components/ui/skeleton";

export default function ReportDetailsSkeleton() {
  return (
    <div className="py-8 md:py-12 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Breadcrumb / Back */}
      <Skeleton className="h-6 w-32 mb-8" />

      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-8 mb-8">
        <div className="space-y-4">
          <Skeleton className="h-10 w-64 md:w-96" /> {/* Name */}
          <Skeleton className="h-6 w-48" /> {/* ID */}
        </div>
        <Skeleton className="h-10 w-32 rounded-full" /> {/* Badge */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column: Image & Map */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          {/* Key Stats */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 bg-gray-50 dark:bg-bg-card border border-border rounded-xl">
             <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-32" />
             </div>
             <div className="hidden lg:block w-px bg-border" />
             <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-48" />
             </div>
             <div className="hidden lg:block w-px bg-border" />
             <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-48" />
             </div>
          </div>

          {/* Info Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-7 w-full max-w-[200px]" />
                </div>
              ))}
            </div>

            <div className="space-y-4">
               <Skeleton className="h-6 w-40" />
               <Skeleton className="h-24 w-full" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
            <Skeleton className="h-14 w-full sm:w-1/2 rounded-xl" />
            <Skeleton className="h-14 w-full sm:w-1/2 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
