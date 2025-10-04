// lib/data.ts

export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=16", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  const { products } = await res.json();
  return products;
}

export async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getRelatedProducts(category: string, excludeId: number) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${encodeURIComponent(
      category
    )}?limit=8`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) return [];
  const { products } = await res.json();
  return products.filter((p: any) => p.id !== excludeId).slice(0, 4);
}

export async function getProductList({
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
  let baseUrl = "https://dummyjson.com/products";
  let url = `${baseUrl}?limit=${limit}&skip=${skip}`;

  if (search) {
    url = `${baseUrl}/search?q=${encodeURIComponent(
      search
    )}&limit=${limit}&skip=${skip}`;
  } else if (category) {
    url = `${baseUrl}/category/${encodeURIComponent(
      category
    )}?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
