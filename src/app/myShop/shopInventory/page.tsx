"use client"; // Ensures this component is rendered on the client-side

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Product {
  productID: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
}

export default function Page() {
  const shop = useSelector((state: RootState) => state.shop);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/product/stocked-products-by-shop?brand=${shop.shopData?.name}`
        ); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Stocked Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.productID}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg"
            >
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600">Brand: {product.brand}</p>
              <p className="text-sm text-gray-500">
                Quantity: {product.quantity}
              </p>
              <p className="text-lg font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
