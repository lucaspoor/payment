import type { Product } from "@/types/product";

/**
 * Mock data — reemplazá este array por un fetch a tu API/DB.
 * La estructura es idéntica a lo que devolverías desde Supabase, Prisma, etc.
 */
export const products: Product[] = [
  {
    id: "1",
    name: "Crop Top Rebelde",
    price: 34990,
    category: "tops",
    image: "/images/zapatillas.jpeg",
    isNew: true,
  },
  {
    id: "2",
    name: "Pantalón Cargo Nocturno",
    price: 59990,
    originalPrice: 74990,
    category: "bottoms",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
  },
  {
    id: "3",
    name: "Vestido Asimétrico",
    price: 79990,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: "4",
    name: "Bomber Oversized",
    price: 89990,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
  },
  {
    id: "5",
    name: "Cadena Urbana",
    price: 19990,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop",
  },
  {
    id: "6",
    name: "Top Mesh Transparente",
    price: 29990,
    category: "tops",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
    isSoldOut: true,
  },
  {
    id: "7",
    name: "Falda Plisada Nocturna",
    price: 49990,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: "8",
    name: "Chaqueta Cuero Vintage",
    price: 129990,
    originalPrice: 159990,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
  },
];
