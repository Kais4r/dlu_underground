"use client";

import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("orderStatus");
  const [activeSubTab, setActiveSubTab] = useState("pending");

  const renderContent = () => {
    if (activeTab === "orderStatus") {
      switch (activeSubTab) {
        case "pending":
          return <p>Displaying orders that are currently pending.</p>;
        case "processing":
          return <p>Displaying orders that are currently being processed.</p>;
        case "shipped":
          return <p>Displaying orders that have been shipped.</p>;
        case "delivered":
          return <p>Displaying orders that have been delivered.</p>;
        case "canceled":
          return <p>Displaying orders that have been canceled.</p>;
        default:
          return <p>Select an order status to view orders.</p>;
      }
    } else if (activeTab === "paymentStatus") {
      switch (activeSubTab) {
        case "unpaid":
          return <p>Displaying orders with unpaid status.</p>;
        case "paid":
          return <p>Displaying orders with paid status.</p>;
        case "refunded":
          return <p>Displaying orders with refunded status.</p>;
        default:
          return <p>Select a payment status to view orders.</p>;
      }
    }
    return <p>Select a tab to view content.</p>;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        <div className="space-y-4">
          {/* Order Status Tab */}
          <div>
            <h3 className="text-lg font-medium">Order Status</h3>
            <ul className="mt-2 space-y-2">
              {[
                "pending",
                "processing",
                "shipped",
                "delivered",
                "canceled",
              ].map((status) => (
                <li key={status}>
                  <button
                    onClick={() => {
                      setActiveTab("orderStatus");
                      setActiveSubTab(status);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${
                      activeSubTab === status ? "bg-gray-700" : ""
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Status Tab */}
          <div>
            <h3 className="text-lg font-medium">Payment Status</h3>
            <ul className="mt-2 space-y-2">
              {["unpaid", "paid", "refunded"].map((status) => (
                <li key={status}>
                  <button
                    onClick={() => {
                      setActiveTab("paymentStatus");
                      setActiveSubTab(status);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${
                      activeSubTab === status ? "bg-gray-700" : ""
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Order Management</h1>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {activeTab === "orderStatus" ? "Order Status" : "Payment Status"}
          </h2>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
