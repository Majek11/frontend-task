import { useState } from "react";
import { Repeat, ChevronDown } from "lucide-react";

export default function SwapRatesBar({ fromOptions, toOptions, rate }) {
  const [fromCurrency, setFromCurrency] = useState(fromOptions[0]);
  const [toCurrency, setToCurrency] = useState(toOptions[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center justify-between w-full">
      {/* Left */}
      <div className="flex items-center gap-2">
        <Repeat className="w-5 h-5" />
        <span className="font-medium">Swap Rates</span>
      </div>

      {/* Middle Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg text-sm"
        >
          <img src={fromCurrency.icon} alt={fromCurrency.code} className="w-4 h-4" />
          {fromCurrency.code}
          <span className="mx-1">→</span>
          <img src={toCurrency.icon} alt={toCurrency.code} className="w-4 h-4" />
          {toCurrency.code}
          <ChevronDown className="w-4 h-4" />
        </button>

        {open && (
          <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-xl p-4 w-56">
            <div className="mb-2">
              <label className="text-xs font-medium">From</label>
              <select
                value={fromCurrency.code}
                onChange={(e) =>
                  setFromCurrency(
                    fromOptions.find((opt) => opt.code === e.target.value)
                  )
                }
                className="w-full border rounded-lg px-2 py-1 mt-1"
              >
                {fromOptions.map((opt) => (
                  <option key={opt.code} value={opt.code}>
                    {opt.code}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium">To</label>
              <select
                value={toCurrency.code}
                onChange={(e) =>
                  setToCurrency(
                    toOptions.find((opt) => opt.code === e.target.value)
                  )
                }
                className="w-full border rounded-lg px-2 py-1 mt-1"
              >
                {toOptions.map((opt) => (
                  <option key={opt.code} value={opt.code}>
                    {opt.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Right */}
      <div className="text-sm font-medium">1 {fromCurrency.code} = {rate}</div>
    </div>
  );
}
