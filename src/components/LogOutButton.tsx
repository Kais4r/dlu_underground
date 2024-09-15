"use client";
import React from "react";
//import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store/store";
import { setUser } from "../app/store/features/userSlice";

export default function LogOutButton() {
  //const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.clear();
    }
    dispatch(
      setUser({ loggedIn: false, name: "john_doe", email: "john@example.com" })
    );
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
