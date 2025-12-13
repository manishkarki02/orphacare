
import { Calendar, Heart, Smile, Utensils } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    {
      icon: Smile,
      value: "600+",
      label: "Children Supported",
    },
    {
      icon: Calendar,
      value: "15",
      label: "Years of Service",
    },
    {
      icon: Heart,
      value: "250+",
      label: "Active Volunteers",
    },
    {
      icon: Utensils,
      value: "1.2M+",
      label: "Meals Provided",
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          We measure our success by the lives we change. Here's a glimpse of the impact we've made together with our community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-bg-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-shadow"
          >
            <stat.icon className="size-10 text-[#6366F1]" />
            <div>
              <div className="text-4xl font-bold text-text-dark mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-text-muted uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
