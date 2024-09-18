"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setShop } from "../store/features/shopSlice";

import Link from "next/link";

type FormValues = {
  name: string;
  description: string;
  location: {
    address: string;
    city: string;
    country: string;
  };
};

export default function Page() {
  const user = useSelector((state: RootState) => state.user);
  //const shop = useSelector((state: RootState) => state.shop);
  const dispatch: AppDispatch = useDispatch();

  const [hasShop, setHasShop] = useState<boolean | null>(null);
  const [shopData, setShopData] = useState<any>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    description: "",
    location: {
      address: "",
      city: "",
      country: "",
    },
  });

  useEffect(() => {
    const checkShop = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/shop/check-shop?userId=${user.id}`
        );
        const data = await res.json();
        if (data.hasShop) {
          setHasShop(true);
          setShopData(data.shop);

          dispatch(
            setShop({
              name: data.shop.name,
              description: data.shop.description ?? "error no id",
              location: data.shop.location,
            })
          );
        } else {
          setHasShop(false);
        }
      } catch (error) {
        console.error("Error checking shop:", error);
      }
    };

    checkShop();
  }, [user.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [field, subField] = name.split(".");

    if (subField) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [field as keyof FormValues]: {
          ...(prevValues[field as keyof FormValues] as any),
          [subField]: value,
        },
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name as keyof FormValues]: value,
      }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/shop/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formValues, userId: user.id }),
      });

      if (res.ok) {
        const data = await res.json();
        setHasShop(true);
        setShopData(data.shop);
        dispatch(
          setShop({
            name: data.shop.name,
            description: data.shop.description ?? "error no id",
            location: data.shop.location,
          })
        );

        alert("Shop created successfully!");
      } else {
        console.log(res);
        alert("Failed to create shop");
      }
    } catch (error) {
      console.error("Error creating shop:", error);
    }
  };

  if (hasShop === null) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {hasShop ? (
        // Shop user interface if user own a shop
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold">Welcome to {shopData.name}</h1>
          <p className="text-gray-600 mt-2">{shopData.description}</p>

          <Link
            href="/myShop/manageShop"
            passHref
            className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Manage shop
          </Link>
        </div>
      ) : (
        // Create a new shop
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6">Create Your Shop</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Shop Name
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                name="location.address"
                value={formValues.location.address}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input
                type="text"
                name="location.city"
                value={formValues.location.city}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Country
              </label>
              <input
                type="text"
                name="location.country"
                value={formValues.location.country}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Create Shop
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
