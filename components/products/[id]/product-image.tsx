"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function ProductImage({ src, title }: { src: string; title: string }) {
  return (
    <motion.div
      className="flex justify-center items-center bg-gray-50 rounded-2xl p-8 shadow-lunar-green-300 shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Image
        src={src || "/placeholder.jpg"}
        alt={title}
        width={500}
        height={500}
        className="object-contain h-[400px] w-auto rounded-lg transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  );
}
