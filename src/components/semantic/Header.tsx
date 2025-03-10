"use client";

import { IoNotificationsOutline } from "react-icons/io5";
import { MantineDropdown } from "../ui/MantineDropdown";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { CiLogout, CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { rem } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderLinksTypes {
  title: string;
  href: string;
}

const headerLinks: HeaderLinksTypes[] = [
  { title: "Maliyyə", href: "/app/finances" },
  // { title: "Göstəricilər", href: "/dashboard" },
  { title: "Sifarişlər", href: "/app/orders" },
  { title: "Müştərilər", href: "/app/clients" },
  { title: "İşçilər", href: "/app/employees" },
  { title: "Filiallar", href: "/app/branches" },
  { title: "Yardım Mərkəzi", href: "/info/guide", },
  { title: "Haqqımızda", href: "/info/about", },
  {
    title: "Məxfilik Siyasəti",
    href: "/info/privacy-policy",
  },
];

interface DropdownDataTypes {
  label: string;
  icon: React.ReactNode;
  link: string;
}

interface NotificationsDataType {
  label: string;
  icon: React.ReactNode;
  createdAt: string;
  link: string;
}

const dropdownData: DropdownDataTypes[] = [
  {
    label: "View Profile",
    icon: <BsPerson style={{ width: rem(14), height: rem(14) }} />,
    link: "/app/profile",
  },
  // {
  //   label: "Messages",
  //   icon: <CiTextAlignJustify style={{ width: rem(14), height: rem(14) }} />,
  //   link: "/app/messages",
  // },
  // {
  //   label: "Gallery",
  //   icon: <CiImageOn style={{ width: rem(14), height: rem(14) }} />,
  //   link: "/app/gallery",
  // },
  {
    label: "Log out",
    icon: <CiLogout style={{ width: rem(14), height: rem(14) }} />,
    link: "/",
  },
];

const notificationsData: NotificationsDataType[] = [
  {
    label: "New order received",
    icon: <IoNotificationsOutline className="text-green-500" />,
    createdAt: "15 mins ago",
    link: "/app/notification-id",
  },
  {
    label: "Project update",
    icon: <IoNotificationsOutline className="text-yellow-500" />,
    createdAt: "30 mins ago",
    link: "/app/notification-id",
  },
  {
    label: "Meeting scheduled",
    icon: <IoNotificationsOutline className="text-blue-500" />,
    createdAt: "1 hour ago",
    link: "/app/notification-id",
  },
  {
    label: "New client joined",
    icon: <IoNotificationsOutline className="text-purple-500" />,
    createdAt: "2 hours ago",
    link: "/app/notification-id",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string>("");

  const [shortUserName, setShortUserName] = useState<string>("")

  useEffect(() => {
    const storedData = typeof window !== "undefined" ? sessionStorage.getItem("profileData") : null;
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      const firstName = parsedData?.name || "";
      const firstNameFirstLetter = parsedData?.name ? parsedData.name[0] : "First name";
      const surnameFirstLetter = parsedData?.surname ? parsedData.surname[0] : "";

      setDisplayName(`${firstName} ${surnameFirstLetter}`);
      setProfilePic(parsedData?.profilePic || "");
      setShortUserName(`${firstNameFirstLetter} ${surnameFirstLetter}`);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-3 pt-6 text-white w-full z-50">
      <div className={`header_inner myContainer flex flex-col md:flex-row items-start md:items-center justify-between ${displayName !== "" ? "lg:justify-between" : "lg:justify-end"} px-4 lg:px-0 w-full`}>

        {
          displayName ?
            <h1 className="text-black text-lg font-semibold mb-3 md:mb-0">
              Xoş gəldiniz, {displayName}
            </h1> : ""
        }

        <div className="text-black flex flex-row items-center gap-5">
          <div className="search_wrapper relative hidden sm:block">
            <input
              type="text"
              placeholder="Sifarişi axtar..."
              className="text-sm border border-[rgba(227,227,227,1)] rounded-[12px] px-3 py-3 pl-9 w-full outline-none focus:ring-1 focus:ring-slate-400 focus:shadow-md transition duration-200"
            />
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[rgba(136,136,136,1)]" />
          </div>
          {/* <div className="border-r border-r-gray-300 h-5"></div> */}
          <div className="flex flex-row items-center gap-4 border-none xs:border-l xs:border-l-gray-300">
            <MantineDropdown
              triggerBtn={
                <div className="group p-1 bg-[rgba(246,246,246,1)] hover:bg-[#525252] rounded-full cursor-pointer transition duration-300">
                  <IoNotificationsOutline className="w-8 lg:w-5 h-8 lg:h-5 text-[rgba(34,34,34,1)] group-hover:text-white" />
                </div>
              }
              data={notificationsData}
              dropdownWidth={240}
            />

            <MantineDropdown
              triggerBtn={
                <div className="flex flex-row items-center gap-1 w-max">
                  {
                    profilePic ? <Image
                      src={profilePic || "null"}
                      alt="PP"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-12 lg:w-12 h-auto rounded-full"
                    /> : <div className="w-12 h-12 min-h-12 max-h-12 min-w-12 max-w-12 px-3 py-3 bg-gray-200 rounded-full flex flex-row items-center justify-center gap-0 font-semibold">
                      {shortUserName ? shortUserName : <CiUser className="w-6 h-6 text-gray-400 stroke-1" />}
                    </div>
                  }

                  <p className="font-medium text-center hidden sm:block w-full">
                    {displayName}
                  </p>
                </div>
              }
              data={dropdownData}
              hasChevron={true}
              dropdownWidth={200}
            />
          </div>
          {/* Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-black text-3xl focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Sliding Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-slate-800 shadow-lg transform transition-transform duration-300 z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
              } lg:hidden`}
          >
            <nav className="flex flex-col gap-4 p-6 mt-12">
              {headerLinks.map(({ title, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={title}
                    href={href}
                    className={`block text-base text-white py-2 px-4 rounded-md hover:bg-white/10 transition ${isActive ? "bg-white/20 font-semibold" : ""
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
      </div>
    </header>
  );
};
