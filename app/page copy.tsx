import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";
import React from "react";

// Type definition for a single product
type Product = {
  id: number | "promo";
  brand?: string;
  name?: string;
  price?: number;
  imageUrl?: string;
  isNew?: boolean;
  isSale?: string;
  colors?: string[];
};

// Mock Product Data
const products: Product[] = [
  {
    id: 1,
    brand: "MARMAR COPENHAGEN",
    name: "The Oversized Denim Dungarees",
    price: 22,
    imageUrl: "https://placehold.co/400x500/f6e9d9/7c5a43?text=Kids+Wear",
    isNew: true,
    colors: ["#a1887f", "#e0e0e0", "#f5f5f5"],
  },
  {
    id: 2,
    brand: "MARMAR COPENHAGEN",
    name: "The Ribbed Legging",
    price: 22,
    imageUrl: "https://placehold.co/400x500/d7ccc8/7c5a43?text=Kids+Wear",
    isNew: false,
    colors: ["#c5b3a8", "#a39187", "#f5f5f5"],
  },
  {
    id: 3,
    brand: "MARMAR COPENHAGEN",
    name: "Ribbed legging honey stripe",
    price: 22,
    imageUrl: "https://placehold.co/400x500/f5f5f5/7c5a43?text=Kids+Wear",
    isNew: false,
    isSale: "-10%",
    colors: ["#eaddc7", "#ffffff", "#a89d94"],
  },
  {
    id: 4,
    brand: "MARMAR COPENHAGEN",
    name: "The Muslin Bodysuit",
    price: 22,
    imageUrl: "https://placehold.co/400x500/f3e5d8/7c5a43?text=Kids+Wear",
    isNew: false,
    colors: ["#f0e2d4", "#dcd4cb"],
  },
  {
    id: 5,
    brand: "MARMAR COPENHAGEN",
    name: "Ribbed legging honey stripe",
    price: 22,
    imageUrl: "https://placehold.co/400x500/37474f/eceff1?text=Kids+Wear",
    isNew: false,
    isSale: "-10%",
    colors: ["#455a64", "#78909c"],
  },
  {
    id: 6,
    brand: "MARMAR COPENHAGEN",
    name: "The Muslin Bodysuit",
    price: 22,
    imageUrl: "https://placehold.co/400x500/a1887f/f5f5f5?text=Kids+Wear",
    isNew: false,
    colors: ["#a1887f", "#d7ccc8"],
  },
  {
    id: 7,
    brand: "MARMAR COPENHAGEN",
    name: "The Oversized Denim Dungarees",
    price: 22,
    imageUrl: "https://placehold.co/400x500/8d6e63/e8e2dd?text=Kids+Wear",
    isNew: false,
    colors: ["#8d6e63", "#a1887f", "#d7ccc8"],
  },
  // This will be our promo block
  {
    id: "promo",
  },
  {
    id: 8,
    brand: "MARMAR COPENHAGEN",
    name: "The Oversized Denim Dungarees",
    price: 22,
    imageUrl: "https://placehold.co/400x500/eeeeee/757575?text=Kids+Wear",
    isNew: true,
    colors: ["#eeeeee", "#bdbdbd", "#757575"],
  },
  {
    id: 9,
    brand: "MARMAR COPENHAGEN",
    name: "The Ribbed Legging",
    price: 22,
    imageUrl: "https://placehold.co/400x500/424242/f5f5f5?text=Kids+Wear",
    isNew: false,
    colors: ["#424242", "#757575", "#e0e0e0"],
  },
];

// Sub-Components
const Header: React.FC = () => (
  <header className="bg-white text-stone-700 font-sans">
    <div className="text-center text-xs py-1.5 bg-stone-100 border-b border-stone-200">
      <p>pchela. meet the beauty of bodys.</p>
    </div>

    {/* Desktop Header */}
    <div className="hidden lg:block border-b border-stone-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs text-stone-500">
        <div>
          <a
            href="#"
            className="hover:text-stone-800 pr-4 border-r border-stone-200 mr-4"
          >
            O pchela
          </a>
          <a
            href="#"
            className="hover:text-stone-800 pr-4 border-r border-stone-200 mr-4"
          >
            Poradíme vám
          </a>
          <a
            href="#"
            className="hover:text-stone-800 pr-4 border-r border-stone-200 mr-4"
          >
            Značky
          </a>
          <a href="#" className="hover:text-stone-800">
            Kontakt
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center hover:text-stone-800">
            <User size={16} className="mr-1" /> A
          </a>
          <a href="#" className="flex items-center hover:text-stone-800">
            <Heart size={16} />
          </a>
          <a
            href="#"
            className="relative flex items-center hover:text-stone-800"
          >
            <ShoppingBag size={16} />
            <span className="absolute -top-1 -right-2 bg-orange-400 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              14
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="hidden lg:block container mx-auto px-4">
      <div className="py-4 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-wider text-stone-800">
          pchela
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-orange-400">
            SEZÓNNE
          </a>
          <a href="#" className="hover:text-orange-400">
            NOVINKA
          </a>
          <a href="#" className="hover:text-orange-400">
            DIEVČATÁ
          </a>
          <a href="#" className="hover:text-orange-400">
            CHLAPCI
          </a>
          <a href="#" className="hover:text-orange-400">
            DOPLNKY
          </a>
          <a href="#" className="hover:text-orange-400">
            VÝPREDAJ
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Search
            size={20}
            className="text-stone-500 hover:text-stone-800 cursor-pointer"
          />
        </div>
      </div>
    </div>

    {/* Mobile Header */}
    <div className="lg:hidden p-4 flex justify-between items-center border-b border-stone-200">
      <button>
        <Menu size={24} />
      </button>
      <div className="text-2xl font-bold tracking-wider text-stone-800">
        pchela
      </div>
      <div className="flex items-center space-x-4">
        <Search size={20} />
        <a href="#" className="relative flex items-center hover:text-stone-800">
          <ShoppingBag size={20} />
          <span className="absolute -top-1 -right-2 bg-orange-400 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            14
          </span>
        </a>
      </div>
    </div>
  </header>
);

