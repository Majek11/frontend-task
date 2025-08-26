import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="relative w-full h-16 flex items-center justify-between bg-[#1E2530] overflow-hidden px-80"
    >
      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Lines.png')" }}
      ></div>

      <div className="relative z-10 flex w-full items-center justify-between px-8">
        <div className="flex items-center gap-24">
          <img src="/logo.png" alt="xxxPay" className="h-6" />

          <div className="flex items-center gap-2 ml-6">
            <img src="/naija-2.png" alt="NGN" className="w-8 h-8 rounded-full" />
            <img src="/ghana.png" alt="GHS" className="w-8 h-8 rounded-full" />
            <img src="/burundi.png" alt="KES" className="w-8 h-8 rounded-full" />
            <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-white text-xs">
              +
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-300" />
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/image 109.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-300">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
}
