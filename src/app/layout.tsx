
import RootLayoutWrapper from "@/components/RootLayoutWrapper";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "@mantine/charts/styles.css";
// TODO: if something gets trouble with mantine, it is because of the comment below. open comment to fix this
import "@mantine/core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreaTrax",
  description: "Track your data!",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[rgba(255,255,255,1)] h-screen overflow-y-auto"
    >
      <body
        className={`${poppins.className} antialiased flex flex-col justify-between h-screen overflow-y-hidden`}
      >
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
}
