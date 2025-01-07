import { Header } from "@/components/semantic/Header";
// import { Footer } from "@/components/semantic/Footer";
import { Main } from "@/components/semantic/Main";
import { MantineProvider } from "@mantine/core";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "@mantine/charts/styles.css";
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
      className="h-full bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <body
        className={`${poppins.className} antialiased flex flex-col justify-between h-full`}
      >
        <MantineProvider>
          <Header />
          <Main>{children}</Main>
          {/* <Footer /> */}
        </MantineProvider>
      </body>
    </html>
  );
}
