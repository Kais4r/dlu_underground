"use client";

import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  discount?: number;
  thumbnailImage: string;
  category: string;
};

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Sports",
  "Toys",
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]); // Explicitly set type to Product[]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from the API
    const fetchProducts = async () => {
      try {
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

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catalog</h1>
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}
