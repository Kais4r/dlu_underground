"use client";

import { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  totalSale: number;
  totalSaleValue: number;
  dateAdded: string;
  dateModified: string;
  status: string;
  rating: number;
};

type AnalyticsData = {
  products: Product[];
  platformTotalSale: number;
  platformTotalSaleValue: number;
};

export default function Page() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:3001/product/platform/all") // Adjust the endpoint based on your backend routing
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching analytics data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center mt-10">Failed to load data</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Platform Analytics</h1>

      {/* Platform Totals */}
      <div className="mb-6 bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Total Sales Overview</h2>
        <p className="text-lg">
          <strong>Platform Total Sales:</strong> {data.platformTotalSale}
        </p>
        <p className="text-lg">
          <strong>Platform Total Sales Value:</strong> $
          {data.platformTotalSaleValue.toFixed(2)}
        </p>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Product ID</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Total Sale</th>
              <th className="px-4 py-2 border-b">Total Sale Value</th>
              <th className="px-4 py-2 border-b">Date Added</th>
              <th className="px-4 py-2 border-b">Date Modified</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="px-4 py-2 border-b">{product._id}</td>
                <td className="px-4 py-2 border-b">{product.name}</td>
                <td className="px-4 py-2 border-b">{product.totalSale}</td>
                <td className="px-4 py-2 border-b">
                  ${product.totalSaleValue.toFixed(2)}
                </td>
                <td className="px-4 py-2 border-b">
                  {new Date(product.dateAdded).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border-b">
                  {new Date(product.dateModified).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border-b capitalize">
                  {product.status}
                </td>
                <td className="px-4 py-2 border-b">{product.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
