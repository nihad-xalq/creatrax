import { Sidebar } from "@/components/semantic/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CreaTrax",
  description: "Track your clients and their orders",
};

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row justify-between items-start gap-10 relative w-full">
      <Sidebar />
      {children}
    </div>
  );
}
