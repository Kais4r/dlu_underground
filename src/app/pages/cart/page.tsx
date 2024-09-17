"use client"; // Ensure this component is client-side

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type CartItem = {
  productID: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  thumbnailImage: string;
};

type ShippingAddress = {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
};

export default function Page() {
  const user = useSelector((state: RootState) => state.user);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddress | null>(null);
  const [shippingMethod, setShippingMethod] =
    useState<string>("Standard shipping");
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/buyerCart/items?userID=${user.id}`
        );
        const data = await response.json();

        if (data.success && data.cart) {
          setCartItems(data.cart.items); // Use the correct path to items
        } else {
          setError("Empty cart");
          console.error("Invalid response format:", data);
        }
      } catch (error) {
        setError("An error occurred while fetching cart items.");
        console.error("An error occurred while fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user.id]);

  useEffect(() => {
    setShippingAddress({
      fullName: "John Doe",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      city: "Springfield",
      state: "IL",
      postalCode: "62701",
      country: "USA",
      phoneNumber: "+1-555-123-4567",
    });
  }, []);

  const handleOrder = async () => {
    if (!selectedItem || !shippingAddress) {
      console.error("Selected item or shipping address is missing");
      return;
    }

    try {
      console.log(
        "Attempting to create order with payment method:",
        paymentMethod
      );

      const response = await fetch("http://localhost:3001/order/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerID: user.id,
          products: [selectedItem],
          paymentMethod,
          shippingAddress,
          shippingMethod,
          shippingCost,
          discount,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setOrderStatus("Order created successfully");
        console.log(orderStatus);
      } else {
        setOrderStatus(`Failed to create order: ${data.message}`);
      }
    } catch (error) {
      console.error("Failed to create order:", error);
      setOrderStatus("An error occurred while creating the order.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {user.dluCoin && (
        <p className="text-lg font-medium text-gray-700 mb-4">
          DLU Coin Balance: {parseFloat(user.dluCoin.toString()).toFixed(2)}
        </p>
      )}

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.productID}
              className="flex items-center space-x-4 border-b pb-4"
            >
              <Image
                src={item.thumbnailImage}
                alt={item.name}
                className="w-24 h-24 rounded-md"
                width={100}
                height={100}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Total: ${item.totalPrice}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded font-medium w-full"
                  onClick={() => {
                    setSelectedItem(item);
                    // Open the popup
                  }}
                >
                  Order
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded font-medium w-full">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Popup for payment method selection */}
      {selectedItem && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Select Payment Method
            </h2>
            <div className="flex flex-col space-y-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setPaymentMethod("dluCoin");
                  setSelectedItem(null);
                }}
              >
                Pay with DLU Coin
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setPaymentMethod("credit card");
                  handleOrder();
                  // setSelectedItem(null);
                }}
              >
                Pay with Credit Card
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setPaymentMethod("cash on delivery");
                  handleOrder();
                  // setSelectedItem(null);
                }}
              >
                Pay with Cash on Delivery
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setSelectedItem(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {orderStatus && <p>{orderStatus}</p>}
    </div>
  );
}
