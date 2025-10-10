"use client";

import { motion } from "framer-motion";

export default function OrderSummary({
  cart,
  totalItems,
  totalPrice,
}: {
  cart: { id: string; name: string; price: number; quantity: number }[];
  totalItems: number;
  totalPrice: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="md:bg-white md:p-6 md:rounded-xl md:shadow-md md:border md:border-gray-200"
    >
      <h2 className="text-xl text-lunar-green-900 font-semibold mb-4">
        Order Summary
      </h2>
      <ul className="divide-y divide-gray-200">
        {cart.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex justify-between items-center py-3 px-2"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.quantity} × R{Number(item.price).toFixed(2)}
              </p>
            </div>
            <p className="font-semibold">
              R{(item.price * item.quantity).toFixed(2)}
            </p>
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-between font-bold mt-4 text-lg">
        <span className="text-lunar-green-900">Total ({totalItems} items)</span>
        <span className="text-lunar-green-900">R{totalPrice.toFixed(2)}</span>
      </div>
    </motion.section>
  );
}
