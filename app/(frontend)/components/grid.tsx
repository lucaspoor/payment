import Image from "next/image";

const CollectionGrid = () => {
  return (
    <section id="coleccion" className="px-6 md:px-12 py-24">
      <div className="mb-16 flex items-end justify-between">
        <h2 className="font-display text-7xl md:text-9xl tracking-tight text-[hsl(var(--foreground))] leading-none">
          NUEVA<br />
          <span className="text-stroke-primary">COLECCIÓN</span>
        </h2>
        <span className="hidden md:block font-body text-sm tracking-widest text-[hsl(var(--muted-foreground))] uppercase rotate-90 origin-bottom-right -translate-y-8">
          Scroll →
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Imagen grande */}
        <div className="md:col-span-7 md:row-span-2 group overflow-hidden relative">
          <Image
            src="/images/saga.jpeg"
            alt="Colección fiesta Atractiva"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div>
              <p className="font-display text-4xl text-[hsl(var(--foreground))]">NOCHE ETERNA</p>
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))] tracking-widest uppercase mt-2">Ver colección →</p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="md:col-span-5 group overflow-hidden relative h-[300px] md:h-[350px]">
          <Image
            src="/images/forever.jpeg"
            alt="Detalle de tela Atractiva"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div>
              <p className="font-display text-3xl text-[hsl(var(--foreground))]">TEXTURA</p>
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))] tracking-widest uppercase mt-2">Explorar →</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 group overflow-hidden relative h-[400px] md:h-[450px] md:-mt-12">
          <Image
            src="/images/zapatillas.jpeg"
            alt="Streetwear Atractiva"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div>
              <p className="font-display text-3xl text-[hsl(var(--foreground))]">CALLE</p>
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))] tracking-widest uppercase mt-2">Descubrir →</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
