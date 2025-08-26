import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

export default function ChartPanel({ title, data, options }) {
  return (
    <div className="bg-white rounded-2xl p-6 w-full shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none">
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} barCategoryGap={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="collection" fill="#1d4ed8" radius={[6, 6, 0, 0]} />
            <Bar dataKey="payout" fill="#0f172a" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
