"use client";

import { useState } from "react";
import { Product } from "payload-types";

type Props = {
  items: Product[]; // o el tipo que genere Payload
};

export function TuComponenteCliente({ items }: Props) {
  console.log("Datos recibidos en cliente:", items);
  const [seleccionado, setSeleccionado] = useState(items[0]);

  return (
    <div>
      <div>
        <h1>Productos desde Payload</h1>
        {items.map((item) => (
          <div key={item.id} onClick={() => setSeleccionado(item)}>
            {item.name} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
}
