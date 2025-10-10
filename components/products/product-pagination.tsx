"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"; // optional: tailwind-merge helper

type Props = {
  currentPage: number;
  totalPages: number;
  search?: string;
  category?: string;
};

export default function ProductPagination({
  currentPage,
  totalPages,
  search = "",
  category = "",
}: Props) {
  const createLink = (page: number) =>
    `/products?page=${page}&search=${encodeURIComponent(
      search
    )}&category=${encodeURIComponent(category)}`;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (
      (i === currentPage - 2 && i > 1) ||
      (i === currentPage + 2 && i < totalPages)
    ) {
      pages.push("...");
    }
  }

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {/* Prev Button */}
      <Link
        href={currentPage > 1 ? createLink(currentPage - 1) : "#"}
        className={cn(
          "px-4 py-2 rounded-full transition-colors font-raleway",
          currentPage > 1
            ? "bg-lunar-green-100 text-lunar-green-700 hover:bg-lunar-green-300 shadow-md font-semibold"
            : "bg-lunar-green-50 opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        Prev
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 w-fit">
        {pages.map((p, idx) =>
          typeof p === "number" ? (
            <Link
              key={idx}
              href={createLink(p)}
              className={cn(
                "px-3 py-2 rounded-full text-sm font-medium transition-all",
                p === currentPage
                  ? "bg-gull-gray-500 text-white shadow-gray-300 shadow-md"
                  : "bg-gray-50 shadow shadow-gray-200 shadow-sm hover:shadow-lg"
              )}
            >
              {p}
            </Link>
          ) : (
            <span key={idx} className="px-2 text-gray-400">
              ...
            </span>
          )
        )}
      </div>

      {/* Next Button */}
      <Link
        href={currentPage < totalPages ? createLink(currentPage + 1) : "#"}
        className={cn(
          "px-4 py-2 rounded-full transition-colors font-raleway",
          currentPage < totalPages
            ? "bg-lunar-green-100 text-lunar-green-700 hover:bg-lunar-green-300 shadow-md font-semibold"
            : "bg-lunar-green-50 opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        Next
      </Link>
    </div>
  );
}
