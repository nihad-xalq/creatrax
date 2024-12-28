"use client";

import { usePathname } from "next/navigation";

export const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const isHome: boolean = pathname === "/";

  return (
    <main className={`py-24 h-full ${isHome ? "flex" : "lg:ml-[250px]"}`}>
      <div className="main_inner myContainer">{children}</div>
    </main>
  );
};
