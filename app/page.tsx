"use client";

import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import ProductCard from "./components/card";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import MarqueeBanner from "./components/scroller";
import CollectionGrid from "./components/grid";
import ManifestoSection from "./components/manifiesto";
import ProductsSection from "./components/productSection";

// public key
initMercadoPago("APP_USR-9f33c069-ae11-4f55-b9e7-294dd5959c5a");

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
}

export default function Home() {
  const [preferenceId, setPreferenceId] = useState(null);

  const exampleProduct: Product = {
  id: '1',
  name: 'Camiseta de algodón',
  description: 'Camiseta de algodón de alta calidad',
  price: 19.99,
  discount: 20,
  image: 'https://example.com/camiseta.jpg',
};


  const comprar = async () => {
    const res = await fetch("/api/create-preference", {
      method: "POST",
    });

    const data = await res.json();

    setPreferenceId(data.id);
  };

  return (
    <div>
      <Navbar />
     <HeroSection />
    {/* <MarqueeBanner/> */}
    <CollectionGrid />
    <ManifestoSection/>
    <ProductsSection />

      <div style={{ padding: 40 }}>
        <h1>Polera Negra</h1>

        <p>Precio: $20.000</p>

        <button onClick={comprar}>Comprar ahora</button>

        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
      <ProductCard product={exampleProduct} />
    </div>
  );
}
