"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cart-store";
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, clearCart, updateQuantity } =
    useCartStore();

  const handleIncrease = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const handleDecrease = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      if (item.quantity === 1) removeItem(id);
      else updateQuantity(id, item.quantity - 1);
    }
  };

  const total = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-gray-900/50 z-40"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white z-50 p-6 flex flex-col shadow-2xl rounded-l-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={closeCart}
              className="self-end p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-lunar-green-600" />
              Your Cart
            </h2>

            {/* Empty Cart */}
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-20 gap-4 text-gray-500">
                <ShoppingCart className="w-16 h-16" />
                <p className="text-center">Your cart is empty</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto pr-1">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="flex items-center justify-between mb-4 p-2 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="object-contain rounded-md"
                        />
                      )}
                      <div className="flex flex-col">
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-gray-600 text-sm">
                          ${item.price} x {item.quantity} = $
                          {(item.price * item.quantity).toFixed(2)}
                        </p>
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2 bg-lunar-green-100 rounded-full px-2 py-1 w-fit">
                          <button
                            onClick={() => handleDecrease(item.id)}
                            className="p-1 rounded-full hover:bg-lunar-green-200 transition"
                          >
                            <Minus className="w-4 h-4 text-lunar-green-800" />
                          </button>
                          <span className="px-2 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrease(item.id)}
                            className="p-1 rounded-full hover:bg-lunar-green-200 transition"
                          >
                            <Plus className="w-4 h-4 text-lunar-green-800" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Trash Icon */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 rounded-full hover:bg-red-100 transition"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Cart Footer */}
            {items.length > 0 && (
              <motion.div
                className="mt-4 flex flex-col gap-3"
                key={total} // triggers animation when total changes
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <p className="font-semibold text-lg">Total: ${total}</p>
                <div className="flex gap-2">
                  <Link
                    href="/checkout"
                    className="flex-1 bg-lunar-green-600 text-white py-2 rounded-full font-semibold text-center hover:bg-lunar-green-700 transition"
                  >
                    Checkout
                  </Link>
                  <button
                    onClick={clearCart}
                    className="flex-1 border border-gray-300 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    Clear
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
