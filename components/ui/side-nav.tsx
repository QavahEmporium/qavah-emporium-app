"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="absolute top-3 left-4 z-30 md:hidden"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile slide-in sidebar */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-white border-r border-black z-40 p-6 md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-8">Menu</h2>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:underline text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
