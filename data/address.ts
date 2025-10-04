import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import ShippingAddress from "@/models/shipping";

export const getAddresses = async () => {
  await dbConnect();
  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  const addresses = (await ShippingAddress.find({ userId }).lean()) as any[];
  if (!addresses) return null;

  return addresses.map((a) => ({
    id: a._id.toString(),
    name: a.name,
    email: a.email,
    address: a.address,
    city: a.city,
    postalCode: a.postalCode,
    country: a.country,
    isDefault: false,
  }));
};
