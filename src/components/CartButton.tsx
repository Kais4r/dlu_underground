"use client";
//import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
//import { useCart } from "@/hooks/useCart"; // Assume you have a custom hook or context for cart

export default function CartButton() {
  //const { cartItems } = useCart(); // Replace with your method of fetching cart items
  const router = useRouter();
  const [itemCount, setItemCount] = useState(999);

  //   useEffect(() => {
  //     // Update item count when cartItems change
  //     setItemCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  //   }, [cartItems]);

  const handleCartClick = () => {
    router.push("/pages/cart");
  };

  return (
    <div className="relative">
      <button
        onClick={handleCartClick}
        className="flex items-center text-white"
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute top-[-15px] right-[-25px] bg-red-600 text-white text-xs rounded-full px-2 py-1">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
}
