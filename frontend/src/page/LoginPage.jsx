import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="hero-bg h-screen w-full">
      <header className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="Netflix Logo" className="w-52" />
        </Link>
      </header>

      <div className="flex justify-center items-center mt-15">
        <div className="w-full max-w-md bg-black/60 p-8 space-y-6 rounded-lg shadow-md">
          <h1 className="text-center text-2xl text-white font-bold mb-5 ">
            Login
          </h1>

          <form className="space-y-4 " onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 mt-3 border border-gray-800  rounded-md text-white bg-transparent focus:outline-none focus:ring "
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-500 "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 mt-3 border border-gray-800  rounded-md text-white bg-transparent focus:outline-none focus:ring "
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring hover:cursor-pointer">
              Login
            </button>
          </form>

          <div className="text-center text-gray-400 ">
            Don't have an account?
            <Link
              to={"/signup"}
              className="text-white font-semibold hover:text-red-500 ml-2 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
