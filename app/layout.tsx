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
  title: "Qavah Emporium | Baby Clothing & Essentials",
  description:
    "Shop adorable, high-quality baby clothing and accessories at Qavah Emporium. Comfort meets style for your little one.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://qavah-emporium-app.vercel.app",
    siteName: "Qavah Emporium",
    title: "Qavah Emporium | Baby Clothing & Essentials",
    description:
      "Discover premium baby wear collections – cozy, cute, and crafted with love.",
    images: [
      {
        url: "/hero-4.jpeg", // ✅ Full-width hero or featured image
        width: 1200,
        height: 630,
        alt: "Qavah Emporium – Baby Clothing & Essentials",
      },
      {
        url: "/logo.png", // ✅ Small logo for additional preview context
        width: 200,
        height: 200,
        alt: "Qavah Emporium Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qavah Emporium | Baby Clothing & Essentials",
    description:
      "Explore adorable baby wear and premium essentials at Qavah Emporium.",
    images: ["/hero-4.jpeg"],
  },
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
        <div className="pt-16 bg-white dark:bg-white">{children}</div>
        {/* {children} */}
        {/* ✅ Global Cart Sidebar */}
        <CartSidebar />
      </body>
    </html>
  );
}
