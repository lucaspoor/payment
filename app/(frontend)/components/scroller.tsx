const MarqueeBanner = () => {
  const words = "FIESTA · VERANO · SENSUALIDAD · RUPTURA · LIBERTAD · ATRACTIVA · NOCHE · DESEO · FIESTA · VERANO · SENSUALIDAD · RUPTURA · LIBERTAD · ATRACTIVA · NOCHE · DESEO · ";
  
  return (
    <section className="py-2  overflow-hidden bg-red-900">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-display text-3xl  tracking-[0.1em] text-primary-foreground">
          {words}
        </span>
        <span className="font-display text-3xl  tracking-[0.2em] text-primary-foreground">
          {words}
        </span>
      </div>
    </section>
  );
};

export default MarqueeBanner;
