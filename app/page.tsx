import ProductGrid from "@/components/products/product-grid";
import { getProducts } from "@/data/products";
import HeroSection from "@/components/landing-page/hero-section";
import { Suspense } from "react";
import ProductGridSkeleton from "@/components/products/product-listing-skeleton";
import { getBabyProducts } from "@/data/baby-data";

export default async function HomePage() {
  const products = await getBabyProducts();
  const randomProduct = products[0];
  const heroImage = "/hero-4.jpeg"; // randomProduct?.thumbnail || "/hero-bg.jpg"; // fallback if no API image

  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection
        image={heroImage}
        title="Minimal. Modern. Yours."
        subtitle="Discover timeless black & white essentials for your lifestyle."
        ctaText="Shop Now"
        ctaLink="/products"
      />

      {/* Featured Products */}
      <section className="p-4 mb-12 flex-1 md:px-8 lg:px-36 xl:px-52">
        <h2 className="text-xl font-tenor-sans text-lunar-green-800 font-semibold mb-4 md:text-2xl">
          Featured Products
        </h2>
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid products={products} />
        </Suspense>
      </section>

      {/* Footer */}
      <footer className="border-t border-black p-4 text-center text-sm text-gray-600 md:px-8 lg:px-36 xl:px-52">
        © {new Date().getFullYear()} StoreName. All rights reserved.
      </footer>
    </main>
  );
}
