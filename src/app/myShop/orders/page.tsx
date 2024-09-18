"use client";

import { Order } from "../../../types/order";
import { useState, useEffect } from "react";
import OrdersList from "@/components/OrdersList";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Page() {
  const shop = useSelector((state: RootState) => state.shop);
  const [activeTab, setActiveTab] = useState("orderStatus");
  const [activeSubTab, setActiveSubTab] = useState("pending");

  // Explicitly define orders as an array of Order objects
  const [orders, setOrders] = useState<Order[]>([]);

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(
        `http://localhost:3001/order/by-brand?brand=${shop.shopData?.name}`
      );
      const data = await res.json();
      setOrders(data); // Set the orders
    };

    fetchOrders();
  }, [shop.shopData?.name]);

  const renderContent = () => {
    if (activeTab === "orderStatus") {
      const filteredOrders = orders.filter(
        (order: Order) => order.orderStatus === activeSubTab
      );
      return <OrdersList orders={filteredOrders} />;
    } else if (activeTab === "paymentStatus") {
      const filteredOrders = orders.filter(
        (order: Order) => order.paymentStatus === activeSubTab
      );
      return <OrdersList orders={filteredOrders} />;
    } else if (activeTab === "viewAll") {
      return <OrdersList orders={orders} />;
    }
    return <p>Select a tab to view content.</p>;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
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
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Order Management</h1>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {activeTab === "orderStatus"
              ? "Order Status"
              : activeTab === "paymentStatus"
              ? "Payment Status"
              : "All Orders"}
          </h2>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
