"use client";
import { useState } from "react";
import LogOutButton from "./LogOutButton";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store/store";

export default function ProfileDropdown() {
  // Define the state to toggle the dropdown
  const user = useSelector((state: RootState) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const truncateName = (name: string, maxLength: number) => {
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  };

  return (
    <div>
      {/* Dropdown Button */}
      <div className="relative">
        <button
          className="text-white bg-gray-700 hover:bg-gray-600 font-medium rounded-lg px-4 py-2 flex items-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {truncateName(user.name, 10)}{" "}
          {/* 10 is the maximum length you want */}
          <span className="ml-2">{dropdownOpen ? "▲" : "▼"}</span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <ul className="py-1 text-gray-700">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 3
                </a>
              </li>
              <li className="block px-4 py-2 text-sm hover:bg-gray-100">
                <LogOutButton />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
