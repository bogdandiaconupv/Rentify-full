import React from "react";
import { Link } from "react-router-dom";

export default function RegisterCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Register</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="firstName">
              First Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              type="text"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
            />
          </div>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Register
          </button>
        </form>
        <Link to="/login" className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span 
            className="ml-1 text-blue-500 cursor-pointer hover:underline"
            onClick={() => {
              
            }}
          >
            Login
          </span>
        </Link>
      </div>
    </div>
  );
}
