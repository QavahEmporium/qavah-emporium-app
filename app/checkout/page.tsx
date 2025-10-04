import CheckoutForm from "@/components/checkout/checkout-form";
import { getAddresses } from "@/data/address";
import { getSessionUser } from "@/data/user";
import { IUser } from "@/definitions/user";

export default async function CheckoutPage() {
  const user = (await getSessionUser()) as IUser;
  const userAddresses = (await getAddresses()) || [];

  return (
    <main className="bg-lunar-green-50 text-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 pt-6 md:px-12 lg:px-24 xl:px-32 text-center">
        <h1 className="text-3xl text-lunar-green-800 font-bold tracking-tight">
          Checkout
        </h1>
      </header>

      <div className="flex-1 mb-20 px-4 py-6 md:px-12 lg:px-24 xl:px-32">
        <CheckoutForm user={user} userAddresses={userAddresses} />
      </div>
    </main>
  );
}
