"use client";

import { MdOutlinePrivacyTip } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { JSX } from "react";
import {
  FaClipboardList,
  FaUsers,
  // FaChartBar,
  FaUserTie,
  FaBuilding,
  FaQuestionCircle,
  FaMoneyBill,
} from "react-icons/fa";


interface HeaderLinksTypes {
  section: string;
  items: {
    title: string;
    href: string;
    icon: JSX.Element;
  }[];
}

const headerLinks: HeaderLinksTypes[] = [
  {
    section: "Əsas menyu",
    items: [
      { title: "Maliyyə", href: "/app/finances", icon: <FaMoneyBill /> },
      // { title: "Göstəricilər", href: "/app/dashboard", icon: <FaChartBar /> },
      { title: "Sifarişlər", href: "/app/orders", icon: <FaClipboardList /> },
      { title: "Müştərilər", href: "/app/clients", icon: <FaUsers /> },
      { title: "İşçilər", href: "/app/employees", icon: <FaUserTie /> },
      { title: "Filiallar", href: "/app/branches", icon: <FaBuilding /> },
    ],
  },
  {
    section: "Yardım və Dəstək",
    items: [
      { title: "Yardım Mərkəzi", href: "/info/guide", icon: <FaQuestionCircle /> },
      { title: "Haqqımızda", href: "/info/about", icon: <FaQuestionCircle /> },
      {
        title: "Məxfilik Siyasəti",
        href: "/info/privacy-policy",
        icon: <MdOutlinePrivacyTip />,
      },
    ],
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex flex-col w-full items-start gap-6">
      {headerLinks.map(({ section, items }) => (
        <div key={section} className="w-full">
          {/* Section Title */}
          <h3 className="text-white text-[16px] font-[500] tracking-wide mb-2">
            {section}
          </h3>
          {/* Links */}
          <ul className="flex flex-col gap-2">
            {items.map(({ title, href, icon }) => {
              const isActive = pathname === href;
              return (
                <li key={title}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 w-full text-white text-[14px] font-[500] py-3 px-4 rounded-[12px] transition ${isActive
                      ? "bg-[rgba(24,111,184,1)] font-semibold shadow-md hover:bg-none"
                      : "hover:bg-white/10"
                      }`}
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="flex-1">{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};
