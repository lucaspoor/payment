// components/HeroSection.tsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/idea.jpg"
          alt="Atractiva fashion editorial"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-16 px-6 md:px-12">
        <div className="mb-8">
          <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight text-foreground opacity-100 animate-fade-in">
            ATRAC
            <span className="text-stroke">TIVA</span>
          </h1>
        </div>

        <div className="flex items-end justify-between">
          <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground max-w-xs opacity-100 animate-fade-in [animation-delay:0.3s]">
            Rompiendo las reglas del vestir — SS26
          </p>
          {/* <div className="hidden md:block opacity-100 animate-fade-in [animation-delay:0.5s]">
            <p className="font-display text-6xl text-primary -rotate-12 origin-bottom-right">
              ¡VIVE!
            </p>
          </div> */}
        </div>
      </div>

      <div className="absolute top-0 right-[20%] w-px h-full bg-primary/30 -rotate-12 origin-top" />
    </section>
  );
};

export default HeroSection;
