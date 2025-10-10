"use client";

import { useState } from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type OrderItem = {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
};

type Order = {
  id: string;
  date: string;
  status: string;
  total: number;
  items: OrderItem[];
};

export default function OrdersClient({ orders }: { orders: Order[] }) {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  if (orders.length === 0) {
    return (
      <motion.p
        className="text-gray-600 text-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        You have no orders yet.
      </motion.p>
    );
  }

  return (
    <div className="space-y-4 overflow-y-scroll h-[90%] p-4">
      {orders.map((order, index) => {
        const isExpanded = expandedOrder === order.id;

        return (
          <motion.div
            key={order.id}
            className="border border-lunar-green-50 md:border-lunar-green-100 rounded-2xl shadow-lunar-green-300 shadow-sm hover:shadow-lg bg-white px-4 py-2 cursor-pointer transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Order Header */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lunar-green-800">Order #{order.id}</p>
                <p className="text-sm text-lunar-green-600">
                  Placed on {format(new Date(order.date), "dd MMM yyyy")}
                </p>
              </div>
              <div className="text-right space-y-2">
                <p className="font-bold">R{order.total.toFixed(2)}</p>
                <span
                  className={`px-2 py-1 md:px-3 md:py-2 text-xs font-semibold rounded-full ${
                    order.status === "delivered"
                      ? "text-lunar-green-700 bg-lunar-green-100"
                      : order.status === "cancelled"
                      ? "text-red-600 bg-red-100"
                      : "text-lunar-green-700 bg-gull-gray-100"
                  }`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Expand/Collapse */}
            <button
              onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
              className="mt-2 flex items-center text-sm text-pink-600 font-medium hover:underline"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  View Details
                </>
              )}
            </button>

            {/* Expanded Order Details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-4 border-t border-gray-200 pt-4 bg-gray-50 rounded-xl px-4 overflow-hidden"
                >
                  <motion.ul
                    className="divide-y divide-gray-200"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.15, // stagger effect
                        },
                      },
                    }}
                  >
                    {order.items.map((item) => (
                      <motion.li
                        key={item.id}
                        className="flex justify-between py-3"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div>
                          <p className="text-lunar-green-900 font-medium">{item.name}</p>
                          <p className="text-lunar-green-600 text-sm">
                            {item.quantity} × R{item.price.toFixed(2)}
                          </p>
                        </div>
                        <p className="font-semibold text-lunar-green-900">
                          R{(item.quantity * item.price).toFixed(2)}
                        </p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
