import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/features/authSlice";
import { SERVER_URL } from "../../utils/constants";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await fetch(`${SERVER_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const { data } = await res.json();
        dispatch(login(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 class="text-5xl text-center mb-4">Instagram Clone</h1>
        <div class="mb-4" id="formatValidation" style={{ display: "none" }}>
          <div class="border border-red-500 text-red-500 rounded p-2">
            Invalid Email format — check it out!
          </div>
        </div>
        <div class="mb-4" id="authValidation" style={{ display: "none" }}>
          <div class="border border-red-500 text-red-500 rounded p-2">
            Invalid given Email/Password — check it out!
          </div>
        </div>
        <form class="space-y-4" onSubmit={handleSubmit}>
          <input
            class="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loader ? true : false}
          />
          <input
            class="w-full p-2 border border-gray-300 rounded"
            type="password"
            id="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loader ? true : false}
          />
          <button
            class="w-full p-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white"
            id="submit"
          >
            {loader ? "Loading.." : "Sign In"}
          </button>
        </form>
        <div class="grid grid-cols-2 mt-4 text-sm">
          <div class="col-span-1">
            <Link to="/reset" class="no-underline">
              Forgot password?
            </Link>
          </div>
          <div class="col-span-1">
            <Link to="/signup" class="no-underline">
              Don't have an account?
              <span class="text-blue-500">
                <strong>Sign Up</strong>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
