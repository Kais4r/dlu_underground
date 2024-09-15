"use client";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store/store";
// import {
//   setUser,
// } from "../app/store/features/userSlice";

import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  //const dispatch: AppDispatch = useDispatch();

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#424242]">
        <div className="h-[84px] flex flex-wrap justify-between items-center mx-auto p-4">
          <Link href="/" className="text-white">
            DLU Underground
          </Link>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <p className="text-white">Deliver to location</p>
            <p className="text-white">Search bar</p>

            {user.loggedIn && <p className="text-white">Reorder my item</p>}
            {user.loggedIn && <p className="text-white">Cart</p>}
            {user.loggedIn ? <LogOutButton /> : <LogInButton />}
          </div>
        </div>
      </nav>

      {/* Navbar submenu */}
      <nav className="bg-[#CCCCCC]">
        <div className="h-[48px] px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                {/* <button
                  className="bg-gray-800 text-white font-semibold rounded-full px-6 py-2 text-sm hover:bg-gray-900 
                focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-200 ease-in-out"
                >
                  Categories
                </button> */}
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/catalog"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
