import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import CollectionGrid from "./components/grid";
import ManifestoSection from "./components/manifiesto";
import ProductsSection from "./components/productSection";
import FooterSection from "./components/footer";
import ProductsPage from "./components/test-payload";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CollectionGrid />
      <ManifestoSection />
      <ProductsPage />
      <FooterSection />
    </div>
  );
}
