"use client";

import { motion } from "framer-motion";

export default function AddressCard({
  addr,
  selected,
  onSelect,
}: {
  addr: any;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-4 rounded-lg border cursor-pointer ${
        selected
          ? "border-lunar-green-600 bg-lunar-green-50"
          : "border-gray-200"
      }`}
      onClick={onSelect}
    >
      <p className="font-semibold">{addr.name}</p>
      <p className="text-sm text-gray-600">
        {addr.address}, {addr.city}, {addr.postalCode}, {addr.country}
      </p>
    </motion.div>
  );
}
