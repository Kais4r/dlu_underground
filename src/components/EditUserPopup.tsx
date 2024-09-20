import { useState, useEffect } from "react";

type User = {
  _id: string;
  email: string;
  name: string;
  role: string;
  dluCoin: number;
};

type EditUserPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  userData: User | null; // Allow userData to be null
  onUserUpdated: (updatedUser: User) => void;
};

export default function EditUserPopup({
  isOpen,
  onClose,
  userData,
  onUserUpdated,
}: EditUserPopupProps) {
  const [editedUserData, setEditedUserData] = useState<User | null>(null);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (userData) {
      setEditedUserData(userData);
      setPassword(""); // Reset password field on userData change
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedUserData) return; // Guard against null
    const { name, value } = e.target;
    setEditedUserData((prev) => ({
      ...prev!,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!editedUserData) return; // Guard against null

    try {
      const response = await fetch(
        `http://localhost:3001/user/edit/${editedUserData._id}`, // Updated endpoint
        {
          method: "PATCH", // Changed to PATCH
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password || undefined, // Only send password if it's provided
            role: editedUserData.role,
          }),
        }
      );

      if (response.ok) {
        const updatedUser = await response.json();
        onUserUpdated(updatedUser.user); // Call the prop function with updated user
        alert("User updated successfully");
        onClose(); // Close the popup
      } else {
        const result = await response.json();
        alert(result.error || "Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user.");
    }
  };

  if (!isOpen) return null;
  if (!editedUserData) return null; // Prevent rendering if userData is null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={editedUserData.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
            disabled // Optionally disable email field
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={editedUserData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
            disabled // Lock the name input
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={editedUserData.role}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">
            Password (Leave blank to keep unchanged)
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
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
