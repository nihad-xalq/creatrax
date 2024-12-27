"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-gradient-to-tl from-emerald-500 to-blue-800 rounded-lg p-4 sticky top-4 min-w-[300px] w-[300px]">
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
    </aside>
  );
};
