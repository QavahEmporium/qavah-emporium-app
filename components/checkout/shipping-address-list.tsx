"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IAddress } from "@/definitions/user";

interface ShippingAddressListProps {
  addresses: IAddress[];
  selected: string | null;
  setSelected: (id: string) => void;
}

export default function ShippingAddressList({
  addresses,
  selected,
  setSelected,
}: ShippingAddressListProps) {
  return (
    <div className="overflow-y-scroll max-h-[400px] flex flex-col gap-4">
      <AnimatePresence>
        {addresses.map((addr) => (
          <motion.div
            key={addr.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setSelected(addr.id)}
            className={`border rounded-lg p-4 shadow-sm hover:shadow-lg flex justify-between items-start cursor-pointer ${
              selected === addr.id
                ? "border-lunar-green-500 bg-lunar-green-50"
                : "border-gray-200"
            }`}
          >
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                {addr.name}
                {addr.isDefault && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Default
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-700">{addr.email}</p>
              <p className="text-sm text-gray-700">
                {addr.address}, {addr.city}, {addr.postalCode}
              </p>
              <p className="text-sm text-gray-700">{addr.country}</p>
            </div>

            {selected === addr.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="text-lunar-green-600"
              >
                ✅
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
