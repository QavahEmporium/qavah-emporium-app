"use client";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function ProductInfo({ product }: { product: any }) {
  return (
    <motion.div
      className="flex flex-col md:justify-between gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <motion.h1
          variants={childVariants}
          className="text-3xl md:text-4xl font-bold text-lunar-green-800"
        >
          {product.title}
        </motion.h1>

        {/* Price & Stock */}
        <motion.div
          variants={childVariants}
          className="flex items-center gap-4"
        >
          <span className="text-2xl font-semibold text-lunar-green-900">
            ${product.price}
          </span>
          {product.stock > 0 ? (
            <span className="px-3 py-2 text-xs font-semibold text-lunar-green-700 bg-lunar-green-100 rounded-full">
              In Stock
            </span>
          ) : (
            <span className="px-3 py-2 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
              Out of Stock
            </span>
          )}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={childVariants}
          className="text-gray-700 leading-relaxed"
        >
          {product.description}
        </motion.p>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        <motion.div variants={childVariants}>
          <AddToCartButton product={product} />
        </motion.div>

        {/* Selling Points */}
        <motion.ul
          className="space-y-2 text-sm text-gray-600"
          variants={childVariants}
        >
          {[
            "✔ Free shipping on orders over $50",
            "✔ 30-day hassle-free returns",
            "✔ Secure and encrypted checkout",
          ].map((point, i) => (
            <motion.li
              key={i}
              variants={childVariants}
              className="flex items-center"
            >
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {/* Add to Cart */}
    </motion.div>
  );
}
