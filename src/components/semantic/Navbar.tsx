"use client";

import { usePathname } from "next/navigation";
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

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex flex-col items-center gap-3">
      {headerLinks.map(({ title, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={title}
            href={href}
            className={`block w-full text-white text-sm py-4 px-4 hover:bg-white/10 rounded-md transition ${
              isActive ? "bg-white/30 font-semibold" : ""
            }`}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};
