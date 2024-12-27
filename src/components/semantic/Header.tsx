"use client";

import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "../reusable/Logo";
import { useState } from "react";
import Link from "next/link";

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
    <header className="bg-slate-800 py-4 text-white relative">
      <div className="header_inner myContainer flex items-center justify-between lg:justify-center px-4 lg:px-0">
        <Link href="/" className="header_left w-2/5 lg:w-1/12">
          <Logo />
        </Link>

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

        {/* Desktop Menu */}
        {/* <nav className="hidden lg:flex items-center gap-1">
          {headerLinks.map(({ title, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={title}
                href={href}
                className={`text-white text-sm py-2 px-4 hover:bg-white/10 rounded-md transition ${
                  isActive ? "bg-white/20 font-semibold" : ""
                }`}
              >
                {title}
              </Link>
            );
          })}
        </nav> */}
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
