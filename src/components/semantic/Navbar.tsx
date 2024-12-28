"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { JSX } from "react";
import {
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaUserTie,
  FaBuilding,
} from "react-icons/fa";

interface HeaderLinksTypes {
  title: string;
  href: string;
  icon: JSX.Element;
}

const headerLinks: HeaderLinksTypes[] = [
  { title: "Sifarişlər", href: "/orders", icon: <FaClipboardList /> },
  { title: "Müştərilər", href: "/clients", icon: <FaUsers /> },
  { title: "Statistikalar", href: "/dashboard", icon: <FaChartBar /> },
  { title: "İşçilər", href: "/employees", icon: <FaUserTie /> },
  { title: "Filiallar", href: "/branches", icon: <FaBuilding /> },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex flex-col w-full items-center gap-4">
      {headerLinks.map(({ title, href, icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={title}
            href={href}
            className={`flex items-center gap-3 w-full text-white text-sm py-3 px-4 rounded-lg hover:bg-white/10 transition ${
              isActive ? "bg-white/30 font-semibold shadow-md" : ""
            }`}
          >
            <span className="text-lg">{icon}</span>
            <span className="flex-1">{title}</span>
          </Link>
        );
      })}
    </nav>
  );
};
