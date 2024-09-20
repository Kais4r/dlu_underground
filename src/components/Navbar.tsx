"use client";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store/store";
import { usePathname } from "next/navigation";

import LogInButton from "./LogInButton";
import ProfileDropdown from "./ProfileDropDown";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";
import CategoriesDropdown from "./CategoriesDropdown";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  const pathname = usePathname();

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys",
  ];
  //console.log(pathname);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="h-[84px] flex flex-wrap items-center mx-auto p-4">
          <div className="flex items-center space-x-6 rtl:space-x-reverse w-full">
            {pathname === "/myShop" ? (
              <Link href="/myShop" className="text-white">
                DLU Underground Shop
              </Link>
            ) : (
              <Link href="/" className="text-white">
                DLU Underground
              </Link>
            )}
            <p className="text-white">Deliver to location</p>
            {/* <p className="text-white">Search bar</p> */}

            <div className="flex-grow">
              <SearchBar className="w-full" />
            </div>

            {user.loggedIn && <p className="text-white">Reorder my item</p>}
            {user.loggedIn && <CartButton />}
            {user.loggedIn && <ProfileDropdown />}
            {!user.loggedIn && <LogInButton />}
          </div>
        </div>
      </nav>

      {/* Navbar submenu */}
      {pathname !== "/myShop" &&
        pathname !== "/pages/myAccount" &&
        pathname !== "/pages/cart" && (
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
                      className="text-gray-900 dark:text-white hover:underline "
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
                      Categories
                    </Link>
                    {/* <CategoriesDropdown title="Categories" items={categories} /> */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
    </>
  );
}
