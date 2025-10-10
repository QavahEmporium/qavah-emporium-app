"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";
import { motion } from "framer-motion";

type Product = any;

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 14 },
  },
  exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.22 } },
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.thumbnail ?? product.image ?? "",
      quantity: 1,
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all"
    >
      {products.map((product: Product, index) => (
        <motion.div
          key={product.id}
          variants={cardVariants}
          className="flex flex-col gap-3 p-1 md:p-3 hover:-translate-y-1 transition-all"
        >
          {/* Product Image */}
          <Link
            href={`/products/${product.id}`}
            className="relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="h-40 md:h-48 lg:h-56 flex items-center justify-center bg-gull-gray-100"
            >
              <Image
                src={product.thumbnail || product.image || "/placeholder.jpg"}
                alt={product.title}
                width={200}
                height={200}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                priority={index < 4} // preload first row of images
                className="object-contain h-full"
              />
            </motion.div>
          </Link>

          <div className="w-full flex flex-row items-center justify-center gap-2">
            <div className="rounded-full bg-negroni-200 border-2 border-gull-gray-200 w-3 h-3 md:w-4 md:h-4"></div>
            <div className="rounded-full bg-peach-cream-300 border-2 border-gull-gray-200 w-3 h-3 md:w-4 md:h-4"></div>
            <div className="rounded-full bg-gull-gray-200 border-2 border-gull-gray-200 w-3 h-3 md:w-4 md:h-4"></div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col flex-1 px-2 md:px-1">
            <h3 className="font-tenor-sans text-lunar-green-950 font-semibold text-base md:text-md line-clamp-2">
              {product.title}
            </h3>

            <span className="mt-2 font-raleway inline-block w-fit bg-lunar-green-100 text-lunar-green-950 text-xs font-semibold px-2 py-1 rounded-full">
              {product.category}
            </span>

            <p className="my-2 text-lunar-green-950 font-bold text-sm md:text-base">
              R{product.price}
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2, boxShadow: "0px 8px 15px rgba(0,0,0,0.12)" }}
            onClick={() => handleAddToCart(product)}
            className="font-raleway mt-auto w-full bg-gull-gray-500 text-white py-2 text-sm md:text-base font-semibold transition-all"
          >
            Add to Cart
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
}
