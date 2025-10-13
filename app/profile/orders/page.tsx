// app/profile/orders/page.tsx
import OrdersClient from "@/components/profile/order/orders-list";
import { BackButton } from "@/components/ui/buttons";
import { listOrders } from "@/data/order";

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;
  const orders = await listOrders();

  return (
    <main className="h-screen bg-gray-50 md:pt-[74px] md:pb-[92px] flex justify-center overflow-y-hidden">
      <section className="w-full max-w-4xl md:bg-white md:rounded-xl md:shadow-md md:p-6">
        <div className="flex flex-row gap-3 items-center mb-8 p-4">
          <BackButton url={redirect || "/profile"} />
          <h1 className="text-2xl font-bold text-lunar-green-800">My Orders</h1>
        </div>

        <OrdersClient orders={orders || []} />
      </section>
    </main>
  );
}
