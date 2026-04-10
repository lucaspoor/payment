const ManifestoSection = () => {
  return (
    <section id="manifiesto" className="px-6 md:px-12 py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <p className="font-display text-[30vw] leading-none" style={{ color: 'hsl(30 8% 16% / 0.15)' }}>A.</p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-8">
          Nuestro manifiesto
        </p>

        <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-foreground mb-12">
          NO SEGUIMOS<br />
          TENDENCIAS.<br />
          <span className="text-primary">LAS CREAMOS.</span>
        </h2>

        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Atractiva nace de la rebeldía de querer vestir diferente.
          De las noches que no terminan, del verano eterno que llevamos dentro.
          No diseñamos ropa — diseñamos actitud.
        </p>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#coleccion"
            className="border border-foreground px-10 py-4 font-body text-sm tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Ver colección
          </a>
          <a
            href="#contacto"
            className="border border-primary bg-primary px-10 py-4 font-body text-sm tracking-[0.3em] uppercase text-primary-foreground hover:bg-transparent hover:text-primary transition-all duration-300"
          >
            Únete
          </a>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
