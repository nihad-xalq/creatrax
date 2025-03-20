"use client";

import { Sidebar } from "@/components/semantic/Sidebar";
import { Header } from "@/components/semantic/Header";
import { Main } from "@/components/semantic/Main";

export const RootLayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
