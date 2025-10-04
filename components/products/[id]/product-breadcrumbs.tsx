"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Breadcrumbs({ title }: { title: string }) {
  return (
    <motion.nav
      className="text-sm mb-6 text-gray-600"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/" className="hover:underline">
        Home
      </Link>{" "}
      /{" "}
      <Link href="/products" className="hover:underline">
        Products
      </Link>{" "}
      / <span className="font-medium">{title}</span>
    </motion.nav>
  );
}
