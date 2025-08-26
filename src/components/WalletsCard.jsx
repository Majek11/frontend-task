import { Wallet } from "lucide-react";

export default function WalletsCard({ wallets }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
      {wallets.map((wallet, idx) => (
        <div key={idx}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {wallet.flag ? (
                <img
                  src={wallet.flag}
                  alt={wallet.name}
                  className="w-6 h-4 rounded"
                />
              ) : (
                <Wallet className="w-5 h-5 text-green-500" />
              )}
              <span className="font-medium">{wallet.name}</span>
            </div>
            <span className="text-lg font-semibold">{wallet.balance}</span>
          </div>
          {idx < wallets.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
