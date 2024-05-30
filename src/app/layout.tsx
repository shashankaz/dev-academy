import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Academy",
  description:
    "Dev Academy offers top-notch web development courses designed to enhance your coding skills and career prospects. Join us to unlock a world of opportunities in the digital domain!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
