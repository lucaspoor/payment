// app/pagina/page.tsx (Server Component)
import { getPayload } from "payload";
import config from "@payload-config";
import { TuComponenteCliente } from "./clientPayload";
import { Product } from "payload-types";

export default async function Page() {
  const payload = await getPayload({ config });

  const { docs }: { docs: Product[] } = await payload.find({
    collection: "products",
  });

  if (!docs) {
    return <div>No se encontraron productos</div>;
  }

  // ✅ Los datos llegan listos al cliente
  return <TuComponenteCliente items={docs} />;
}
