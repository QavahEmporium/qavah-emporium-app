"use client";

import { useState } from "react";
import { Plus, Trash2, Edit2, Star, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Toast from "@/components/ui/toast";
import { IAddress } from "@/definitions/user";

/** 🔔 Reusable Toast Component */
export default function AddressesClient({
  initialAddresses,
}: {
  initialAddresses: IAddress[];
}) {
  const [addresses, setAddresses] = useState<IAddress[]>(initialAddresses);
  const [addressToDelete, setAddressToDelete] = useState<IAddress | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const setDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
    showToast("Default address updated ✅");
  };

  const confirmDelete = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    setAddressToDelete(null);
    showToast("Address deleted successfully ✅");
  };

  return (
    <div className="overflow-y-scroll h-[90%] p-4 relative">
      {/* Address List */}
      <div className="space-y-4">
        <AnimatePresence>
          {addresses.map((addr) => (
            <motion.div
              key={addr.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border rounded-lg p-4 shadow-lunar-green-300 transition-all shadow-sm hover:shadow-lg flex justify-between items-start"
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
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => setDefault(addr.id)}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  <Star size={16} /> Set Default
                </button>
                <button className="flex items-center gap-1 text-sm text-yellow-600 hover:underline">
                  <Edit2 size={16} /> Edit
                </button>
                <button
                  onClick={() => setAddressToDelete(addr)}
                  className="flex items-center gap-1 text-sm text-red-600 hover:underline"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add New Address */}
      <div className="mt-6">
        <button className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-3 text-gray-600 hover:bg-gray-50">
          <Plus size={18} /> Add New Address
        </button>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {addressToDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/30 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
            >
              <h2 className="text-lg font-semibold mb-4">Delete Address</h2>
              <p className="text-gray-700 mb-6">
                Are you sure you want to delete{" "}
                <span className="font-medium">{addressToDelete.name}</span>’s
                address?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setAddressToDelete(null)}
                  className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => confirmDelete(addressToDelete.id)}
                  className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔔 Toast */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
