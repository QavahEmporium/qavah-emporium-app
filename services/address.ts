import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import ShippingAddress from "@/models/shipping";

export async function createAddress(data: {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}) {
  await dbConnect();

  // 1️⃣ Save shipping address
  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  console.log({ data });
  const shipping = await ShippingAddress.create({
    userId,
    ...data,
  });

  return shipping;
}
