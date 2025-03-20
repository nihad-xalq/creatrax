import RootLayoutWrapper from "@/components/RootLayoutWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creatrax",
  description: "Track your data!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutWrapper>{children}</RootLayoutWrapper>;
}
