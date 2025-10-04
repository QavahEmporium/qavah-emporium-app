// app/profile/wishlist/page.tsx
import WishlistClient from "@/components/profile/wishlist/wishlist-client";
import { BackButton } from "@/components/ui/buttons";

export default async function WishlistPage() {
  // 🔹 Mock data (replace with DB fetch later)
  const wishlist = [
    {
      id: "7",
      name: "Chanel Coco Noir Eau De",
      price: 1899.99,
      category: "fragrances",
      image:
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    },
    {
      id: "8",
      name: "Dior J'adore",
      price: 2499.99,
      category: "fragrances",
      image:
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 md:pt-[64px] md:pb-[72px] px-4 md:px-8 lg:px-20">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-row gap-3 items-center mb-8">
          <BackButton url="/profile" />
          <h1 className="text-2xl font-bold text-lunar-green-800">
            My Wishlist
          </h1>
        </div>
        <WishlistClient products={wishlist} />
      </section>
    </main>
  );
}
