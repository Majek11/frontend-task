import { useState } from "react";
import { Repeat, ChevronDown } from "lucide-react";

const currencies = [
  { code: "NGN", label: "Nigerian Naira", flag: "https://flagcdn.com/w20/ng.png" },
  { code: "USD", label: "US Dollar", flag: "https://flagcdn.com/w20/us.png" },
  { code: "GHS", label: "Ghana Cedi", flag: "https://flagcdn.com/w20/gh.png" },
];

export default function SwapRates() {
  const [from, setFrom] = useState("NGN");
  const [to, setTo] = useState("NGN");

  return (
    <div className="rounded-2xl bg-slate-900 text-white p-4 shadow-md w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Repeat className="h-5 w-5" />
          <span className="font-medium">Swap Rates</span>
        </div>
        <span className="text-sm opacity-80">$1 = NGN 1450.00</span>
      </div>

      {/* Dropdowns */}
      <div className="space-y-3">
        {/* From */}
        <div className="bg-white text-slate-900 rounded-lg p-2 flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <img
              src={currencies.find((c) => c.code === from)?.flag}
              alt={from}
              className="w-5 h-3"
            />
            <span>{from}</span>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </div>

        {/* To */}
        <div className="bg-white text-slate-900 rounded-lg p-2 flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <img
              src={currencies.find((c) => c.code === to)?.flag}
              alt={to}
              className="w-5 h-3"
            />
            <span>{to}</span>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </div>
      </div>
    </div>
  );
}
