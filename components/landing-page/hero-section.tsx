"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({
  image,
  title,
  subtitle,
  ctaText = "Shop Now",
  ctaLink = "/products",
}: HeroSectionProps) {
  return (
    <section className="relative text-center h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 scale-[1.3] md:scale-[1]">
        <Image
          src={image}
          alt="Hero background"
          fill
          className="object-contain md:object-cover object-center md:object-[center_35%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-tenor-sans font-bold mb-4 md:text-5xl lg:text-6xl text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 font-raleway text-sm text-gray-200 md:text-lg lg:text-xl max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={ctaLink}
            className="bg-white font-tenor-sans text-black px-6 py-3 rounded-full font-semibold md:px-8 md:py-4 hover:bg-gray-200 transition"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
