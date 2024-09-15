import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import demoProducts from "@/app/api/Product";
import ProductCard from "../ProductCard";

export default function OnSaleSection() {
  const demoSaleProduct = demoProducts.filter((item) => item.discount);
  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">On Sale</h2>
          <Button className="mt-4">View All</Button>
        </div>
        <div className="flex flex-row gap-4 items-center">
          {demoSaleProduct.slice(0, 4).map((item) => (
            <ProductCard key={item.productID} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
