"use client";

import { useEffect, useState } from "react";
import CreateShopPopupAdmin from "@/components/CreateShopPopupAdmin";
import EditShopPopup from "@/components/EditShopPopUp";

type Shop = {
  _id: string;
  name: string;
  owner: { name: string };
  description: string;
  location: {
    address: string;
    city: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
};

export default function Page() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentShop, setCurrentShop] = useState<Shop | null>(null);

  useEffect(() => {
    // Fetch the shops from the API
    fetch("http://localhost:3001/shop/get-all")
      .then((response) => response.json())
      .then((data) => {
        setShops(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shops:", error);
        setLoading(false);
      });
  }, []);

  const handleCreateShop = async (newShopData: {
    userId: string;
    name: string;
    description: string;
    location: {
      address: string;
      city: string;
      country: string;
    };
  }) => {
    try {
      const response = await fetch("http://localhost:3001/shop/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShopData),
      });

      const result = await response.json();
      if (response.ok) {
        // Update shop list
        setShops((prevShops) => [...prevShops, result.shop]);
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error creating shop:", error);
      alert("An error occurred while creating the shop.");
    }
  };

  const handleDeleteShop = async (shopId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this shop?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:3001/shop/delete/${shopId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Update shop list
        setShops((prevShops) =>
          prevShops.filter((shop) => shop._id !== shopId)
        );
        alert("Shop deleted successfully");
      } else {
        const result = await response.json();
        alert(result.error || "Failed to delete the shop.");
      }
    } catch (error) {
      console.error("Error deleting shop:", error);
      alert("An error occurred while deleting the shop.");
    }
  };

  const handleEditShop = async (
    shopData: Omit<Shop, "owner" | "createdAt" | "updatedAt">
  ) => {
    try {
      const response = await fetch(
        `http://localhost:3001/shop/edit/${currentShop?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shopData), // Send the shop data
        }
      );

      const result = await response.json();
      if (response.ok) {
        setShops((prevShops) =>
          prevShops.map((shop) =>
            shop._id === currentShop?._id ? { ...shop, ...shopData } : shop
          )
        );
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error updating shop:", error);
      alert("An error occurred while updating the shop.");
    }
  };

  const openEditPopup = (shop: Shop) => {
    setCurrentShop(shop);
    setIsEditPopupOpen(true);
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Create Shop Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Shops</h1>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Create Shop
        </button>
      </div>

      {/* Shop List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map((shop) => (
          <div
            key={shop._id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            <h2 className="text-lg font-semibold">{shop.name}</h2>
            <p className="text-sm text-gray-600">ID: {shop._id}</p>
            <p className="text-sm">
              <strong>Owner:</strong> {shop.owner.name}
            </p>
            <p className="text-sm">
              <strong>Description:</strong> {shop.description}
            </p>
            <p className="text-sm">
              <strong>Location:</strong> {shop.location.address},{" "}
              {shop.location.city}, {shop.location.country}
            </p>
            <p className="text-sm">
              <strong>Created At:</strong>{" "}
              {new Date(shop.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm">
              <strong>Updated At:</strong>{" "}
              {new Date(shop.updatedAt).toLocaleDateString()}
            </p>

            {/* Edit and Delete Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => openEditPopup(shop)}
                className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600"
              >
                Edit Shop
              </button>

              <button
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                onClick={() => handleDeleteShop(shop._id)}
              >
                Delete Shop
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CreateShopPopup Component */}
      <CreateShopPopupAdmin
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onCreateShop={handleCreateShop}
      />

      {/* EditShopPopup Component */}
      {currentShop && (
        <EditShopPopup
          isOpen={isEditPopupOpen}
          onClose={() => setIsEditPopupOpen(false)}
          shopData={{
            _id: currentShop._id,
            name: currentShop.name,
            description: currentShop.description,
            location: currentShop.location,
          }}
          onEditShop={handleEditShop}
        />
      )}
    </div>
  );
}
