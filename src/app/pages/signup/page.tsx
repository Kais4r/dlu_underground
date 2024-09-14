"use client";
import Link from "next/link";
import React, { useState } from "react";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

export default function Page() {
  const [values, setValues] = useState<SignUpFormValues>({
    name: "",
    email: "",
    password: "",
  });

  const [signupError, setSignupError] = useState<string | null>(null);
  const [signupSuccess, setSignupSuccess] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form fields
    if (!values.name || !values.email || !values.password) {
      setSignupError("Please fill out all fields");
      return;
    }

    try {
      // Submit sign-up form
      const response = await fetch("http://localhost:3001/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Sign-up failed");
      }

      const data = await response.json();
      setSignupSuccess("Sign-up successful!");
      setSignupError(null);
      // Optionally clear form values
      setValues({ name: "", email: "", password: "" });
      console.log(data);
    } catch (error: any) {
      setSignupError(error.message);
      setSignupSuccess(null);
    }
  };

  if (signupSuccess === "Sign-up successful!") {
    return (
      <>
        <p>Account created, go to home page?</p>
        <Link href="/" className="text-red-500">
          Click me to go to homepage!
        </Link>
      </>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-sm mx-auto bg-white p-6 shadow-md rounded-md"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
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

        {signupError && <p className="text-red-500 text-sm">{signupError}</p>}
        {signupSuccess && (
          <p className="text-green-500 text-sm">{signupSuccess}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
