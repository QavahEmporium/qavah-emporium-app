"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IUser } from "@/definitions/user";
import { logoutSessionUser } from "@/actions/auth";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

interface DesktopNavProps {
  navLinks: NavLink[];
  authLinks: NavLink[];
  user: IUser | null;
}

export default function DesktopNav({
  navLinks,
  authLinks,
  user,
}: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex font-medium items-center relative">
      {[...navLinks, ...authLinks].map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/" // only active on homepage
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <div key={link.href} className="relative">
            {/* Pill background */}
            {isActive && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 bg-lunar-green-200 shadow-lunar-green-300 shadow-md rounded-full z-0"
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              />
            )}

            {/* Text + Icon */}
            <Link
              href={link.href}
              className={`relative z-10 font-semibold flex items-center gap-2 px-4 py-2 rounded-full 
                ${
                  isActive
                    ? "text-lunar-green-900"
                    : "text-lunar-green-700 hover:text-lunar-green-900"
                }`}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
