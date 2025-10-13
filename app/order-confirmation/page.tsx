"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function OrderConfirmationPage() {
  const clearCart = useCartStore((s) => s.clearCart);

  // ✅ clear cart on confirmation
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center md:px-4 pt-[64px] pb-[72px] bg-white">
      <div className="md:bg-white md:rounded-2xl shadow-lunar-green-300 md:shadow-lg hover:shadow-xl transition-all p-6 md:p-10 text-center max-w-lg w-full md:border md:border-gull-gray-100">
        <CheckCircle className="w-16 h-16 text-pink-400 mx-auto mb-4" />
        <h1 className="text-lunar-green-900 text-3xl font-bold text-gray-900 mb-2">
          Thank You for Your Order!
        </h1>
        <p className="text-lunar-green-600 mb-6">
          We’ve received your order and will send you a confirmation email
          shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/profile/orders?redirect=/"
            className="w-full sm:w-auto bg-gull-gray-500 hover:bg-gull-gray-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            View Orders
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto shadow-lunar-green-300 shadow-sm text-lunar-green-800 font-semibold px-6 py-3 rounded-xl hover:bg-lunar-green-100 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
