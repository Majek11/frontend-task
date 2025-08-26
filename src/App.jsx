import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import WalletsPanel from "./components/WalletsPanel";
import ChartPanel from "./components/ChartPanel";
import SwapRatesBar from "./components/SwapRatesBar";
import TransactionsPanel from "./components/TransactionsPanel";
import { ArrowDown, ArrowUp } from "lucide-react";

function App() {
  const wallets = [
    { label: "Nigeria Wallet", amount: "₦10,050.02", icon: "/naija.png" },
    { label: "USDT Wallet", amount: "$20,000.32", icon: "/usdt.png" },
  ];

  const chartData = [
    { month: "JAN", collection: 50000, payout: 30000 },
    { month: "FEB", collection: 48000, payout: 28000 },
    { month: "MAR", collection: 52000, payout: 31000 },
    { month: "APR", collection: 49000, payout: 29000 },
    { month: "MAY", collection: 51000, payout: 30500 },
    { month: "JUN", collection: 50000, payout: 30000 },
    { month: "JUL", collection: 50500, payout: 29500 },
    { month: "AUG", collection: 49500, payout: 28500 },
    { month: "SEP", collection: 48000, payout: 27000 },
  ];

  const transactionData = [
    { label: "Failed Transactions", value: "₦12,324,943", count: "12,324" },
    { label: "Expired Transactions", value: "₦12,324,943", count: "12,324" },
    { label: "Pending Transactions", value: "₦12,324,943", count: "12,324" },
    { label: "Abandoned Transactions", value: "₦12,324,943", count: "12,324" },
    { label: "Mismatched Transactions", value: "₦12,324,943", count: "12,324" },
    { label: "Claimed Transactions", value: "₦12,324,943", count: "12,324" },
  ];

  const stats = [
    { type: "collection", label: "Collection", amount: "$20,000.32", icon: <ArrowDown className="h-4 w-4" /> },
    { type: "payout", label: "Payout", amount: "$20,000.32", icon: <ArrowUp className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6">
          <div className="grid grid-cols-[16rem,1fr] gap-x-4 gap-y-6">
            <Sidebar />

            <main className="pl-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <WalletsPanel wallets={wallets} stats={stats} />
                </div>

                <div className="lg:col-span-2 flex flex-col gap-4">
                  <SwapRatesBar
                    fromOptions={[
                      { code: "NGN", icon: "https://flagcdn.com/w20/ng.png" },
                      { code: "USD", icon: "https://flagcdn.com/w20/us.png" },
                    ]}
                    toOptions={[
                      { code: "NGN", icon: "https://flagcdn.com/w20/ng.png" },
                      { code: "USDT", icon: "https://cryptologos.cc/logos/tether-usdt-logo.png" },
                    ]}
                    rate="NGN 1450.00"
                  />

                  <ChartPanel
                    title="Overview"
                    data={chartData}
                    options={["This week", "This month", "This year"]}
                  />
                </div>
              </div>

              <div className="mt-6">
                <TransactionsPanel data={transactionData} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
