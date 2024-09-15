import BannerSection from "@/components/Section/BannerSection";
import OnSaleSection from "@/components/Section/OnSaleSection";
import ProductSection from "@/components/Section/ProductSection";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <BannerSection />
      <OnSaleSection />
      <ProductSection />
    </main>
  );
}
