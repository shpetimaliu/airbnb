import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb - Clone with Supabase, Kinde, Prisma and Tailwind ",
  description: "Airbnb cloned by Shpetim Aliu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/mobile_logo.svg" sizes="any" />
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
