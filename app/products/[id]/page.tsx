import { notFound } from "next/navigation";
import { getProduct, getProducts, getRelatedProducts } from "@/data/products";
import { dummyReviews } from "@/constants/products";

import { Breadcrumbs } from "@/components/products/[id]/product-breadcrumbs";
import { ProductImage } from "@/components/products/[id]/product-image";
import { ProductInfo } from "@/components/products/[id]/product-info";
import { ReviewsSection } from "@/components/products/[id]/product-reviews";
import { RelatedProducts } from "@/components/products/[id]/product-related";
import { getBabyProduct, getRelatedBabyProducts } from "@/data/baby-data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getBabyProduct(id);
  if (!product) return notFound();

  const related = await getRelatedBabyProducts(product.category, product.id);

  return (
    <main className="min-h-screen bg-white text-black sm:px-8 lg:px-20 xl:px-36 2xl:px-52 md:py-12">
      {/* Breadcrumb */}
      <div className="hidden md:block font-raleway font-semibold">
        <Breadcrumbs title={product.title} />
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <ProductImage src={product.thumbnail} title={product.title} />
        <ProductInfo product={product} />
      </div>

      <div className="px-4">
        {/* Reviews */}
        <ReviewsSection reviews={dummyReviews} />

        {/* Related */}
        {related.length > 0 && <RelatedProducts products={related} />}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}
