"use client";
import React from "react";
//import { useRouter } from "next/navigation";

export default function LogOutButton() {
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.clear();
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Log Out
    </button>
  );
}
