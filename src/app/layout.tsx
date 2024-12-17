import { Header } from "@/components/semantic/Header";
import { Footer } from "@/components/semantic/Footer";
import { Main } from "@/components/semantic/Main";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreaTrax",
  description: "Track your clients and their orders",
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
    <html lang="en" className="h-full">
      <body
        className={`${poppins.className} antialiased flex flex-col justify-between h-full`}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
