import { useState } from "react";

type UserSignUpPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onUserCreated: (user: {
    _id: string;
    email: string;
    name: string;
    role: string;
    dluCoin: number;
  }) => void;
};

export default function UserSignUpPopup({
  isOpen,
  onClose,
  onUserCreated,
}: UserSignUpPopupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        onUserCreated(data.user); // Call the parent function with the created user data
        alert(data.message);
        onClose(); // Close the popup
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error signing up user:", error);
      alert("An error occurred while signing up.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Create User
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-300 text-black px-4 py-2 rounded shadow hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
