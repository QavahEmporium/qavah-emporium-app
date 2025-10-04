"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createNewOrder } from "@/actions/order";
import { useCartStore } from "@/store/cart-store";
import { IAddress, IUser } from "@/definitions/user";

import ShippingAddress from "./shipping-address";
import OrderSummary from "./order-summary";
import PlaceOrderBar from "./place-order-bar";

const CheckoutForm = ({
  user,
  userAddresses,
}: {
  user: IUser | null;
  userAddresses: IAddress[];
}) => {
  const pathname = "/order-confirmation";
  const cart = useCartStore((s) => s.items);
  const closeCart = useCartStore((s) => s.closeCart);
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    closeCart();
    if (!user) {
      router.push("/login?redirect=/checkout");
    }
  }, [user, router]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 pt-[64px] pb-[72px]">
        <p className="text-center text-lg text-gray-700">Your cart is empty.</p>
      </main>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={async (evt) => {
        evt.preventDefault();
        if (!selectedAddress) {
          setShowError(true);
          setShake(true);
          setTimeout(() => setShake(false), 600);
          return;
        }

        setShowError(false);
        await createNewOrder(selectedAddress, cart, pathname);
      }}
      className="min-h-screen max-w-3xl mx-auto flex flex-col gap-6 relative"
    >
      {/* Shipping Address */}
      <ShippingAddress
        addresses={userAddresses}
        selected={selectedAddress}
        setSelected={setSelectedAddress}
        showError={showError}
      />

      {/* Order Summary */}
      <OrderSummary
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />

      {/* Place Order Button */}
      <PlaceOrderBar totalPrice={totalPrice} shake={shake} />
    </form>
  );
};

export default CheckoutForm;
