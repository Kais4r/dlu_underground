"use client";

import { useState, useEffect } from "react";
import { Order } from "@/types/order";
import OrdersList from "@/components/OrdersList";

interface CustomerOrdersPopupProps {
  userId: string; // User ID to fetch orders
  onClose: () => void; // Callback to close the popup
}

export default function CustomerOrdersPopup({
  userId,
  onClose,
}: CustomerOrdersPopupProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("orderStatus");
  const [activeSubTab, setActiveSubTab] = useState("pending");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3001/order/by-customer-id?customerID=${userId}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data: Order[] = await response.json();
        setOrders(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  const renderContent = () => {
    if (activeTab === "orderStatus") {
      const filteredOrders = orders.filter(
        (order) => order.orderStatus === activeSubTab
      );
      return <OrdersList orders={filteredOrders} />;
    } else if (activeTab === "paymentStatus") {
      const filteredOrders = orders.filter(
        (order) => order.paymentStatus === activeSubTab
      );
      return <OrdersList orders={filteredOrders} />;
    } else if (activeTab === "viewAll") {
      return <OrdersList orders={orders} />;
    }
    return <p>Select a tab to view content.</p>;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 md:mx-8 h-[80vh] flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 text-white min-h-full p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Orders</h2>
            <div className="space-y-4">
              {/* View All Tab */}
              <div>
                <button
                  onClick={() => setActiveTab("viewAll")}
                  className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${
                    activeTab === "viewAll" ? "bg-gray-700" : ""
                  }`}
                >
                  View All
                </button>
              </div>

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
          <main className="flex-1 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Order Management</h1>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {activeTab === "orderStatus"
                  ? "Order Status"
                  : activeTab === "paymentStatus"
                  ? "Payment Status"
                  : "All Orders"}
              </h2>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">Error: {error}</p>
              ) : (
                renderContent()
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
