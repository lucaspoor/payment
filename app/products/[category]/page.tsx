import { products } from "@/data/products";
import ProductsClient from "./ProductsClient";

type CategoryPageProps = {
  params: {
    category: string;
  };
};
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  return <ProductsClient initialCategory={category} products={products} />;
}
