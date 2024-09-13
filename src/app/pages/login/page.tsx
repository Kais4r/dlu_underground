"use client";
import React, { useState } from "react";

interface LoginFormValues {
  username: string;
  password: string;
}

export default function Page() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // function handleSubmit(event: { preventDefault: () => void }) {
  //   event.preventDefault();

  //   console.log("pressed log in button");
  // }

  const [values, setValues] = useState<LoginFormValues>({
    username: "",
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

    if (!values.username || !values.password) {
      setError("Please fill out all fields");
    } else {
      // Successful login
      console.log("Login successful:", values);
      setError(null);
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form> */}

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />

        <br />

        {error && <p>{error}</p>}

        <button type="submit">Login</button>
      </form> */}

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
            id="username"
            name="username"
            value={values.username}
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
      </form>
    </>
  );
}
