import React from "react";
import { Order } from "../types/order";

const OrdersList = ({ orders }: { orders: Order[] }) => {
  if (!orders || orders.length === 0) {
    return <p>No orders available.</p>;
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order._id}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg"
        >
          {/* Order Header */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">Order #{order._id}</h3>
            <p className="text-sm text-gray-600">
              Date Ordered: {new Date(order.dateOrdered).toLocaleDateString()}
            </p>
          </div>

          {/* Order Products */}
          <div className="space-y-2 mb-4">
            {order.products.map((product) => (
              <div
                key={product.productID}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    Brand: {product.brand}
                  </p>
                </div>
                <div className="text-right">
                  <p>
                    Quantity:{" "}
                    <span className="font-medium">{product.quantity}</span>
                  </p>
                  <p>
                    Price:{" "}
                    <span className="font-medium">
                      ${product.price.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Status and Total */}
          <div className="flex justify-between items-center">
            <p>
              <span className="font-bold">Order Status:</span>{" "}
              <span
                className={`${
                  order.orderStatus === "delivered"
                    ? "text-green-600"
                    : order.orderStatus === "canceled"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {order.orderStatus.charAt(0).toUpperCase() +
                  order.orderStatus.slice(1)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Total: ${order.totalAmount.toFixed(2)}
            </p>
          </div>

          {/* Payment Status */}
          <div className="mt-2">
            <p>
              <span className="font-bold">Payment Status:</span>{" "}
              <span
                className={`${
                  order.paymentStatus === "paid"
                    ? "text-green-600"
                    : order.paymentStatus === "unpaid"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {order.paymentStatus.charAt(0).toUpperCase() +
                  order.paymentStatus.slice(1)}
              </span>
            </p>
          </div>

          {/* Shipping Information */}
          <div className="mt-2">
            <p className="font-bold">Shipping Address:</p>
            <p>{order.shippingAddress.fullName}</p>
            <p>{order.shippingAddress.addressLine1}</p>
            {order.shippingAddress.addressLine2 && (
              <p>{order.shippingAddress.addressLine2}</p>
            )}
            <p>
              {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
              {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </p>
            <p>{order.shippingAddress.phoneNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
