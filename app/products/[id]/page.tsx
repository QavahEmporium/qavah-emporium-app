import { notFound } from "next/navigation";
import { getProduct, getProducts, getRelatedProducts } from "@/data/products";
import { dummyReviews } from "@/constants/products";

import { Breadcrumbs } from "@/components/products/[id]/product-breadcrumbs";
import { ProductImage } from "@/components/products/[id]/product-image";
import { ProductInfo } from "@/components/products/[id]/product-info";
import { ReviewsSection } from "@/components/products/[id]/product-reviews";
import { RelatedProducts } from "@/components/products/[id]/product-related";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);
  if (!product) return notFound();

  const related = await getRelatedProducts(product.category, product.id);

  return (
    <main className="min-h-screen bg-lunar-green-50 text-black px-4 sm:px-8 lg:px-20 xl:px-36 2xl:px-52 py-12">
      {/* Breadcrumb */}
      <Breadcrumbs title={product.title} />

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <ProductImage src={product.thumbnail} title={product.title} />
        <ProductInfo product={product} />
      </div>

      {/* Reviews */}
      <ReviewsSection reviews={dummyReviews} />

      {/* Related */}
      {related.length > 0 && <RelatedProducts products={related} />}
    </main>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}
