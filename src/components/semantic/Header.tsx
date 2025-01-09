"use client";

import { IoNotificationsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
// import { Logo } from "../reusable/Logo";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi2";

interface HeaderLinksTypes {
  title: string;
  href: string;
}

const headerLinks: HeaderLinksTypes[] = [
  { title: "Sifarişlər", href: "/orders" },
  { title: "Müştərilər", href: "/clients" },
  { title: "Statistikalar", href: "/dashboard" },
  { title: "İşçilər", href: "/employees" },
  { title: "Filiallar", href: "/branches" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-3 pt-6 text-white w-full z-50">
      <div className="header_inner myContainer flex items-center justify-between lg:justify-between px-4 lg:px-0 w-full">
        {/* <Link href="/" className="header_left w-2/5 lg:w-[11%]">
          <Logo />
        </Link> */}
        <h1 className="text-black text-lg font-semibold">
          Welcome back, {"Nihad"}{" "}
        </h1>

        <div className="text-black flex flex-row items-center gap-5">
          <input
            type="search"
            name="search"
            placeholder="Search anything"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <div className="border-r border-r-gray-300 h-5"></div>
          <div className="flex flex-row items-center gap-4">
            <div className="p-1 bg-[rgba(246,246,246,1)] rounded-full">
              <IoNotificationsOutline className="w-5 h-5 text-[rgba(34,34,34,1)]" />
            </div>

            <div className="flex flex-row items-center gap-2">
              <div>
                <Image
                  src="/pp.png"
                  alt="PP"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-full"
                />
              </div>
              <p className="font-medium">Nihad A</p>
              <HiOutlineChevronDown />
            </div>
          </div>
        </div>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-3xl focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-slate-800 shadow-lg transform transition-transform duration-300 z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <nav className="flex flex-col gap-4 p-6 mt-12">
            {headerLinks.map(({ title, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={title}
                  href={href}
                  className={`block text-base text-white py-2 px-4 rounded-md hover:bg-white/10 transition ${
                    isActive ? "bg-white/20 font-semibold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};
