//"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Shop Management</h1>
        <div className="space-y-4">
          <Link
            href="/myShop/addProduct"
            className="block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Add a product
          </Link>
          <Link
            href="/myShop/orders"
            className="block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            View orders
          </Link>
          <Link
            href="/myShop/regularCustomer"
            className="block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Regular customer
          </Link>
          <Link
            href="/myShop/shopInventory"
            className="block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Shop inventory
          </Link>
          <Link
            href="/myShop/bestSeller"
            className="block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Best seller product
          </Link>
        </div>
      </div>
    </div>
  );
}
