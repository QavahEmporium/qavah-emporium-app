"use client";
import { motion } from "framer-motion";
import ProductGrid from "@/components/products/product-grid";

export function RelatedProducts({ products }: { products: any[] }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-lunar-green-800">Related Products</h2>
      <ProductGrid products={products} />
    </motion.section>
  );
}
