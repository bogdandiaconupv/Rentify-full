import React from "react";
import { Link } from "react-router-dom";

export default function LoginCard() {



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <Link to="/"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center"
            type="submit"
          >
            Login
          </Link>
         </form>
        <Link to="/register" className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            className="ml-1 text-blue-500 cursor-pointer hover:underline"
            onClick={() => {
              // Add logic to navigate to the registration page
            }}
          >
            Register
          </span>
        </Link>
      </div>
    </div>
  );
}
