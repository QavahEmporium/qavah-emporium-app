"use client";

import { Suspense, useState } from "react";
import ProductFilters from "./product-filter";
import ProductGrid from "./product-listing-card";
import ProductPagination from "./product-pagination";
import ProductGridSkeleton from "./product-listing-skeleton";

type Product = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  stock: number;
};

export default function ProductListingClient({
  products,
  total,
  limit,
  currentPage,
  category,
  search,
}: {
  products: Product[];
  total: number;
  limit: number;
  currentPage: number;
  category?: string;
  search?: string;
}) {
  const totalPages = Math.ceil(total / limit);

  // Local filters for client-only filtering (availability + maxPrice)
  const [filters, setFilters] = useState({
    search: search || "",
    category: category || "",
    availability: "All",
    maxPrice: 2000,
  });

  // Filter products on client
  const filteredProducts = products.filter(
    (p) =>
      (filters.availability === "All" ||
        (filters.availability === "Available" && p.stock > 0) ||
        (filters.availability === "Unavailable" && p.stock === 0)) &&
      p.price <= filters.maxPrice
  );

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <ProductFilters
        search={filters.search}
        category={filters.category}
        currentPage={currentPage}
        onChange={setFilters}
        totalPages={totalPages}
      />

      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid products={filteredProducts} />
      </Suspense>

      <div className="mt-10">
        <ProductPagination
          currentPage={currentPage}
          totalPages={totalPages}
          search={filters.search}
          category={filters.category}
        />
      </div>
    </div>
  );
}
