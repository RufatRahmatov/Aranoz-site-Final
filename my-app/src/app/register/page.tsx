"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  // GithubAuthProvider,
  AuthProvider,
} from "firebase/auth";
import { auth } from "../_firebase/config";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../_components/spiner/";

export default function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration successful!");
      router.push("/");
    } catch (error) {
      toast.error("Error creating account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: AuthProvider) => {
    // Add type for provider
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      router.push("/page");
    } catch (error) {
      toast.error("Error during social login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="text-center bg-white rounded-lg p-6 max-w-md w-full shadow-lg h-[780px]">
        <h2 className="mt-[70px] text-2xl font-bold mb-4">Create an Account</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="user"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-4 mb-4 border-b-2 border-gray-200 rounded-none focus:border-gray-400 focus:outline-none hover:border-red-500 transition-colors duration-300"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 border-b-2 border-gray-200 rounded-none focus:border-gray-400 focus:outline-none hover:border-red-500 transition-colors duration-300"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-4 border-b-2 border-gray-200 rounded-none focus:border-gray-400 focus:outline-none hover:border-red-500 transition-colors duration-300"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-4 mb-4 border-b-2 border-gray-200 rounded-none focus:border-gray-400 focus:outline-none hover:border-red-500 transition-colors duration-300"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-500 text-sm mb-4"
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <button
          onClick={handleRegister}
          className="py-2 px-4 bg-[#FF3368] text-white rounded-full font-semibold hover:bg-[#FF0000] transition-colors duration-300 w-full"
          disabled={loading}
        >
          {loading ? <Spinner /> : "Register"}
        </button>

        <div className="mt-8">
          <button
            onClick={() => handleSocialLogin(new GoogleAuthProvider())}
            className="flex items-center justify-center py-2 px-4 border border-black text-black rounded-full hover:bg-[#948d16] hover:text-white transition-colors duration-500 w-full mb-4"
            disabled={loading}
          >
            <FaGoogle className="mr-5 text-xl" />
            Google
          </button>
          <button
            onClick={() => handleSocialLogin(new FacebookAuthProvider())}
            className="flex items-center justify-center py-2 px-4 border border-black text-black rounded-full bg-white hover:bg-[#164094] hover:text-white transition-colors duration-500 w-full mb-4"
            disabled={loading}
          >
            <FaFacebookF className="mr-2 text-xl" />
            Facebook
          </button>
          {/* <button
            onClick={() => handleSocialLogin(new GithubAuthProvider())}
            className="flex items-center justify-center py-2 px-4 border border-black text-black rounded-full bg-white hover:bg-black hover:text-white transition-colors duration-500 w-full"
            disabled={loading} // Disable button while loading
          >
            <FaGithub className="mr-4 text-xl" />
            GitHub
          </button> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
