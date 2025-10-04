"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { IAddress } from "@/definitions/user";
import ShippingAddressList from "./shipping-address-list";
import AddAddressModal from "./add-address-modal";

interface ShippingAddressProps {
  addresses: IAddress[];
  selected: string | null;
  setSelected: (id: string) => void;
  showError: boolean;
}

export default function ShippingAddress({
  addresses,
  selected,
  setSelected,
  showError,
}: ShippingAddressProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [localAddresses, setLocalAddresses] = useState(addresses);

  const handleAdd = (newAddress: IAddress) => {
    setLocalAddresses((prev) => [...prev, newAddress]);
    setSelected(newAddress.id); // ✅ auto-select persisted address
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="md:bg-white md:p-6 md:rounded-xl md:shadow-md md:border md:border-gray-200"
    >
      <h2 className="text-xl text-lunar-green-900 font-semibold mb-2">
        Shipping Address
      </h2>
      <p className="text-sm text-gray-600 mb-4">Select an address below</p>

      <ShippingAddressList
        addresses={localAddresses}
        selected={selected}
        setSelected={setSelected}
      />

      {showError && !selected && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-600 text-sm mt-2"
        >
          ⚠️ Please select a shipping address before proceeding.
        </motion.p>
      )}

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-3 text-gray-600 hover:bg-gray-50"
        >
          <Plus size={18} /> Add New Address
        </button>
      </div>

      <AddAddressModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAdd}
      />
    </motion.div>
  );
}
