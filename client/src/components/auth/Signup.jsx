import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 class="text-5xl text-center mb-4">Instagram Clone</h1>
          <form class="space-y-4">
            <div class="relative mb-4">
              <input
                class="w-full p-2 border border-gray-300 rounded bg-transparent mt-2"
                type="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div class="relative mb-4">
              <input
                class="w-full p-2 border border-gray-300 rounded bg-transparent mt-2"
                type="username"
                id="username"
                required
                placeholder="Username"
              />
            </div>
            <div class="relative mb-4">
              <input
                class="w-full p-2 border border-gray-300 rounded bg-transparent mt-2"
                type="password"
                id="password"
                required
                placeholder="Password"
                autocomplete="current-password"
              />
            </div>
            <button
              type="submit"
              class="w-full p-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white"
              id="submit"
            >
              Sign Up
            </button>
          </form>
          <div class="flex justify-end mt-4 text-sm">
            <Link to="/login" class="no-underline">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
