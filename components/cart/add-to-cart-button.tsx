"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { Plus, Minus } from "lucide-react";

export function AddToCartButton({ product }: { product: any }) {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.thumbnail,
      quantity,
    });
    openCart(); // 🔥 open cart when adding
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      <div className="flex block w-fit items-center gap-3 p-2 bg-lunar-green-100 border rounded-full shadow-md">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-8 h-8 flex items-center justify-center bg-lunar-green-200 rounded-xl hover:bg-lunar-green-300 "
        >
          <Minus className="w-4 h-4 text-lunar-green-800" />
        </button>
        <span className="w-8 text-center font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-lunar-green-200 rounded-xl hover:bg-lunar-green-300 "
        >
          <Plus className="w-4 h-4 text-lunar-green-800" />
        </button>
      </div>
      <button
        onClick={handleAdd}
        className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
