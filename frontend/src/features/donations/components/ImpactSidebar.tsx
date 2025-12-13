
import { CheckCircle2, FileCheck, HeartHandshake, ShieldCheck } from "lucide-react";

export default function ImpactSidebar() {
  return (
    <div className="border border-dashed border-border rounded-[20px] p-8 md:p-12 flex flex-col items-center justify-center text-center h-full bg-white/50 dark:bg-bg-card/50">
      <div className="bg-[#6366F1]/10 rounded-full p-6 mb-6 text-[#6366F1]">
        <HeartHandshake size={48} />
      </div>

      <h3 className="text-xl font-bold text-text-dark mb-4">Your Impact</h3>
      
      <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-12">
        Your $50 donation can provide a week of nutritious meals for a child, giving them the foundation for a healthy life.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div className="flex items-center gap-3 text-xs font-medium text-text-muted">
            <ShieldCheck className="text-green-500 size-4 shrink-0" />
            <span>Secure Payments</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-medium text-text-muted">
            <CheckCircle2 className="text-green-500 size-4 shrink-0" />
            <span>Registered Charity</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-medium text-text-muted">
            <FileCheck className="text-green-500 size-4 shrink-0" />
            <span>Tax Deductible</span>
        </div>
      </div>
    </div>
  );
}
