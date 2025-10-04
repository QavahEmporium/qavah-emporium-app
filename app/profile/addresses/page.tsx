// app/profile/addresses/page.tsx
import AddressesClient from "@/components/profile/addresses/addresses-client";
import { BackButton } from "@/components/ui/buttons";
import { getAddresses } from "@/data/address";

export default async function AddressesPage() {
  const userAddresses = (await getAddresses()) || [];

  return (
    <main className="h-screen bg-gray-50 md:pt-[74px] md:pb-[92px] flex justify-center overflow-y-hidden">
      <section className="w-full max-w-3xl md:bg-white md:rounded-xl md:shadow-md p-4 md:p-6">
        <div className="flex flex-row gap-3 items-center mb-8">
          <BackButton url="/profile" />
          <h1 className="text-2xl font-bold text-lunar-green-800">
            My Addresses
          </h1>
        </div>
        <AddressesClient initialAddresses={userAddresses} />
      </section>
    </main>
  );
}
