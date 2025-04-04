import { MantineProvider } from "@mantine/core";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creatrax",
  description: "Track your data!",
};

const montserrat = Montserrat({
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
        className={`${montserrat.className} antialiased flex flex-col justify-between h-screen overflow-y-scroll`}
      >
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
