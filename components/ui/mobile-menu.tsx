"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { IUser } from "@/definitions/user";
import { logoutSessionUser } from "@/actions/auth";

interface NavLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  authLinks: NavLink[];
  user: IUser | null;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  authLinks,
  user,
}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 flex flex-col shadow-2xl rounded-r-2xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="self-end p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <nav className="flex flex-col gap-4 mt-4 relative">
              {[...navLinks, ...authLinks].map((link) => {
                const isActive = pathname === link.href;

                return (
                  <div key={link.href} className="relative">
                    {/* Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-pill"
                        className="absolute inset-0 bg-lunar-green-600 rounded-full z-0"
                        transition={{
                          type: "tween",
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`relative z-10 flex items-center gap-3 px-4 py-2 rounded-full
                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-800 hover:text-gray-900"
                        }`}
                    >
                      <link.icon className="w-5 h-5" />
                      {link.label}
                    </Link>
                  </div>
                );
              })}

              {user && (
                <button
                  onClick={async () => {
                    onClose();
                    await logoutSessionUser();
                  }}
                  className="flex items-center gap-3 text-red-600 font-medium hover:text-red-500 transition-colors duration-200"
                >
                  Logout
                </button>
              )}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
