import ProductListingClient from "@/components/products/product-listing-client";
import { getBabyProductList } from "@/data/baby-data";
import { getProductList } from "@/data/products";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; search?: string }>;
}) {
  const searchParamsObj = await searchParams;
  const { category, search } = searchParamsObj;
  const page = Number(searchParamsObj.page) || 1;
  const limit = 12;

  const data = await getBabyProductList({ page, category, search, limit });

  return (
    <main className="flex-1 px-4 sm:px-8 md:px-8 lg:px-36 xl:px-52 py-10">
      <ProductListingClient
        products={data.products}
        total={data.total}
        limit={limit}
        currentPage={page}
        category={category}
        search={search}
      />
    </main>
  );
}
