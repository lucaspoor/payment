"use client";

import { useEffect, useState } from "react";
import { useProductFilters } from "@/(frontend)/hooks/useProductFilters";
import ProductCard from "@/(frontend)/components/productCard";
import { CATEGORIES } from "@/(frontend)/types/product";
import Navbar from "@/(frontend)/components/navbar";
import Link from "next/link";

type ProductClientProps = {
  products: any[];
  initialCategory: string;
};

export default function ProductsClient({
  products,
  initialCategory,
}: ProductClientProps) {
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">(
    "newest",
  );
  const filtered = products.filter((p) =>
    initialCategory === "all" ? true : p.category === initialCategory,
  );

  //   const { filtered, activeCategory, setActiveCategory, sortBy, setSortBy } =
  //     useProductFilters(products);

  //   // 👇 IMPORTANTE: setear categoría al montar
  //   useEffect(() => {
  //     setTimeout(() => setActiveCategory(initialCategory), 500);
  //   }, [initialCategory]);

  //   if (initialCategory !== "all" && activeCategory !== initialCategory) {
  //     return <p>Cargando productos...</p>;
  //   }

  return (
    <section id="productos" className="px-6 md:px-12 py-24">
      <Navbar />
      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            Shop
          </p>
          <h2 className="font-display text-6xl md:text-8xl tracking-tight text-foreground leading-none">
            PRODUCTOS
          </h2>
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-3">
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
            Ordenar:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-transparent border border-border px-4 py-2 font-body text-xs tracking-widest uppercase text-foreground cursor-pointer focus:outline-none focus:border-primary transition-colors"
          >
            <option value="newest">Nuevos</option>
            <option value="price-asc">Precio ↑</option>
            <option value="price-desc">Precio ↓</option>
          </select>
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.value}
            href={`/products/${cat.value}`}
            className={`
              px-6 py-2.5 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 border
              ${
                initialCategory === cat.value
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-transparent border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }
            `}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="font-display text-4xl text-muted-foreground">
            SIN RESULTADOS
          </p>
          <p className="font-body text-sm text-muted-foreground mt-4">
            No hay productos en esta categoría.
          </p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <a
          href="#"
          className="inline-block border border-foreground px-12 py-4 font-body text-sm tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Ver todo el catálogo
        </a>
      </div>
    </section>
  );
}
