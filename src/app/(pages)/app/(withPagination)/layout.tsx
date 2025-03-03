import { PaginationFooter } from "@/components/PaginationFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CreaTrax",
  description: "Track your data!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between gap-3">
      {children}
      <PaginationFooter />
    </div>
  );
}
