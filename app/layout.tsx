import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Raleway, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import CartSidebar from "@/components/cart/cart-sidebar";
import { getSessionUser } from "@/data/user";
import { IUser } from "@/definitions/user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qavah Emporium",
  description: "Qavah Emporium Clothings",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = (await getSessionUser()) as IUser;
  return (
    <html lang="en">
      <body className={`${tenorSans.variable} ${raleway.variable} antialiased`}>
        {/* ✅ Global Header */}
        <Header user={user} />
        {/* ✅ Main content */}
        <div className="pt-16 bg-white">{children}</div>
        {/* {children} */}
        {/* ✅ Global Cart Sidebar */}
        <CartSidebar />
      </body>
    </html>
  );
}
