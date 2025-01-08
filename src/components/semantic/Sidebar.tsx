import { fullYear } from "@/helpers/getTimes";
import { Navbar } from "./Navbar";

export const Sidebar = () => {
  return (
    <aside className="h-screen bg-[rgba(25,32,48,1)] shadow-lg w-[300px] hidden lg:flex flex-col items-center p-6 z-50">
      {/* Logo */}
      <div className="flex flex-col items-center text-white mb-8 mt-16">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-1">
          <span className="text-2xl font-bold text-blue-800">S</span>
        </div>
        <h1 className="text-lg font-bold uppercase tracking-wide">Socar</h1>
      </div>

      {/* Navbar Links */}
      <Navbar />

      {/* Footer */}
      <div className="mt-auto text-center text-[12px] text-white">
        <p>Creadive &copy; {fullYear}</p>
        <p className="text-gray-300">All Rights Reserved</p>
      </div>
    </aside>
  );
};
