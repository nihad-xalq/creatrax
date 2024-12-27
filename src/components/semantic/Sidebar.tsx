import { Navbar } from "./Navbar";

export const Sidebar = () => {
  return (
    <aside className="bg-gradient-to-tl from-emerald-500 to-blue-800 rounded-lg p-4 sticky top-4 min-w-[300px] w-[300px] hidden lg:block">
      <Navbar />
    </aside>
  );
};
