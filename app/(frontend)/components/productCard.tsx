import type { Product } from "@/(frontend)/types/product";

/**
 * Card individual de producto.
 *
 * Decisiones de diseño:
 * - Sin border-radius (--radius: 0px) → estética angular de la marca
 * - Hover con scale sutil en la imagen, no en toda la card
 * - Badges con colores semánticos del design system
 * - Precio formateado en CLP (ajustá al currency que uses)
 */
interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(price);
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group cursor-pointer">
      {/* Imagen con overlay */}
      <div className="relative overflow-hidden aspect-[3/4] bg-card">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary px-3 py-1 font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground">
              Nuevo
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-accent px-3 py-1 font-body text-[10px] tracking-[0.2em] uppercase text-accent-foreground">
              Sale
            </span>
          )}
        </div>

        {/* Sold out overlay */}
        {product.isSoldOut && (
          <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
            <span className="font-display text-2xl text-foreground tracking-widest">
              AGOTADO
            </span>
          </div>
        )}

        {/* Quick action on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-foreground py-3 font-body text-xs tracking-[0.3em] uppercase text-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            Añadir al carrito
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-body text-sm tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-body text-sm text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
