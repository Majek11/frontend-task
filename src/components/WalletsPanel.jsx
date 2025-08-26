export default function WalletsPanel({ wallets, stats }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col justify-center">
      {/* Wallets */}
      <div className="space-y-12">
        {wallets.map((wallet) => (
          <div key={wallet.label} className="pb-12 border-b last:border-none">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <img src={wallet.icon} alt={wallet.label} className="w-5 h-5 rounded-full" />
              <span>{wallet.label}</span>
            </div>
            <p className="text-2xl font-semibold mt-2">{wallet.amount}</p>
          </div>
        ))}
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-1 mt-6 h-full w-full">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col rounded-2xl ${
              stat.type === "collection" ? "bg-slate-800" : "bg-slate-900"
            } text-white p-4`}
          >
            <div className="flex items-center gap-2 text-sm mt-4 opacity-90">
              {stat.icon}
              <span>{stat.label}</span>
            </div>
            <p className="mt-8 font-semibold">{stat.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
