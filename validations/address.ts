// src/validations/addressValidation.ts
import { z } from "zod";

export const addressSchema = z.object({
  userId: z.string().min(1),
  fullName: z.string().min(2).trim(),
  street: z.string().min(3).trim(),
  city: z.string().min(2).trim(),
  province: z.string().min(2).trim(),
  country: z.string().min(2).trim(),
  postalCode: z.string().min(2).trim(),
  phoneNumber: z
    .string()
    .min(6)
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  isDefault: z.boolean().optional(),
  type: z.enum(["shipping", "billing"]).optional(),
});

export type AddressInput = z.infer<typeof addressSchema>;

export const checkoutFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().min(4, "Postal code is required"),
  country: z.string().min(2, "Country is required"),
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;
