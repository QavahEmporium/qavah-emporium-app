"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductGrid({ products }: { products: any[] }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.thumbnail,
      quantity: 1,
    });
  };

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax drift: cards will gently move upwards as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      style={{ y }}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
                src={product.thumbnail || "/placeholder.jpg"}
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

            <span className="font-raleway mt-2 inline-block w-fit bg-lunar-green-100 text-lunar-green-950 text-xs font-semibold px-2 py-1 rounded-full">
              {product.category}
            </span>

            <p className="my-2 text-lunar-green-950 font-bold text-sm md:text-base">
              R{product.price}
            </p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2, boxShadow: "0px 8px 15px rgba(0,0,0,0.2)" }}
              onClick={() => handleAddToCart(product)}
              className="font-raleway mt-auto w-full bg-gull-gray-500 text-white py-2 text-sm md:text-base font-semibold transition-all"
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
