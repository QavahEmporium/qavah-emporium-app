"use server";

import { checkoutFormSchema } from "@/validations/address";
import { createAddress } from "@/services/address"; // DB function for addresses
import { IAddress } from "@/definitions/user";

export type AddressState = {
  errors?: Record<string, string[]>;
  message?: string;
  address?: IAddress | null;
};

export async function createAddressAction(
  prevState: AddressState,
  formData: FormData
): Promise<AddressState> {
  console.log({ formData });
  const validatedFields = checkoutFormSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the highlighted errors.",
    };
  }

  try {
    const created = await createAddress(validatedFields.data);
    if (!created) {
      return { message: "Not authenticated. Please sign in." };
    }

    const mapped: IAddress = {
      id: (created as any)._id.toString(),
      name: created.name,
      email: created.email,
      address: created.address,
      city: created.city,
      postalCode: created.postalCode,
      country: created.country,
      isDefault: false,
    };

    return { address: mapped };
  } catch (error) {
    console.error("Error creating address:", error);
    return {
      errors: { global: ["Something went wrong while saving the address."] },
    };
  }
}
