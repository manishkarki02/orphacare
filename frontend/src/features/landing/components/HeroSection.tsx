
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-[20px] bg-[#a08f85] min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center px-6 py-12 md:py-20 isolate">
      {/* Background Image Placeholder or actual image */}
       <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
             backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop")'
        }}
       />
       {/* Overlay if needed for contrast, handled by gradient above */}

      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-md text-balance">
          Welcome to OrphaCare: Building Families, Changing Lives.
        </h2>
        <p className="text-base md:text-xl text-white/90 max-w-2xl font-medium drop-shadow-sm text-balance">
          Our mission is to connect loving families with children in need of a forever home. Together, we can create brighter futures.
        </p>
        <Button className="bg-[#6366F1] hover:bg-[#5558E3] text-white px-8 py-6 text-lg rounded-xl font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95">
          Learn More
        </Button>
      </div>
    </section>
  );
}
