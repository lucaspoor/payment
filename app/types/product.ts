/**
 * Interfaz del producto.
 * Cuando conectes la base de datos, este tipo se mantiene igual —
 * solo cambiás de dónde viene la data (fetch en vez de import estático).
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number; // Para mostrar descuento
  category: "tops" | "bottoms" | "dresses" | "accessories" | "outerwear";
  image: string;
  isNew?: boolean;
  isSoldOut?: boolean;
}

export type SortOption = "newest" | "price-asc" | "price-desc";

export const CATEGORIES = [
  { value: "all", label: "Todo" },
  { value: "tops", label: "Tops" },
  { value: "bottoms", label: "Bottoms" },
  { value: "dresses", label: "Vestidos" },
  { value: "outerwear", label: "Outerwear" },
  { value: "accessories", label: "Accesorios" },
] as const;
