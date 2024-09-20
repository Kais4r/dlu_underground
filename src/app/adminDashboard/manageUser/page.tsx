"use client";

import { useEffect, useState } from "react";
import UserSignUpPopup from "@/components/UserSignUpPopup"; // Adjust the import path
import EditUserPopup from "@/components/EditUserPopup"; // Adjust the import path

type User = {
  _id: string;
  email: string;
  name: string;
  role: string;
  dluCoin: number;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateUserPopupOpen, setIsCreateUserPopupOpen] = useState(false);
  const [isEditUserPopupOpen, setIsEditUserPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/user/get-all");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserCreated = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleUserUpdated = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === updatedUser._id ? updatedUser : user
      )
    );
  };

  const handleDeleteUser = async (userId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:3001/user/delete/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        alert("User deleted successfully");
      } else {
        const result = await response.json();
        alert(result.error || "Failed to delete the user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user.");
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-gray-300">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center pt-8">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-300">Manage Users</h1>
          <button
            onClick={() => setIsCreateUserPopupOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          >
            Create User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700"
            >
              <h2 className="text-lg font-semibold text-gray-300">
                {user.name}
              </h2>
              <p className="text-sm text-gray-400">ID: {user._id}</p>
              <p className="text-sm text-gray-400">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-sm text-gray-400">
                <strong>Role:</strong> {user.role}
              </p>
              <p className="text-sm text-gray-400">
                <strong>DLU Coin:</strong> {user.dluCoin}
              </p>

              <div className="flex justify-between mt-4">
                <button
                  className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600"
                  onClick={() => {
                    setSelectedUser(user);
                    setIsEditUserPopupOpen(true);
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <UserSignUpPopup
          isOpen={isCreateUserPopupOpen}
          onClose={() => setIsCreateUserPopupOpen(false)}
          onUserCreated={handleUserCreated}
        />

        <EditUserPopup
          isOpen={isEditUserPopupOpen}
          onClose={() => {
            setIsEditUserPopupOpen(false);
            setSelectedUser(null);
          }}
          userData={selectedUser} // Pass selectedUser directly
          onUserUpdated={handleUserUpdated}
        />
      </div>
    </div>
  );
}
