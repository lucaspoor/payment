"use client";

import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

// public key
initMercadoPago("APP_USR-9f33c069-ae11-4f55-b9e7-294dd5959c5a");

export default function Home() {
    const [preferenceId, setPreferenceId] = useState(null);

  const comprar = async () => {
    const res = await fetch("/api/create-preference", {
      method: "POST"
    });

    const data = await res.json();

    setPreferenceId(data.id);
  };

  return (
    <div style={{padding:40}}>

      <h1>Polera Negra</h1>

      <p>Precio: $20.000</p>

      <button onClick={comprar}>
        Comprar ahora
      </button>

      {preferenceId && (
        <Wallet initialization={{ preferenceId }} />
      )}

    </div>
  );
}
