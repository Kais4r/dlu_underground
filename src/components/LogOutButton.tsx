"use client";
import React from "react";
//import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store/store";
import { clearUser } from "../app/store/features/userSlice";
import { useRouter } from "next/navigation";

export default function LogOutButton() {
  const router = useRouter();
  //const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.clear();
    }
    dispatch(clearUser());
    router.push("/");
  };

  return <button onClick={handleLogout}>Log Out</button>;
}
