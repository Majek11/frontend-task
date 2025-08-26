import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  Repeat,
  Settings,
  FileText,
  PlayCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0">
      <div className="bg-gray-50 rounded-2xl p-5 flex flex-col gap-6 h-full">
        <p className="text-sm text-gray-500">Friday, Oct 25 2022</p>
        <h2 className="text-[25px] font-semibold">Good evening</h2>

        <nav>
        <div className="bg-white rounded-2xl shadow-lg p-6">
         <ul className="space-y-6">
           <li className="flex items-center gap-3 text-gray-900 font-medium">
          <LayoutDashboard className="w-5 h-5" />
           Overview
         </li>
         <li className="flex items-center gap-3 text-gray-500">
           <Wallet className="w-5 h-5" />
           Wallets
         </li>
           <li className="flex items-center gap-3 text-gray-500">
             <CreditCard className="w-5 h-5" />
             Transactions
         </li>
         <li className="flex items-center gap-3 text-gray-500">
           <Repeat className="w-5 h-5" />
           Payment
         </li>
         <li className="flex items-center gap-3 text-gray-500">
           <Settings className="w-5 h-5" />
           Settings
         </li>
         </ul>
      </div>
        </nav>

       <div className="bg-white rounded-2xl shadow-lg p-6">
        <p className="text-gray-500 text-sm mb-3">Resources</p>
        <ul className="space-y-6">
          <li className="flex items-center gap-3 text-gray-500">
            <FileText className="w-5 h-5" />
            Documentation
          </li>
          <li className="flex items-center gap-3 text-gray-500">
            <PlayCircle className="w-5 h-5" />
            Watch Video
          </li>
        </ul>
      </div>

        <div className="bg-gray-800 text-white rounded-xl p-4">
          <p className="font-medium mb-3">Account Support</p>
          <div className="flex items-center">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="User 1"
                className="w-8 h-8 rounded-full border-2 border-gray-800"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 2"
                className="w-8 h-8 rounded-full border-2 border-gray-800"
              />
            </div>
            <span className="ml-3 text-sm font-medium">Chat Support</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
