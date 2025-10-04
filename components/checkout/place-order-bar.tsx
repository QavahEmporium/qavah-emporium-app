"use client";

import { motion } from "framer-motion";
import { SubmitButton } from "../ui/buttons";

interface PlaceOrderBarProps {
  totalPrice: number;
  shake: boolean;
}

export default function PlaceOrderBar({
  totalPrice,
  shake,
}: PlaceOrderBarProps) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t px-6 py-4 flex justify-between items-center"
    >
      <motion.div
        animate={
          shake
            ? { x: [-8, 8, -6, 6, -3, 3, 0], boxShadow: "0 0 8px #ef4444" }
            : {}
        }
        transition={{ duration: 0.4 }}
        className="w-[300px] mx-auto bg-transparent rounded-full"
      >
        <SubmitButton
          type="submit"
          name={`Place Order • R${totalPrice.toFixed(2)}`}
          className="w-full rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}
