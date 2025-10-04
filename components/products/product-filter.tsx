"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ProductPagination from "./product-pagination";

type Props = {
  search?: string;
  category?: string;
  availability?: string;
  maxPrice?: number;
  currentPage: number;
  totalPages: number;
  onChange: (filters: {
    search: string;
    category: string;
    availability: string;
    maxPrice: number;
  }) => void;
};

export default function ProductFilters({
  search = "",
  category = "",
  availability: defaultAvailability = "All",
  maxPrice: defaultMaxPrice = 2000,
  currentPage,
  totalPages,
  onChange,
}: Props) {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState(search);
  const [categoryInput, setCategoryInput] = useState(category);
  const [availability, setAvailability] = useState(defaultAvailability);
  const [maxPrice, setMaxPrice] = useState(defaultMaxPrice);

  const isFirstRender = useRef(true);

  // Debounced filter changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const delay = setTimeout(() => {
      router.push(
        `/products?page=1&search=${encodeURIComponent(
          searchInput
        )}&category=${encodeURIComponent(
          categoryInput
        )}&availability=${encodeURIComponent(
          availability
        )}&maxPrice=${maxPrice}`
      );
      onChange({
        search: searchInput,
        category: categoryInput,
        availability,
        maxPrice,
      });
    }, 500);

    return () => clearTimeout(delay);
  }, [searchInput, categoryInput, availability, maxPrice]);

  // Sync page changes via router
  useEffect(() => {
    router.replace(
      `/products?page=${currentPage}&search=${encodeURIComponent(
        searchInput
      )}&category=${encodeURIComponent(
        categoryInput
      )}&availability=${encodeURIComponent(availability)}&maxPrice=${maxPrice}`
    );
  }, [currentPage]);

  const filters = {
    search: searchInput,
    category: categoryInput,
    availability,
    maxPrice,
  };

  return (
    <div className="flex flex-col gap-6 mb-8">
      {/* Search */}
      <div className="flex flex-col gap-1">
        <label className="font-mono text-emperor-950">Search</label>
        <div className="flex items-center gap-2 px-4 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full h-10 border-none focus:outline-none focus:ring-0 text-black"
          />
        </div>
      </div>

      {/* Filters */}

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Category */}
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <label className="font-mono text-emperor-950">Category</label>
            <div className="flex items-center px-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all">
              <select
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                className="w-full h-10 border-none focus:outline-none focus:ring-0 text-black bg-transparent"
              >
                <option value="">All Categories</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="fragrances">Fragrances</option>
                <option value="skincare">Skincare</option>
                <option value="groceries">Groceries</option>
                <option value="home-decoration">Home Decoration</option>
              </select>
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <label className="font-mono text-emperor-950">Availability</label>
            <div className="flex items-center px-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all">
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="w-full h-10 border-none focus:outline-none focus:ring-0 text-black bg-transparent"
              >
                <option value="All">All</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <label className="font-mono text-emperor-950">Max Price</label>
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all">
              <input
                type="range"
                min={0}
                max={2000}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full sm:w-40 accent-lunar-green-500"
              />
              <span className="text-sm font-medium">R{maxPrice}</span>
            </div>
          </div>
        </div>

        {/* Pagination (below filters) */}
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
