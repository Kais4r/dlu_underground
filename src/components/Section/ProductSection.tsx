"use client";
import demoProducts, { Product } from "@/app/api/Product";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]); // Explicitly set type to Product[]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from the API
    const fetchProducts = async () => {
      try {
        // TODO: Replace with your actual endpoint
        const response = await fetch("http://localhost:3001/product/all");
        const data = await response.json();
        if (data.success) {
          setProducts(data.products); // Update the state with fetched products
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("An error occurred while fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const notSaledProducts = products.filter((product) => !product.discount);

  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">Look Around</h2>
          <Button className="mt-4">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {notSaledProducts.map((item) => (
            <ProductCard _id={""} key={item.productID} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
