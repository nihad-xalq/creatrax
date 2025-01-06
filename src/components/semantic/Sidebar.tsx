import { fullYear } from "@/helpers/getTimes";
import { Navbar } from "./Navbar";

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen bg-gradient-to-tl from-cyan-600 via-blue-800 to-emerald-600 shadow-lg w-[250px] hidden lg:flex flex-col items-center p-6 pt-12">
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
