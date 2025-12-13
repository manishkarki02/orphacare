
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { useState } from "react";

const AMOUNTS = [25, 50, 100, "Custom"];

export default function DonationForm() {
  const [activeTab, setActiveTab] = useState<"money" | "goods">("money");
  const [selectedAmount, setSelectedAmount] = useState<number | string>(50);

  return (
    <div className="bg-white dark:bg-bg-card rounded-[20px] shadow-sm border border-border overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab("money")}
          className={cn(
            "flex-1 py-4 text-sm font-bold text-center transition-colors border-b-2",
            activeTab === "money"
              ? "border-[#6366F1] text-[#6366F1]"
              : "border-transparent text-text-muted hover:text-text-dark"
          )}
        >
          Donate Money
        </button>
        <button
          onClick={() => setActiveTab("goods")}
          className={cn(
            "flex-1 py-4 text-sm font-bold text-center transition-colors border-b-2",
            activeTab === "goods"
              ? "border-[#6366F1] text-[#6366F1]"
              : "border-transparent text-text-muted hover:text-text-dark"
          )}
        >
          Donate Goods
        </button>
      </div>

      <div className="p-6 md:p-8 flex flex-col gap-8">
        {activeTab === "money" ? (
          <>
            {/* Amount Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text-dark">
                Choose an amount
              </label>
              <p className="text-sm text-text-muted mb-2">
                Choose a preset amount or enter a custom one. Every donation helps.
              </p>
              <div className="grid grid-cols-4 gap-2">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={cn(
                      "py-3 rounded-lg text-sm font-bold transition-all border",
                      selectedAmount === amount
                        ? "bg-white border-[#6366F1] text-[#6366F1] shadow-sm"
                        : "bg-gray-50 dark:bg-gray-800 border-transparent text-text-muted hover:bg-gray-100 dark:hover:bg-gray-700"
                    )}
                  >
                    {typeof amount === "number" ? `$${amount}` : amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-dark">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full bg-white dark:bg-gray-900 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-shadow"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane.doe@example.com"
                  className="w-full bg-white dark:bg-gray-900 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-shadow"
                />
              </div>
            </div>

            {/* Payment Placeholder */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text-dark">
                Payment Details
              </label>
              <div className="bg-gray-50 dark:bg-gray-800 border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center gap-2">
                <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="flex items-center gap-2 text-xs text-text-muted mt-2">
                  <Lock size={12} />
                  <span>Secure payment powered by Stripe</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#6366F1] hover:bg-[#5558E3] text-white font-bold py-6 text-lg rounded-xl shadow-lg mt-2">
              Donate Securely
            </Button>
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-text-dark mb-2">Donate Goods</h3>
            <p className="text-text-muted">
              We appreciate your interest in donating goods! Please contact us directly to coordinate drop-offs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
