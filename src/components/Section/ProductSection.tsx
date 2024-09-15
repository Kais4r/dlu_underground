import demoProducts from "@/app/api/Product";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../ProductCard";

export default function ProductSection() {
  const demoNotSaleProducts = demoProducts.filter((item) => !item.discount);
  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">Look Around</h2>
          <Button className="mt-4">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {demoNotSaleProducts.map((item) => (
            <ProductCard key={item.productID} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
