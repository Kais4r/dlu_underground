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
    dispatch(setUser({ loggedIn: false, name: "", email: "" }));
  };

  return <button onClick={handleLogout}>Log Out</button>;
}
