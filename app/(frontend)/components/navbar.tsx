"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          className="font-display text-3xl md:text-4xl tracking-tight text-white"
        >
          ATRACTIVA
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase text-foreground">
          <Link
            href="/products/all"
            className="hover-glitch transition-opacity hover:opacity-60"
          >
            Colección
          </Link>
          <Link
            href="#manifiesto"
            className="hover-glitch transition-opacity hover:opacity-60"
          >
            Manifiesto
          </Link>
          <Link
            href="#contacto"
            className="hover-glitch transition-opacity hover:opacity-60"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden">
          <Link
            href="#coleccion"
            onClick={() => setIsOpen(false)}
            className="font-display text-5xl tracking-wider text-foreground"
          >
            COLECCIÓN
          </Link>
          <Link
            href="#manifiesto"
            onClick={() => setIsOpen(false)}
            className="font-display text-5xl tracking-wider text-foreground"
          >
            MANIFIESTO
          </Link>
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="font-display text-5xl tracking-wider text-foreground"
          >
            CONTACTO
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
