import { useState } from "react";

type EditShopPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  shopData: {
    _id: string;
    name: string;
    description: string;
    location: {
      address: string;
      city: string;
      country: string;
    };
  };
  onEditShop: (shopData: {
    _id: string;
    name: string;
    description: string;
    location: {
      address: string;
      city: string;
      country: string;
    };
  }) => void;
};

export default function EditShopPopup({
  isOpen,
  onClose,
  shopData,
  onEditShop,
}: EditShopPopupProps) {
  const [editedShopData, setEditedShopData] = useState(shopData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name in editedShopData.location) {
      setEditedShopData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [name]: value,
        },
      }));
    } else {
      setEditedShopData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    onEditShop(editedShopData);
    onClose(); // Close the popup after editing
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit Shop</h2>

        <div className="mb-4">
          <label className="block mb-1">Shop Name</label>
          <input
            type="text"
            name="name"
            value={editedShopData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
            readOnly // Make the input field read-only
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={editedShopData.description}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <h3 className="font-semibold mb-2">Location</h3>
        <div className="mb-4">
          <label className="block mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={editedShopData.location.address}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">City</label>
          <input
            type="text"
            name="city"
            value={editedShopData.location.city}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Country</label>
          <input
            type="text"
            name="country"
            value={editedShopData.location.country}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          >
            Save Changes
          </button>
          <button
            onClick={onClose}
            className="ml-2 bg-gray-300 text-black px-4 py-2 rounded shadow hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
