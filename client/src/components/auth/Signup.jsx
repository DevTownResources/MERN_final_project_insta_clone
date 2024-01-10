import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../utils/constants";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loader, setLoader] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      const res = await fetch(`${SERVER_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 class="text-5xl text-center mb-4">Instagram Clone</h1>
          <form class="space-y-4" onSubmit={handleSubmit}>
            <div class="relative mb-4">
              <input
                class="w-full p-2 border border-gray-300 rounded bg-transparent mt-2"
                type="email"
                id="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loader ? true : false}
              />
            </div>
            <div class="relative mb-4">
              <input
                class="w-full p-2 border border-gray-300 rounded bg-transparent mt-2"
                type="username"
                id="username"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loader ? true : false}
              />
            </div>
            <div class="relative mb-4">
              <input
                class="w-full p-2 border border-gray-300 rounded bg-transparent mt-2"
                type="password"
                id="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loader ? true : false}
              />
            </div>
            <button
              type="submit"
              class="w-full p-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white"
              id="submit"
              disabled={loader ? true : false}
            >
              {loader ? "Loading..." : "Sign Up"}
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
