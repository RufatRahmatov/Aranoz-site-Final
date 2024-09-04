"use client";
import React, { useState } from "react";
import Layouts from "../_layouts/layouts";
import { FiHeart } from "react-icons/fi";
import PriceFilter from "../_components/price/pricefilter";
export default function Shop() {
  return (
    <Layouts>
      <main>
        <div className="bg-[#ECFDFF] flex flex-col md:flex-row items-center justify-center p-6 h-[400px] overflow-hidden">
          <div className="relative text-center mt-[-100px] ml-[200px] md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800">Shop Category</h1>
            <p className="text-gray-500 mt-4">Home - Shop Category</p>
          </div>
          <div className="flex justify-center w-full md:w-auto mt-[100px] ml-[100px]">
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png"
              alt="Chair"
              className="object-contain w-[600px] h-[420px] md:mt-0"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        </div>

        {/* ---Cart ust section--- */}

        <div className="flex flex-col justify-center items-center p-8 h-auto relative top-[200px] gap-3 mb-[400px]">
          <div className="relative top-4 flex ml-[350px] items-center w-[900px] gap-7">
            <div className="flex items-center">
              <span className="text-[#FF4368] font-bold text-xl mr-2">
                10000
              </span>
              <span className="text-gray-700 font-bold gap-3">
                Product Found
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <span className="text-gray-700 border-none outline-none mr-2 ml-20 font-bold">
                  Sort By:
                </span>
                <select className="border border-none outline-none p-2 rounded ml-3">
                  <option className="bg-[#FF4368] text-white" value="select">
                    Select
                  </option>
                  <option className="bg-[#FF4368] text-white" value="price">
                    Price
                  </option>
                  <option
                    className="bg-[#FF4368] text-white"
                    value="popularity"
                  >
                    Popularity
                  </option>
                  <option className="bg-[#FF4368] text-white" value="rating">
                    Rating
                  </option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 mr-2 font-bold">Show:</span>
                <div className="flex gap-2">
                  <button className="">1</button>
                  <button className="">2</button>
                  <button className="">3</button>
                </div>
              </div>
              <div className="flex items-center p-2 rounded ml-8">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none flex-grow border border-t-0 border-r-0 border-l-0 h-12 w-36"
                />
                <button className="text-gray-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative right-[35px] h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m-5.65 1.35a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex gap-5 mt-4 p-5">
            {/* Sidebar Section */}
            <div className="mt-[-60px] w-[250px] gap-5">
              <div className="p-3 gap-2">
                <h3 className="font-bold mb-10 text-xl">Browse Categories</h3>
                <ul className="text-gray-700 space-y-4">
                  <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                    <span>Frozen Fish</span>
                    <span>(250)</span>
                  </li>
                  <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                    <span>Dried Fish</span>
                    <span>(250)</span>
                  </li>
                  <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                    <span>Fresh Fish</span>
                    <span>(250)</span>
                  </li>
                  <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                    <span>Meat Alternatives</span>
                    <span>(250)</span>
                  </li>
                  <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                    <span>Fresh Fish</span>
                    <span>(250)</span>
                  </li>
                  <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                    <span>Meat Alternatives</span>
                    <span>(250)</span>
                  </li>
                  <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                    <span>Meat</span>
                    <span>(250)</span>
                  </li>
                </ul>
              </div>
              <div className="mt-[10px] w-[250px] gap-5">
                <div className="p-3 gap-2">
                  <h3 className="font-bold mb-10 text-xl">Product filters</h3>
                  <ul className="text-gray-700 space-y-4">
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Apple</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Asus</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Gione</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Micromax</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Samsung</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300 border border-r-0 border-l-0 border-b-0 mt-2">
                      <span>Apple</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Asus</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-[10px] w-[250px] gap-5">
                <div className="p-3 gap-2">
                  <h3 className="font-bold mb-10 text-xl">Color Filter</h3>
                  <ul className="text-gray-700 space-y-4">
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Black</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Black Leather</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Black with red</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Gold</span>
                    </li>
                    <li className="flex justify-between hover:text-[#FF4368] cursor-pointer transition duration-300">
                      <span>Spacegrey</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Price Filter */}
              <PriceFilter />
            </div>

            {/* Cart Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                "https://preview.colorlib.com/theme/aranoz/img/product/product_1.png",
                "https://preview.colorlib.com/theme/aranoz/img/product/product_2.png",
                "https://preview.colorlib.com/theme/aranoz/img/product/product_3.png",
                "https://preview.colorlib.com/theme/aranoz/img/product/product_4.png",
                "https://preview.colorlib.com/theme/aranoz/img/product/product_5.png",
                "https://preview.colorlib.com/theme/aranoz/img/product/product_6.png",
                "https://preview.colorlib.com/theme/aranoz/img/product/product_7.png",
                "https://preview.colorlib.com/theme/aranoz/img/product/product_8.png",
                "https://preview.colorlib.com/theme/aranoz/img/product/product_2.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative bg-white sm:w-[260px] h-[430px] group-hover:opacity-100 transition-opacity duration-300 group hover:shadow-lg transition-shadow duration-500 flex flex-col justify-between"
                >
                  <img
                    src={src}
                    alt={`Quartz Belt Watch ${index + 1}`}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">
                      Quartz Belt Watch
                    </h3>
                    <p className="mb-4">$150.00</p>
                    <button className="text-[#FF4368] font-bold flex items-center gap-7">
                      + ADD TO CART <FiHeart className="text-black" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ----best seller sectiom---- */}
        <div className="flex flex-col justify-center items-center p-8 h-auto relative mb-12 gap-3">
          <div className="flex justify-between items-center w-full ">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 ml-[335px] mb-12">
              Best Sellers
              <span className="text-[#ADADAD] text-xl font-bold relative left-12">
                Shop
              </span>
            </h2>
            <div className="text-sm font-bold mr-[335px] mt-6">
              <button className="mr-2">Next</button> |{" "}
              <button className="ml-2">Previos</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              "https://preview.colorlib.com/theme/aranoz/img/product/product_1.png",
              "https://preview.colorlib.com/theme/aranoz/img/product/product_2.png",
              "https://preview.colorlib.com/theme/aranoz/img/product/product_3.png",
              "https://preview.colorlib.com/theme/aranoz/img/product/product_4.png",
            ].map((src, index) => (
              <div
                key={index}
                className="relative bg-white sm:w-[260px] h-[430px]  group hover:shadow-lg transition-shadow duration-500"
              >
                <img
                  src={src}
                  alt={`Quartz Belt Watch ${index + 1}`}
                  className="w-full object-cover"
                />
                <h3 className=" relative right-[30px] font-bold text-lg mt-4 text-center">
                  Quartz Belt Watch
                </h3>
                <p className=" relative right-[80px] text-center p-2">
                  $150.00
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layouts>
  );
}
