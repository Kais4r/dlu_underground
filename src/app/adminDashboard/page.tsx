import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center pt-8">
      <div className="space-y-4">
        <Link
          href="/adminDashboard/manageShop"
          className="block px-6 py-3 text-lg font-semibold text-gray-300 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-colors"
        >
          Manage Shop
        </Link>
        <Link
          href="/adminDashboard/manageUser"
          className="block px-6 py-3 text-lg font-semibold text-gray-300 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-colors"
        >
          Manage User
        </Link>
        <Link
          href="/adminDashboard/manageShopEvents"
          className="block px-6 py-3 text-lg font-semibold text-gray-300 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-colors"
        >
          Manage Shop Events
        </Link>
        <Link
          href="/adminDashboard/analytics"
          className="block px-6 py-3 text-lg font-semibold text-gray-300 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-colors"
        >
          Analytics
        </Link>
      </div>
    </div>
  );
}
