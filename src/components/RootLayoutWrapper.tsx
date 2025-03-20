"use client";

import { Sidebar } from "@/components/semantic/Sidebar";
import { Header } from "@/components/semantic/Header";
import { Main } from "@/components/semantic/Main";
import { usePathname } from "next/navigation";

export const RootLayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  // const isHome: boolean = pathname === "/";
  {
    /* {!isHome && <Sidebar />} */
  }
  {
    /* {!isHome && <Header />} */
  }

  return (
    <div className="flex flex-row justify-between">
      <Sidebar />
      <div className="wrapper flex flex-col relative w-full">
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default RootLayoutWrapper;
