"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { IAddress } from "@/definitions/user";
import InputValidated from "@/components/ui/input-validated";
import { checkoutFormData } from "@/constants/address";
import { createAddressAction, AddressState } from "@/actions/address";
import { CheckoutFormData, checkoutFormSchema } from "@/validations/address";

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newAddress: IAddress) => void;
}

export default function AddAddressModal({
  isOpen,
  onClose,
  onSave,
}: AddAddressModalProps) {
  const router = useRouter();

  const initialState: AddressState = { message: "", errors: {} };
  // ✅ explicitly type the state so TS knows the shape
  const [state, formAction, isPending] = useActionState<AddressState, FormData>(
    createAddressAction,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      country: "South Africa",
    },
  });

  const onSaveClick = handleSubmit((data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) =>
      formData.append(key, value as string)
    );

    startTransition(() => {
      formAction(formData);
    });
  });

  useEffect(() => {
    if (state?.address) {
      onSave(state.address);
      onClose();
      router.refresh();
    }
  }, [state?.address]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/30 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
          >
            <h2 className="text-lg font-semibold mb-4">Add New Address</h2>

            <div className="flex flex-col gap-3">
              {checkoutFormData.map((field) => (
                <InputValidated
                  key={field.name}
                  {...field}
                  register={register}
                  errors={errors}
                />
              ))}

              {state?.message && (
                <p className="text-red-600 text-sm mt-1">{state.message}</p>
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={onSaveClick}
                  disabled={isPending}
                  className="px-4 py-2 rounded-md bg-lunar-green-600 text-white hover:bg-lunar-green-700 disabled:opacity-50"
                >
                  {isPending ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
