import BannerSection from "@/components/Section/BannerSection";
import OnSaleSection from "@/components/Section/OnSaleSection";
import ProductSection from "@/components/Section/ProductSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BannerSection />
      <OnSaleSection />
      <ProductSection />
    </main>
  );
}
