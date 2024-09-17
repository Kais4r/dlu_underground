"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setUser } from "../../store/features/userSlice";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function Page() {
  //const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const router = useRouter();
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.email || !values.password) {
      setError("Please fill out all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        //console.log("Login successful:", data);
        // Handle successful login, e.g., redirect the user or store a token
        if (typeof window !== "undefined") {
          sessionStorage.setItem("logged in", "true");
        }

        dispatch(
          setUser({
            loggedIn: true,
            id: data?.user?._id ?? "error no id",
            name: data?.user?.name ?? "error no name",
            email: data?.user?.email ?? "error no email",
          })
        );

        router.push("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("An error occurred while trying to log in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-sm mx-auto bg-white p-6 shadow-md rounded-md"
      >
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {loading && <p className="text-sm text-gray-500">Logging in...</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            No account?{" "}
            <Link
              href="/pages/signup"
              className="text-blue-500 hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
