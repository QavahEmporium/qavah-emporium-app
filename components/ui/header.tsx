"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  Home,
  Grid,
  LayoutGrid,
  User,
  ClipboardList,
  LogIn,
  UserPlus,
  HelpCircle,
} from "lucide-react";
import CartSidebar from "@/components/cart/cart-sidebar";
import CartSidebarButton from "@/components/cart/cart-sidebar-button";
import MobileMenu from "./mobile-menu";
import DesktopNav from "./desktop-nav";
import { IUser } from "@/definitions/user";
import Image from "next/image";

export default function Header({ user }: { user: IUser | null }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Base nav links
  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: Grid },
    // { href: "/categories", label: "Categories", icon: LayoutGrid },
  ];

  // Auth-dependent links
  const authLinks = user
    ? [
        { href: "/profile", label: "Profile", icon: User },
        { href: "/support", label: "Support", icon: HelpCircle },
      ]
    : [
        { href: "/login", label: "Login", icon: LogIn },
        { href: "/register", label: "Register", icon: UserPlus },
        { href: "/support", label: "Support", icon: HelpCircle },
      ];

  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between mb-0 px-4 py-3 bg-white shadow-md md:px-8 lg:px-36 xl:px-52">
      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Desktop Logo */}
      <Link
        href="/"
        className="relative hidden md:block w-40 h-12 overflow-hidden"
      >
        <Image
          src="/logo-pink.jpg"
          alt="Logo"
          fill
          className="object-cover object-[center_56%] scale-125 md:scale-90"
          priority
        />
      </Link>

      {/* Mobile Logo */}
      <Link
        href="/"
        className="md:hidden relative block w-32 h-10 overflow-hidden"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          fill
          className="object-contain object-center scale-280"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <DesktopNav navLinks={navLinks} authLinks={authLinks} user={user} />

      {/* Cart Icon */}
      <CartSidebarButton />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        authLinks={authLinks}
        user={user}
      />

      {/* Cart Sidebar */}
      <CartSidebar />
    </header>
  );
}
