"use client";
//import Link from "next/link";
import { useState, useEffect, use } from "react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
//import { useCart } from "@/hooks/useCart"; // Assume you have a custom hook or context for cart

type CartItem = {
  productID: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  totalPrice: number;
  thumbnailImage: string;
};

export default function CartButton() {
  const user = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  //const { cartItems } = useCart(); // Replace with your method of fetching cart items
  const router = useRouter();
  const [itemCount, setItemCount] = useState(0);

  //   useEffect(() => {
  //     // Update item count when cartItems change
  //     setItemCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  //   }, [cartItems]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/user/get/${user.id}`
        );
        const data = await response.json();

        if (data.success && data.user) {
          console.log("User data:", data.user);
        }
      } catch (error) {
        setError("An error occurred while fetching user data.");
        console.error("An error occurred while fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user.id) {
      fetchUserData();
    }
  }, [user.id]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/buyerCart/items?userID=${user.id}`,
        { cache: "no-store" }
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

  // const fetchCartItemsCount = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3001/buyerCart/items/count?userID=${user.id}`
  //     );
  //     const data = await response.json();

  //     if (data.success && data.cart) {
  //       setItemCount(data.itemCount); // Use the correct path to itemCount
  //     } else {
  //       setError("Empty cart");
  //       console.error("Invalid response format:", data);
  //     }
  //   } catch (error) {
  //     setError("An error occurred while fetching cart items.");
  //     console.error("An error occurred while fetching cart items:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    const handleFocus = () => {
      if (user.id) {
        fetchCartItems();
      }
    };

    // Fetch items when the component mounts
    handleFocus();

    // Fetch items when the window gains focus
    window.addEventListener("focus", handleFocus);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [cartItems]);

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
        {cartItems.length && (
          <span className="absolute top-[-15px] right-[-25px] bg-red-600 text-white text-xs rounded-full px-2 py-1">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  );
}
