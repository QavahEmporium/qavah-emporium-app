import { babyProducts } from "@/constants/baby-products"; // Adjust path if needed

// Fetch all baby products (simulating an API call)
export async function getBabyProducts() {
  // Simulate a delay (optional, for realism)
  await new Promise((resolve) => setTimeout(resolve, 300));

  return babyProducts;
}

// Fetch a single baby product by ID
export async function getBabyProduct(id: string) {
  const product = babyProducts.find((p) => p.id === Number(id));
  return product || null;
}

// Fetch related baby products (same category, excluding current)
export async function getRelatedBabyProducts(
  category: string,
  excludeId: number
) {
  const related = babyProducts
    .filter((p) => p.category === category && p.id !== excludeId)
    .slice(0, 4);

  return related;
}

// Paginated + filtered baby product list
export async function getBabyProductList({
  page,
  search,
  category,
  limit,
}: {
  page: number;
  search?: string;
  category?: string;
  limit: number;
}) {
  const skip = (page - 1) * limit;

  let filtered = babyProducts;

  if (search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  const paginated = filtered.slice(skip, skip + limit);

  return {
    products: paginated,
    total: filtered.length,
    page,
    limit,
  };
}
