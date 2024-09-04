"use client";
import React from "react";
import Layouts from "../_layouts/layouts";
import { BiSolidRightArrow } from "react-icons/bi";
import Swiper from "../_components/swiper";
import { FiHeart } from "react-icons/fi";
import Timer from "../_components/timer";
import MySwiper from "../_components/swiper";
// import { Navigation } from "swiper";

export default function Home() {
  return (
    <Layouts>
      <main>
        <div className="bg-[#ECFDFF] flex flex-col md:flex-row items-center justify-between p-8 h-auto md:h-[700px] relative">
          {/* Sol Taraf */}
          <div className="w-full md:w-[45%] mb-8 md:mb-[100px] md:ml-[150px] relative left-0 md:left-[200px] text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold">
              Wood &<br /> Cloth Sofa
            </h1>
            <p className="mt-4 md:mt-8">
              Incididunt ut labore et dolore magna aliqua quis <br /> ipsum
              suspendisse ultrices gravida. Risus <br /> commodo viverra
            </p>
            <div className="mt-8 md:mt-16">
              <button className="bg-gradient-to-r from-[#FF0E54] to-[#FF4837] h-[50px] w-[140px] md:h-[59px] md:w-[180px] text-white rounded-md">
                BUY NOW
              </button>
            </div>
          </div>

          <div className="w-full md:w-[48%] flex justify-center mb-[20px]">
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
              alt="Wood & Cloth Sofa"
              className="w-full md:w-[1000px]"
            />
          </div>
          <div className="p-2 flex justify-center items-center mt-[630px]">
            <button className="bg-white h-[50px] md:h-[60px] w-[150px] md:w-[200px] flex items-center justify-center text-center mt-4 font-bold">
              Next
            </button>

            <button className="bg-white h-[50px] md:h-[60px] w-[150px] md:w-[200px] flex items-center justify-center text-center mt-4 font-bold ml-4">
              Preview
            </button>
          </div>
        </div>

        {/* Featured Category Section */}
        <div className=" flex flex-col items-center p-8 h-auto relative top-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center top-10">
            Featured Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] relative top-8">
            <div className="relative bg-[#F8FBFF] p-4   w-[620px] h-[410px] group">
              <span className="relative left-5 top-6 left-2 text-sm text-gray-500 ">
                Premium Quality
              </span>
              <h3 className="font-bold text-2xl mt-8 relative left-[20px]">
                Latest foam Sofa
              </h3>
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png"
                alt="Sofa Image 1"
                className="mx-auto mt-4 w-[335px] relative left-[105px] top-[-70px]"
              />
              <a
                href="#"
                className="text-[#FF3368] mt-4 inline-block font-bold flex items-center gap-2 text-md relative top-[-150px] left-7 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              >
                EXPLORE NOW
                <BiSolidRightArrow />
              </a>
            </div>

            <div className="relative left-9 bg-[#F8FBFF] p-4   text-center  w-[550px] h-[410px] group">
              <span className="relative left-[-184px] top-6 left-2 text-sm text-gray-500 ">
                Premium Quality
              </span>
              <h3 className="font-bold text-2xl mt-8 relative left-[-140px]">
                Latest foam Sofa
              </h3>
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png"
                alt="Sofa Image 2"
                className="mx-auto relative left-[100px] top-[-80px]"
              />
              <a
                href="#"
                className="text-[#FF3368] mt-2 inline-block font-bold flex items-center gap-2 text-md relative top-[-150px] left-7 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              >
                EXPLORE NOW
                <BiSolidRightArrow />
              </a>
            </div>

            <div className="relative bg-[#F8FBFF] p-4 text-left h-[410px] w-[500px] flex flex-col items-start group">
              <span className="mt-[20px] text-sm text-gray-500 ml-5">
                Premium Quality
              </span>
              <h3 className="font-bold text-2xl mt-2 ml-5">Latest foam Sofa</h3>
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png"
                alt="Sofa Image 3"
                className="w-[230px] h-[250px] mt-[65px] ml-[210px]"
              />
              <a
                href="#"
                className="text-[#FF3368] mt-[-65px] ml-[20px] inline-block font-bold flex items-center gap-2 text-md opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              >
                EXPLORE NOW
                <BiSolidRightArrow />
              </a>
            </div>

            <div className="relative bg-[#F8FBFF] text-center h-[410px] w-[664px] ml-[-80px] group">
              <span className="absolute top-2 left-2 text-sm text-gray-500 mt-[20px] ml-6">
                Premium Quality
              </span>
              <h3 className="font-bold text-2xl mt-[55px] ml-8 flex item-start">
                Latest foam Sofa
              </h3>
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png"
                alt="Sofa Image 4"
                className="mt-[80px] ml-[90px]"
              />
              <a
                href="#"
                className="text-[#FF3368] mt-[88px] inline-block font-bold flex items-center gap-2 text-md relative top-[-150px] left-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              >
                EXPLORE NOW
                <BiSolidRightArrow />
              </a>
            </div>
          </div>
        </div>

        {/* awesome section */}
        <div className="flex flex-col justify-center items-center p-8 h-auto relative top-[200px] gap-3">
          <div className="flex justify-between items-center w-full ">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 ml-[335px] mb-12">
              Awesome
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
              "https://preview.colorlib.com/theme/aranoz/img/product/product_5.png",
              "https://preview.colorlib.com/theme/aranoz/img/product/product_6.png",
              "https://preview.colorlib.com/theme/aranoz/img/product/product_7.png",
              "https://preview.colorlib.com/theme/aranoz/img/product/product_8.png",
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
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className=" relative text-[#FF4368] font-bold flex items-center gap-12 top-[170px] right-[20px]">
                    + ADD TO CART <FiHeart className="text-black" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* timeing section */}
        <div className="min-h-screen flex items-center justify-center bg-[#ECFDFF] mt-[390px] px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-[1200px]">
            <div className="p-6 rounded-lg w-full max-w-[700px]">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png"
                alt="Product"
                className=" rounded-lg "
              />
            </div>
            <div className="text-center md:text-left w-full max-w-[700px]">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 p-4 mb-[40px]">
                Weekly Sale on 60% <br />
                <span className="relative top-2 md:top-4">
                  Off All Products
                </span>
              </h1>
              <Timer />
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="p-4 md:p-6 h-[50px] md:h-[62px] rounded-l-md outline-none w-full max-w-[370px]"
                />
                <button className="p-2 bg-gradient-to-r from-[#FF0E54] to-[#FF4837] hover:bg-[#FF9612] font-bold h-[50px] md:h-[62px] text-white text-sm rounded-r-md w-full md:w-[190px] max-w-[200px] mt-4 md:mt-0">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Best seller section */}
        <div className="flex flex-col justify-center items-center p-8 h-auto relative top-[200px] gap-3">
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

        {/* bg-img section */}
        <div className=" mt-[260px] h-[600px]  flex flex-col items-center justify-center bg-[#ECFDFF] bg-[url('https://preview.colorlib.com/theme/aranoz/img/subscribe_area.png')] bg-no-repeat bg-cover bg-center px-4">
          <div className="text-center mb-6">
            <h3 className="text-sm relative bottom-[60px] text-[#FF0E54]">
              JOIN OUR NEWSLETTER
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 ">
              Subscribe to get Updated <br />
              <span className="mt-2">with new offers</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[800px] gap-3 mt-12">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-6 h-[62px] rounded-l-md outline-none w-full md:max-w-[500px] mb-4 md:mb-0"
            />
            <button className="p-4 bg-gradient-to-r from-[#FF0E54] to-[#FF4837] hover:bg-[#FF9612] font-bold h-[62px] text-white text-sm rounded-md w-full md:w-[200px]">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
        {/* footer top section */}
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-[1200px] ml-[150px] gap-0">
            <div className="flex justify-center h-[180px] border-l border-t-0 border-b-0 border-l-0">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png"
                alt="Label 1"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-l  border-t-0 ">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png"
                alt="Label 2"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-l border-t-0 border-r border-b-0">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png"
                alt="Label 3"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-t-0 border-l-0 border-b-0 border-r-0">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png"
                alt="Label 4"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-l border-t-0  border-r-0">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png"
                alt="Label 5"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-r border-t border-b-0 border-l-0">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png"
                alt="Label 6"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-t border-l-0 border-b-0 border-r-0">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png"
                alt="Label 7"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-l border-t border-b-0 border-r">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png"
                alt="Label 8"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-t border-l-0 border-b-0 border-r-0">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png"
                alt="Label 9"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>

            <div className="flex justify-center h-[180px] border-l border-t border-b-0 border-r-0">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png"
                alt="Label 10"
                className="w-full max-w-[150px] object-contain p-4"
              />
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  );
}
