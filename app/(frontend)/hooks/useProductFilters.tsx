"use client";

import { useState, useMemo } from "react";
import type { Product, SortOption } from "@/(frontend)/types/product";

/**
 * Custom hook que encapsula TODA la lógica de filtrado y ordenamiento.
 *
 * ¿Por qué un hook separado?
 * - Separa lógica de negocio de la UI (Single Responsibility)
 * - Es reutilizable: podés usarlo en una página de búsqueda, un modal, etc.
 * - Es testeable: podés testearlo sin renderizar componentes
 * - Cuando migres a DB, solo cambiás el source de `products`
 */
export function useProductFilters(products: Product[]) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const filtered = useMemo(() => {
    let result = [...products];

    // Filtrar por categoría
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Ordenar
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        // Los nuevos primero, luego el resto en orden original
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [products, activeCategory, sortBy]);

  return {
    filtered,
    activeCategory,
    setActiveCategory,
    sortBy,
    setSortBy,
  };
}
