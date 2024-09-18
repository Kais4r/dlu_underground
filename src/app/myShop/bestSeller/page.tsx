"use client";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Page() {
  const shop = useSelector((state: RootState) => state.shop);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBestSellers() {
      try {
        const response = await fetch(
          `http://localhost:3001/product/best-sellers-by-shop?brand=${shop.shopData?.name}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        setBestSellers(data);
      } catch (error) {
        // Narrow down the type of error
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchBestSellers();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Best-Selling Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestSellers.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.thumbnailImage}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
              <p className="text-gray-600 mb-2">
                Price: ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-2">
                Total Sales: {product.totalSale}
              </p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
