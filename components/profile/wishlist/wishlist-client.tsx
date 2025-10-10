"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function WishlistClient({
  products,
}: {
  products: WishlistItem[];
}) {
  const addItem = useCartStore((state) => state.addItem);
  const y = useMotionValue(0);

  const [wishlist, setWishlist] = useState(products);

  const handleAddToCart = (product: WishlistItem) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const handleRemove = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    // Later: call API to remove from DB
  };
  if (wishlist.length === 0) {
    return <p className="text-gray-600">Your wishlist is empty.</p>;
  }
  return (
    <motion.div
      className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      style={{ y }}
    >
      <AnimatePresence>
        {wishlist.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col bg-gradient-to-b from-white via-white to-gray-50 p-1 md:p-3 rounded-2xl shadow-lunar-green-300 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all border border-lunar-green-100 relative"
          >
            {/* Remove Button */}
            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100 transition z-10"
              aria-label="Remove from wishlist"
            >
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>

            {/* Product Image */}
            <Link
              href={`/wishlists/${item.id}`}
              className="relative overflow-hidden rounded-xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="h-40 md:h-48 lg:h-56 flex items-center justify-center bg-gray-100"
              >
                <Image
                  src={item.image || "/placeholder.jpg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-contain h-full"
                />
              </motion.div>
            </Link>

            {/* Product Details */}
            <div className="flex flex-col flex-1 px-2 md:px-1 mt-2">
              <h3 className="text-lunar-green-950 font-semibold text-base md:text-lg line-clamp-2">
                {item.name}
              </h3>

              {item.category && (
                <span className="mt-2 inline-block w-fit bg-lunar-green-100 text-lunar-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                  {item.category}
                </span>
              )}

              <p className="my-2 text-lunar-green-950 font-bold text-sm md:text-base">
                R{item.price.toFixed(2)}
              </p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  y: -2,
                  boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                }}
                onClick={() => handleAddToCart(item)}
                className="mt-auto w-full bg-gull-gray-500 text-white py-2 rounded-full text-sm md:text-base font-semibold transition-all"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
