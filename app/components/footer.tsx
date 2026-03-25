import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer
      id="contacto"
      className="border-t border-border px-6 md:px-12 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-5xl text-foreground mb-4">
            ATRACTIVA
          </p>
          <p className="font-body text-sm text-muted-foreground tracking-wide">
            Moda que rompe esquemas.
            <br />
            Santiago, Chile.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
            Links
          </p>
          <a
            href="#coleccion"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Colección
          </a>
          <a
            href="#manifiesto"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Manifiesto
          </a>
          <a
            href="#"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Tienda
          </a>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Síguenos
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={20} />
            <span className="font-body text-sm">@atractiva</span>
          </a>

          <div className="mt-8">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Newsletter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="tu@email.com"
                className="bg-muted border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground flex-1 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary px-6 py-3 font-body text-xs tracking-widest uppercase text-primary-foreground hover:bg-primary/80 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 ATRACTIVA. Todos los derechos reservados.
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-widest">
          HECHO CON FUEGO 🔥
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
