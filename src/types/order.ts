// src/types/order.ts

// Define the Product type
export type Product = {
  productID: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
};

// Define the Order type
export type Order = {
  _id: string;
  dateOrdered: string;
  products: Product[];
  orderStatus: "pending" | "processing" | "shipped" | "delivered" | "canceled";
  paymentStatus: "unpaid" | "paid" | "refunded";
  totalAmount: number;
  shippingAddress: {
    fullName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phoneNumber: string;
  };
};
