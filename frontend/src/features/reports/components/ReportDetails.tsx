import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Info, MapPin, Share2, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import ReportDetailsSkeleton from "./ReportDetailsSkeleton";

interface ReportDetailsProps {
  id: string;
  childName: string;
  age: number;
  lastSeenLocation: string;
  lastSeenTime: string;
  imageUrl: string;
  status: "Missing" | "Found";
  gender: string;
  hairColor: string;
  eyeColor: string;
  height: string;
  weight: string;
  remarks: string;
  lat: number;
  lng: number;
}

export default function ReportDetails({
  id,
  childName,
  age,
  lastSeenLocation,
  lastSeenTime,
  imageUrl,
  status,
  gender,
  hairColor,
  eyeColor,
  height,
  weight,
  remarks,
}: ReportDetailsProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ReportDetailsSkeleton />;
  }

  return (
    <div className="py-8 md:py-12 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Breadcrumb / Back */}
      <Link
        to="/reports"
        className="inline-flex items-center gap-2 text-text-muted hover:text-brand mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Reports
      </Link>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-8 mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark tracking-tight mb-2">
            {childName}
          </h1>
          <div className="flex items-center gap-3 text-text-muted">
             <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">ID: {id}</span>
             <span className="w-1 h-1 rounded-full bg-text-muted" />
             <span>Reported 2 days ago</span>
          </div>
        </div>
        <div className="px-6 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle size={18} />
            {status}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column: Image & Map */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Main Image */}
          <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-border">
            <img
              src={imageUrl}
              alt={childName}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Map Section */}
          <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl border border-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=800x400&key=YOUR_API_KEY_HERE')] bg-cover grayscale opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                     <div className="bg-red-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                        <MapPin size={24} fill="currentColor" />
                     </div>
                     <span className="bg-white dark:bg-bg-card px-3 py-1 rounded-lg text-xs font-bold shadow-sm mt-2">
                        Last Seen Here
                     </span>
                </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          
          {/* Key Stats Row */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 bg-gray-50 dark:bg-bg-card border border-border rounded-xl">
             <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-bg-body rounded-full text-brand shadow-sm">
                    <Info size={24} />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-brand uppercase tracking-wider mb-1">Estimated Age</h3>
                    <p className="text-base sm:text-lg font-medium text-text-dark">{age} years old</p>
                </div>
             </div>
             
             <div className="hidden lg:block w-px bg-border" />

             <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-bg-body rounded-full text-brand shadow-sm">
                    <Calendar size={24} />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-brand uppercase tracking-wider mb-1">Last Seen Time</h3>
                    <p className="text-base sm:text-lg font-medium text-text-dark">{lastSeenTime}</p>
                </div>
             </div>

             <div className="hidden lg:block w-px bg-border" />

             <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-bg-body rounded-full text-brand shadow-sm">
                    <MapPin size={24} />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-brand uppercase tracking-wider mb-1">Last Seen Location</h3>
                     <p className="text-base sm:text-lg font-medium text-text-dark">{lastSeenLocation}</p>
                </div>
             </div>
          </div>

          {/* Detailed Info Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-text-dark border-b border-border pb-2">Physical Description</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                    <span className="block text-sm font-medium text-text-muted mb-1">Gender</span>
                    <span className="text-lg font-medium text-text-dark">{gender}</span>
                </div>
                <div>
                    <span className="block text-sm font-medium text-text-muted mb-1">Hair Color</span>
                    <span className="text-lg font-medium text-text-dark">{hairColor}</span>
                </div>
                <div>
                    <span className="block text-sm font-medium text-text-muted mb-1">Eye Color</span>
                    <span className="text-lg font-medium text-text-dark">{eyeColor}</span>
                </div>
                <div>
                    <span className="block text-sm font-medium text-text-muted mb-1">Height / Weight</span>
                    <span className="text-lg font-medium text-text-dark">{height} / {weight}</span>
                </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-dark border-b border-border pb-2">Remarks & Additional Info</h3>
            <p className="text-lg text-text-muted leading-relaxed whitespace-pre-line text-balance">
                {remarks}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border mt-8">
            <Button className="flex-1 bg-[#6366F1] hover:bg-[#5558E3] text-white font-bold py-6 px-8 text-lg rounded-xl shadow-lg shadow-indigo-500/20">
                Report a Sighting
            </Button>
            <Button variant="outline" className="flex-1 border-2 border-border text-text-dark hover:bg-gray-50 dark:hover:bg-gray-800 font-bold py-6 px-8 text-lg rounded-xl flex items-center justify-center gap-2">
                <Share2 size={20} />
                Share Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
