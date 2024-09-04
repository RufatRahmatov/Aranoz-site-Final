"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { PiHeartStraight } from "react-icons/pi";
import { MdShoppingCart } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    profileImage: string;
  } | null>({
    name: "Rufat",
    profileImage: "https://via.placeholder.com/40",
  });
  const router = useRouter();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (shopMenuOpen || pagesMenuOpen || blogMenuOpen) {
      timer = setTimeout(() => {
        setShopMenuOpen(false);
        setPagesMenuOpen(false);
        setBlogMenuOpen(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [shopMenuOpen, pagesMenuOpen, blogMenuOpen]);

  const handleLogout = () => {
    setUser(null);
    router.push("/register");
  };

  return (
    <header className="bg-[#ECFDFF] p-6 flex flex-col      md:flex-row items-center justify-center gap-[14rem]">
      {/* Sol Taraf: Logo */}
      <div className="flex items-center flex-shrink-0 mb-4 md:mb-0">
        <img
          src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
          alt="Logo"
          width={120}
          height={40}
        />
      </div>

      {/* ---Orta Teref: Menyusu--- */}
      <nav className="flex flex-wrap ml-6  justify-center space-x-6 mb-4 md:mb-0">
        <a
          href="/home"
          className="relative group text-gray-700 hover:text-red-600"
        >
          Home
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>

        {/* ---Shop --- */}
        <div
          className="relative group"
          onMouseEnter={() => setShopMenuOpen(true)}
          onMouseLeave={() => setShopMenuOpen(false)}
        >
          <a href="#" className="flex gap-1 items-center   hover:text-red-600">
            Shop
            <IoMdArrowDropdown className="mt-[5px]" />
          </a>
          <div
            className={`absolute top-full ml-[-40px] mt-8 w-48 bg-[#FF3368] rounded opacity-0 ${
              shopMenuOpen ? "opacity-100 scale-y-100" : "scale-y-0"
            } transform origin-top transition-all duration-500 ease-in-out z-50`}
          >
            <a
              href="#shop-category"
              className="block px-4 py-2 text-white bg-[#FF3368] rounded"
            >
              Shop Category
            </a>
            <a
              href="/shop"
              className="inline-block px-4 py-2 text-white bg-[#FF3368] rounded"
            >
              Product Details
            </a>
          </div>
        </div>

        {/* ---Pages--- */}
        <div
          className="relative group"
          onMouseEnter={() => setPagesMenuOpen(true)}
          onMouseLeave={() => setPagesMenuOpen(false)}
        >
          <a
            href="#pages"
            className="flex gap-1 items-center text-gray-700 hover:text-red-600"
          >
            Pages
            <IoMdArrowDropdown className="mt-[5px]" />
          </a>
          <div
            className={`absolute top-full left-0 mt-8 w-48 bg-[#FF3368] rounded opacity-0 ${
              pagesMenuOpen ? "opacity-100 scale-y-100" : "scale-y-0"
            } transform origin-top transition-all duration-500 ease-in-out z-50`}
          >
            <a href="/loginpage" className="block px-4 py-2 text-white">
              Login
            </a>
            <a href="/checkout" className="block px-4 py-2 text-white">
              Cart Checkout
            </a>
            <a href="/product" className="block px-4 py-2 text-white">
              Product Checkout
            </a>
            <a href="/cartpage" className="block px-4 py-2 text-white">
              Shopping Cart
            </a>
            <a href="#page-1" className="block px-4 py-2 text-white">
              Confirmation
            </a>
            <a href="#page-2" className="block px-4 py-2 text-white">
              Elements
            </a>
          </div>
        </div>

        {/* ---Blog--- */}
        <div
          className="relative group"
          onMouseEnter={() => setBlogMenuOpen(true)}
          onMouseLeave={() => setBlogMenuOpen(false)}
        >
          <a
            href="#blog"
            className="flex gap-1 items-center text-gray-700 hover:text-red-600"
          >
            Blog
            <IoMdArrowDropdown className="mt-[5px]" />
          </a>
          <div
            className={`absolute top-full left-0 mt-8 w-48 bg-[#FF3368] rounded opacity-0 ${
              blogMenuOpen ? "opacity-100 scale-y-100" : "scale-y-0"
            } transform origin-top transition-all duration-500 ease-in-out z-50`}
          >
            <a href="/blog" className="block px-4 py-2 text-white">
              Blog
            </a>
            <a href="#blog-articles" className="block px-4 py-2 text-white">
              Single Blog
            </a>
          </div>
        </div>

        {/* ---Contact--- */}
        <a
          href="/contact"
          className="relative group text-gray-700 hover:text-red-600"
        >
          Contact
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>
      </nav>

      {/* Sağ Taraf: İkonlar ve Log Out Butonu */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex space-x-4 items-center">
          <IoIosSearch className="h-5 w-6" />
          <PiHeartStraight className="h-5 w-6" />
          <div className="relative flex items-center">
            <MdShoppingCart className="h-5 w-6" />
            <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-[#F13D80] text-white text-xs font-bold rounded-full -translate-x-[-3px] -translate-y-2">
              5
            </div>
          </div>
        </div>

        {/* Profil ve Log Out */}
        {user && (
          <div className="flex items-center space-x-4 ">
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="text-gray-700 font-bold"> {user.name}</div>
            <button
              onClick={handleLogout} // Handle logout click
              className="text-white bg-[#F13D80] rounded-3xl hover:bg-[#FF0000]  transition-colors duration-300 h-10 w-32"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
