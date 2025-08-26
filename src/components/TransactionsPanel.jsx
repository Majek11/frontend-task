import React from "react";

export default function TransactionsPanel({ data }) {
  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-sm">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <div className="flex gap-6">
          <button className="font-medium border-b-2 border-black pb-1">Collection</button>
          <button className="text-gray-500">Payout</button>
        </div>
        <button className="text-sm text-gray-600">See All</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.label} className="flex justify-between items-center bg-gray-50 rounded-xl p-4">
            <div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
            <div className="bg-[#D5E1F8] text-gray-900 font-medium rounded-xl px-3 py-1">
              {item.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
