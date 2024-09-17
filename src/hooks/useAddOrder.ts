// src/hooks/useAddToCart.ts
import { useState } from "react";

interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
}

interface Product {
  productID: string;
  name: string;
  price: number;
  color: string;
  quantity: number;
}

interface OrderData {
  customerID: string;
  products: Product[];
  totalAmount: number;
  orderStatus: string;
  paymentStatus: string;
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  shippingMethod: string;
  shippingCost: number;
  discount: number;
  dateOrdered: string;
}

const useAddOrder = () => {
  const [loading, setLoading] = useState(false);

  const addToCart = async (orderData: OrderData) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/order/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Product added to cart successfully!");
      } else {
        alert("Failed to add product to cart.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, addToCart };
};

export default useAddOrder;