const Breadcrumbs: React.FC = () => (
  <nav className="text-xs text-stone-500 mb-4">
    <a href="#" className="hover:underline">
      Úvodná
    </a>
    <span className="mx-1">/</span>
    <a href="#" className="hover:underline">
      E-shop
    </a>
    <span className="mx-1">/</span>
    <span className="text-stone-800">Bundy, kabáty</span>
  </nav>
);

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="group relative">
    <div className="relative bg-stone-100 rounded-md overflow-hidden aspect-[4/5]">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
      />
      <button className="absolute top-2 right-2 p-1.5 bg-white/70 rounded-full hover:bg-white transition-colors">
        <Heart size={18} className="text-stone-600" />
      </button>
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-white text-stone-700 text-xs px-2 py-1 rounded-full font-medium">
          Novinka
        </span>
      )}
      {product.isSale && (
        <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-full font-medium">
          {product.isSale}
        </span>
      )}
      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-stone-800 text-sm font-semibold px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-300 whitespace-nowrap shadow-md">
        Rýchly nákup
      </button>
    </div>
    <div className="mt-3 text-center">
      <div className="flex justify-center items-center space-x-1.5 mb-2">
        {product.colors?.map((color, index) => (
          <span
            key={index}
            className="block w-4 h-4 rounded-full border border-stone-200"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
      <p className="text-xs text-stone-500 uppercase tracking-wider">
        {product.brand}
      </p>
      <h3 className="text-sm font-medium text-stone-800 mt-1">
        {product.name}
      </h3>
      <p className="text-sm font-semibold text-stone-900 mt-1">
        {product.price} €
      </p>
    </div>
  </div>
);

const PromoBlock: React.FC = () => (
  <div className="relative bg-stone-100 rounded-md overflow-hidden aspect-[4/5] flex items-center justify-center text-center text-stone-700 p-4 col-span-2 md:col-span-1">
    <img
      src="https://placehold.co/400x500/e6dac8/7c5a43?text=Promo+BG"
      alt="Promo background"
      className="absolute inset-0 w-full h-full object-cover opacity-70"
    />
    <div className="relative z-10">
      <p className="text-xs uppercase tracking-widest">
        fall winter collection
      </p>
      <h2 className="text-2xl font-medium my-2">
        Every moment is a collection
      </h2>
      <button className="mt-4 bg-white text-stone-800 text-sm font-semibold px-6 py-2 rounded-full shadow-md hover:bg-stone-50 transition">
        Zobraziť produkty
      </button>
    </div>
  </div>
);

const MobileCategoryFilters: React.FC = () => {
  const categories = [
    "Bundy, kabáty",
    "Svetre, saká",
    "Tričká",
    "Šaty, overaly",
    "Dlouhý rukáv",
    "Sukně",
    "Body",
  ];
  return (
    <div className="lg:hidden pb-4 mb-4 border-b border-stone-200">
      <div className="flex space-x-3 overflow-x-auto -mx-4 px-4 pb-2">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`py-1.5 px-4 rounded-full text-sm font-medium whitespace-nowrap ${
              i === 0
                ? "bg-stone-800 text-white"
                : "bg-stone-100 text-stone-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Page Component
export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Breadcrumbs />
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-medium text-stone-800">
            Bundy, kabáty <span className="text-stone-500">(268)</span>
          </h1>
        </div>

        {/* Filters and Sorting */}
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center space-x-2 border border-stone-300 rounded-full px-4 py-2 text-sm font-medium hover:bg-stone-100 transition">
            <SlidersHorizontal size={16} />
            <span>Zobraziť filter</span>
            <span className="bg-stone-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              4
            </span>
          </button>
          <button className="flex items-center space-x-2 border border-stone-300 rounded-full px-4 py-2 text-sm font-medium hover:bg-stone-100 transition">
            <span>Najnovšie</span>
            <ChevronDown size={16} />
          </button>
        </div>

        <MobileCategoryFilters />

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {products.map((product) =>
            product.id === "promo" ? (
              <PromoBlock key="promo" />
            ) : (
              <ProductCard key={product.id} product={product} />
            )
          )}
        </div>
      </main>
    </div>
  );
}
