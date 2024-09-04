"use client";
import React from "react";
import Layouts from "../_layouts/layouts";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

const images = [
  "https://preview.colorlib.com/theme/aranoz/img/blog/single_blog_1.png",
  "https://preview.colorlib.com/theme/aranoz/img/blog/single_blog_2.png",
  "https://preview.colorlib.com/theme/aranoz/img/blog/single_blog_3.png",
  "https://preview.colorlib.com/theme/aranoz/img/blog/single_blog_4.png",
  "https://preview.colorlib.com/theme/aranoz/img/blog/single_blog_5.png",
];

export default function Blog() {
  return (
    <Layouts>
      <main className="">
        {/* ----header bottom---- */}
        <div className="bg-[#ECFDFF] flex flex-col md:flex-row items-center justify-center  h-[400px]  overflow-hidden">
          <div className="relative text-center mt-[-100px] ml-[200px] md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800">Shop Single</h1>
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
        {/* ----Big carts--- */}
        <div className="flex justify-center mt-[-250px] mb-[3000px] relative ml-[380px] items-center min-h-screen">
          <div className="container h-42 mx-auto p-4">
            {/* Main Content */}
            <div className="w-[1100px] h-[200px] grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Image Sections */}
              {images.map((imgSrc, index) => (
                <div key={index} className="lg:col-span-2 flex justify-center">
                  <div className="bg-white shadow-lg overflow-hidden w-full">
                    <img
                      src={imgSrc}
                      alt={`Blog Post ${index + 1}`}
                      className="w-full h-[23rem] object-cover"
                    />
                    <div className="p-8 h-[30vh]">
                      <div className="flex items-center justify-between">
                        <div className="bg-[#FF3368] relative top-[-150px] text-center w-[140px] h-[100px] text-white px-4 py-2 rounded-lg">
                          <p className="text-2xl font-bold">15</p>
                          <p className="text-2xl">Jan</p>
                        </div>
                        <div className="mr-10 relative right-[90px]">
                          <h2 className="text-2xl relative top-3 mb-8 font-bold hover:text-[#FF3368] cursor-pointer transition-all duration-500">
                            Google inks pact for new 35-storey office
                          </h2>
                          <p className="text-gray-600 relative top-3 w-[660px]">
                            That dominion stars lights dominion divide years for
                            fourth have dont stars is that he earth it first
                            without heaven in place seed it second morning
                            saying.
                          </p>
                          <div className="mt-12 flex items-center text-gray-500 cursor-pointer">
                            <p className="text-sm flex items-center transition-all duration-500 hover:text-[#FF3368]">
                              <IoPersonOutline className="mr-1" />
                              Travel, Lifestyle
                            </p>
                            <div className="ml-2">|</div>
                            <p className="ml-2 flex items-center cursor-pointer hover:text-[#FF3368] text-sm transition-all duration-500">
                              <FaRegComments className="mr-1" /> 03 Comments
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Right Sidebar */}
              <div className="flex flex-col justify-center h-max mt-[-2700px]">
                {/* Search Box */}
                <div className="bg-[#FBF9FF] p-4  mb-6">
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      placeholder="Search Keyword"
                      className="w-full p-3 border-gray-300 border-[9f8dc6] outline-none pr-10"
                    />
                    <BsSearch className="absolute right-3 text-gray-500" />
                  </div>

                  <button className="mt-2 w-full h-12 bg-[#FF3368] text-white py-2">
                    SEARCH
                  </button>
                </div>

                {/* Categories */}
                <div className=" p-10 bg-[#FBF9FF]">
                  <h3 className="text-xl font-bold mb-4">Category</h3>
                  <ul className="space-y-6">
                    <li className="flex justify-between border border-t-0 border-r-0 border-l-0 py-3">
                      <span>Resaurant food</span> <span>(37)</span>
                    </li>
                    <li className="flex justify-between border border-t-0 border-r-0 border-l-0 py-3">
                      <span>Travel news</span> <span>(10)</span>
                    </li>
                    <li className="flex justify-between border border-t-0 border-r-0 border-l-0 py-3">
                      <span>Modern technology</span> <span>(03)</span>
                    </li>
                    <li className="flex justify-between border border-t-0 border-r-0 border-l-0 py-3">
                      <span>Product</span> <span>(11)</span>
                    </li>
                    <li className="flex justify-between border border-t-0 border-r-0 border-l-0 py-3">
                      <span>Inspiration</span> <span>(21)</span>
                    </li>
                    <li className="flex justify-between border border-t-0 border-r-0 border-l-0 py-3">
                      <span>Health Care</span> <span>(21)</span>
                    </li>
                  </ul>
                </div>
                <br />

                {/* ---Cataqory section--- */}
                <div className="bg-[#FBF9FF] p-10 bg-[#FBF9FF]">
                  <h3 className="text-xl font-bold mb-4 border border-t-0 border-r-0 border-l-0 py-3">
                    Recent Post
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-center border border-t-0 border-r-0 border-l-0 py-3">
                      <img
                        src="https://preview.colorlib.com/theme/aranoz/img/post/post_1.png"
                        alt="From life was you fish..."
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4">
                        <h4 className="text-md font-bold hover:text-[#FF3368] cursor-pointer transition-all duration-500">
                          From life was you fish...
                        </h4>
                        <p className="text-xs text-gray-500">
                          January 12, 2019
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center border border-t-0 border-r-0 border-l-0 py-3">
                      <img
                        src="https://preview.colorlib.com/theme/aranoz/img/post/post_2.png"
                        alt="The Amazing Hubble"
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4">
                        <h4 className="text-md font-bold hover:text-[#FF3368]  cursor-pointer transition-all duration-500">
                          The Amazing Hubble
                        </h4>
                        <p className="text-xs text-gray-500">02 Hours ago</p>
                      </div>
                    </li>
                    <li className="flex items-center border border-t-0 border-r-0 border-l-0 py-3">
                      <img
                        src="https://preview.colorlib.com/theme/aranoz/img/post/post_3.png"
                        alt="Astronomy Or Astrology"
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4">
                        <h4 className="text-md font-bold hover:text-[#FF3368]  cursor-pointer transition-all duration-500">
                          Astronomy Or Astrology
                        </h4>
                        <p className="text-xs text-gray-500">03 Hours ago</p>
                      </div>
                    </li>
                    <li className="flex items-center border border-t-0 border-r-0 border-l-0 py-3">
                      <img
                        src="https://preview.colorlib.com/theme/aranoz/img/post/post_4.png"
                        alt="Asteroids telescope"
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4">
                        <h4 className="text-md font-bold hover:text-[#FF3368]  cursor-pointer transition-all duration-500">
                          Asteroids telescope
                        </h4>
                        <p className="text-xs text-gray-500">01 Hours ago</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* ----Tag Clouds---- */}
                <div className="bg-[#FBF9FF] p-6  ">
                  <h3 className="text-xl font-bold mb-4  border border-t-0 border-r-0 border-l-0 py-3">
                    Tag Clouds
                  </h3>
                  <div className="flex flex-wrap gap-2 ">
                    {[
                      "project",
                      "love",
                      "technology",
                      "travel",
                      "restaurant",
                      "life style",
                      "design",
                      "illustration",
                    ].map((tag) => (
                      <button
                        key={tag}
                        className="bg-white text-gray-700 px-4 py-2  border border-gray-200 hover:bg-[#FF3368] hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <br />

                {/* ---mikro img section---- */}
                <div className="bg-[#FBF9FF] p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Instagram Feeds</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "https://preview.colorlib.com/theme/aranoz/img/post/post_5.png",
                      "https://preview.colorlib.com/theme/aranoz/img/post/post_6.png",
                      "https://preview.colorlib.com/theme/aranoz/img/post/post_7.png",
                      "https://preview.colorlib.com/theme/aranoz/img/post/post_8.png",
                      "https://preview.colorlib.com/theme/aranoz/img/post/post_9.png",
                      "https://preview.colorlib.com/theme/aranoz/img/post/post_10.png",
                    ].map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Instagram Feed ${index + 1}`}
                        className="w-full h-full object-cover rounded cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
                <br />

                {/* ----Newsletter---- */}
                <div className="bg-[#FBF9FF] p-6  mt-6">
                  <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full p-3  border-gray-300 outline-none mb-4"
                  />
                  <button className="w-full bg-[#FF3368] text-white py-3  hover:bg-pink-500 transition-colors duration-300">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className=" absolute flex mt-[3280px] ml-[280px] gap-2 ">
              <button className="px-4 py-2 border border-gray-300  hover:bg-gray-200 transition-all duration-500">
                &lt;
              </button>
              <button className="px-4 py-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 transition-all duration-500">
                1
              </button>
              <button className="px-4 py-2 border bg-[#FBF9FF] border-gray-300 ">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300  hover:bg-gray-200 transition-all duration-500">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  );
}
