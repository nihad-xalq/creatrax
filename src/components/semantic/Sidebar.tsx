import { useRouter } from "next/navigation";
import { TbLogout2 } from "react-icons/tb";
import { Logo } from "../reusable/Logo";
import { Navbar } from "./Navbar";

export const Sidebar = () => {
  const router = useRouter()

  const handleLogOut = () => {
    // Add logout functionality here

    router.push("/")
    // localStorage.removeItem("token");
    // router.push("/login");
  };


  return (
    <aside className="h-screen bg-[rgba(25,32,48,1)] shadow-lg w-[300px] hidden lg:flex flex-col items-center py-6 pb-8 px-4 z-50">
      {/* Logo */}
      {/* <div className="flex flex-col items-center text-white mb-8 mt-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-1">
          <span className="text-2xl font-bold text-blue-800">S</span>
        </div>
        <h1 className="text-lg font-bold uppercase tracking-wide">Socar</h1>
      </div> */}
      <Logo styles="mb-12 mt-4" />

      {/* Navbar Links */}
      <Navbar />

      <button
        type="button"
        className="w-full flex flex-row items-center justify-start gap-3 mt-auto text-white py-3 px-4 rounded-[12px] hover:bg-white/10 transition duration-200"
        onClick={handleLogOut}
      >
        <TbLogout2 className="text-2xl" />{" "}
        <span className="text-sm">Hesabdan çıx</span>
      </button>
    </aside>
  );
};
