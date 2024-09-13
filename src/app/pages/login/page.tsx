"use client";
import React, { useState } from "react";
import Link from "next/link";
//import { useRouter } from "next/navigation";

interface LoginFormValues {
  name: string;
  password: string;
}

export default function Page() {
  //const router = useRouter();
  //router.push("/");
  const [values, setValues] = useState<LoginFormValues>({
    name: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Here you would typically validate the form and then make an API call
    // For now, we're just checking if the values are empty

    if (!values.name || !values.password) {
      setError("Please fill out all fields");
    } else {
      // Successful login
      console.log("Login successful:", values);
      setError(null);
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
            htmlFor="username"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>

        {/* Sign Up Message and Button */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            No account?{" "}
            <Link href="/pages/signup">
              <p className="text-blue-500 hover:underline">Sign up here</p>
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
