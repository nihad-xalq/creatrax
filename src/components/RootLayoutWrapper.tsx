"use client";

import { Sidebar } from "@/components/semantic/Sidebar";
import { Header } from "@/components/semantic/Header";
import { Main } from "@/components/semantic/Main";
import { MantineProvider } from "@mantine/core";
import { usePathname } from "next/navigation";

export const RootLayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const isHome: boolean = pathname === "/";

  return (
    <MantineProvider>
      <div className="flex flex-row justify-between">
        {!isHome && <Sidebar />}
        <div className="wrapper flex flex-col relative w-full">
          {!isHome && <Header />}
          <Main>{children}</Main>
        </div>
      </div>
    </MantineProvider>
  );
};

export default RootLayoutWrapper;
