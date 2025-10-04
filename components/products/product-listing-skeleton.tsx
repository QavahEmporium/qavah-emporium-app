"use client";

import { motion } from "framer-motion";

export default function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "reverse",
          }}
          className="flex flex-col bg-gradient-to-b from-white via-white to-gray-50 p-1 md:p-3 rounded-2xl shadow-md border border-lunar-green-100"
        >
          {/* Image Placeholder */}
          <div className="h-40 md:h-48 lg:h-56 flex items-center justify-center bg-gray-200 rounded-xl animate-pulse" />

          <div className="flex flex-col flex-1 px-2 md:px-1 mt-2 space-y-3">
            {/* Title Placeholder */}
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            {/* Category Badge Placeholder */}
            <div className="h-5 bg-gray-200 rounded-full w-1/3 animate-pulse" />
            {/* Price Placeholder */}
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
            {/* Button Placeholder */}
            <div className="h-9 bg-gray-300 rounded-full w-full animate-pulse mt-auto" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
