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
    // ${isHome ? "flex" : "lg:ml-[250px]"}
    <main
      className={`h-screen ${
        isHome ? "my-auto" : "overflow-y-scroll py-8 pb-32"
      }`}
    >
      <div className="main_inner myContainer">{children}</div>
    </main>
  );
};
