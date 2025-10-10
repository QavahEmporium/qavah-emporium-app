"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export default function CartSidebarButton() {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const itemsCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <button onClick={toggleCart} className="relative">
      <ShoppingBag className="w-6 h-6 text-lunar-green-700" />
      {itemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {itemsCount}
        </span>
      )}
    </button>
  );
}
