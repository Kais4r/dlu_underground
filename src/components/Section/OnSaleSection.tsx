"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ProductCard from "../ProductCard";

type Product = {
  _id: string;
  name: string;
  price: number;
  discount?: number;
  thumbnailImage: string; // Changed to singular `thumbnailImage`
  // Add other fields if necessary, like description, category, etc.
};

export default function OnSaleSection() {
  const [products, setProducts] = useState<Product[]>([]); // Explicitly set type to Product[]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from the API
    const fetchProducts = async () => {
      try {
        // TODO: Replace with your actual endpoint
        const response = await fetch("http://localhost:3001/product/on-sale");
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

  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">On Sale</h2>
          <Button className="mt-4">View All</Button>
        </div>
        <div className="flex flex-row gap-4 items-center">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
