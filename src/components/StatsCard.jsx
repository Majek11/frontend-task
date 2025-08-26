import { ArrowDown, ArrowUp } from "lucide-react";

export default function StatsCard({ 
  type = "collection", 
  label, 
  amount, 
  color 
}) {
  const isCollection = type === "collection";
  const bg = color || (isCollection ? "bg-slate-800" : "bg-slate-900");

  return (
    <div className={`flex flex-col rounded-2xl ${bg} text-white p-4 flex-1`}>
      <div className="flex items-center gap-2 text-sm opacity-90">
        {isCollection ? (
          <ArrowDown className="h-4 w-4" />
        ) : (
          <ArrowUp className="h-4 w-4" />
        )}
        <span>{label}</span>
      </div>
      <p className="mt-2 text-xl font-semibold">{amount}</p>
    </div>
  );
}
