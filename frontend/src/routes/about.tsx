import AboutHero from "@/features/about/components/AboutHero";
import AboutPageSkeleton from "@/features/about/components/AboutPageSkeleton";
import ImpactSection from "@/features/about/components/ImpactSection";
import JoinUsCTA from "@/features/about/components/JoinUsCTA";
import OurStory from "@/features/about/components/OurStory";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AboutPageSkeleton />;
  }

  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurStory />
      <ImpactSection />
      <JoinUsCTA />
    </div>
  );
}
