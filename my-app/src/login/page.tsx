"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Spiner from "@/app/_components/spiner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingCreateAccount, setLoadingCreateAccount] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setLoadingLogin(true);
    setTimeout(() => {
      setLoadingLogin(false);
      toast.success("Login successful!");
      router.push("/home");
    }, 1000);
  };

  const handleRegisterRedirect = () => {
    setLoadingCreateAccount(true);
    setTimeout(() => {
      setLoadingCreateAccount(false);
      toast.success("Redirecting to create account!");
      router.push("/register");
    }, 1000);
  };

  return (
    <div className="flex justify-center  items-center min-h-screen p-4">
      <div className="bg-white rounded-lg flex flex-col lg:flex-row  w-[1200px] h-[650px] gap-10 p-2">
        {/* Sol Tərəf */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#FF0E54] to-[#FF4837] p-8 text-white flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4 text-center">
            New to our Store?
          </h2>
          <p className="mb-6 text-center">
            There are advances being made in science <br /> and technology
            everyday, and a good example of this is the
          </p>
          <button
            onClick={handleRegisterRedirect}
            className="py-2 px-4 bg-[#FF1D4F] text-white rounded-full font-semibold hover:bg-white hover:text-[#FF1D4F] w-full sm:w-56 border-2 border-[#FF1D4F] hover:border-[#FF1D4F] transition-colors duration-500"
          >
            {loadingCreateAccount ? <Spiner /> : "CREATE NEW ACCOUNT"}
          </button>
        </div>
        {/* Sağ Tərəf */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Welcome Back! <br /> Please Sign in now
          </h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-4 mb-4 border-b-2 border-gray-200 rounded-none focus:border-b-2 focus:border-gray-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-4 border-b-2 border-gray-200 rounded-none focus:border-b-2 focus:border-gray-400 focus:outline-none"
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label
              htmlFor="rememberMe"
              className="text-gray-400 list-style-none border-b-0 hover:border-b-0 hover:underline transition-colors duration-300"
            >
              Remember me
            </label>
          </div>
          <button
            onClick={handleLogin}
            className="py-2 px-4 bg-[#FF3368] text-white rounded-full font-semibold hover:bg-[#FF0000] transition-colors duration-300 w-full"
          >
            {loadingLogin ? <Spiner /> : "LOG IN"}
          </button>
          <p className="text-right mt-4 text-gray-400 hover:underline cursor-pointer">
            Forgot password?
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
