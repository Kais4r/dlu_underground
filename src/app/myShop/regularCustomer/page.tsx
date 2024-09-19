"use client";

import { useEffect, useState } from "react";
import { Customer } from "../../../types/customer"; // Ensure the path is correct
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CustomerOrdersPopup from "@/components/CustomerOrdersPopup";

const CustomersPage = () => {
  const shop = useSelector((state: RootState) => state.shop);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const shopName = shop.shopData?.name;

  useEffect(() => {
    if (!shopName) return; // Skip fetch if shopName is not defined

    async function fetchCustomers() {
      try {
        const response = await fetch(
          "http://localhost:3001/shop/regular-customers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ shopName }), // Send shopName in the request body
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }

        const data: Customer[] = await response.json();
        const sortedCustomers = data.sort(
          (a, b) => b.ordersCount - a.ordersCount
        );
        setCustomers(sortedCustomers);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchCustomers();
  }, [shopName]);

  const handleViewOrders = (userId: string) => {
    setSelectedUserId(userId);
    setShowPopup(true);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(customers);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Regular Customers</h1>
      {customers.length > 0 ? (
        <ul className="space-y-4">
          {customers.map((customer) => (
            <li
              key={customer.customerID}
              className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{customer.name}</h2>
                <p className="text-gray-500">Orders: {customer.ordersCount}</p>
              </div>
              <button
                onClick={() => handleViewOrders(customer.customerID)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Orders
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No customers found</p>
      )}
      {showPopup && selectedUserId && (
        <CustomerOrdersPopup
          userId={selectedUserId}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default CustomersPage;
