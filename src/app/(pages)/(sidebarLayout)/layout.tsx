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
    <div className="flex flex-row- items-start gap-12 relative">
      <Sidebar />
      {children}
    </div>
  );
}
