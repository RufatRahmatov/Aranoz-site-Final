"use client";
import React, { useState } from "react";
import Layouts from "../_layouts/layouts";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.subject
    ) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }

    toast.success("Mesaj göndərildi!");
    console.log("Form submitted:", formData);

    setFormData({
      message: "",
      name: "",
      email: "",
      subject: "",
    });
  };

  return (
    <Layouts>
      <main>
        {/* ---Top section--- */}
        <div className="bg-[#ECFDFF] flex flex-col md:flex-row items-center justify-center p-6 h-[400px] overflow-hidden">
          <div className="relative text-center mt-[-100px] ml-[200px] md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800">Contact us</h1>
            <p className="text-gray-500 mt-4">Home - Contact us</p>
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

        {/* ----Contact section--- */}
        <div className=" w-[1300px] ml-[320px] flex flex-col lg:flex-row items-start justify-between min-h-screen p-8 bg-white">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message"
                className="w-full h-[26vh] p-4 border border-gray-300 rounded-sm outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-500"
              ></textarea>
              <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-4 border border-gray-300 rounded-sm outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-500"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full p-4 border border-gray-300 rounded-sm outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-500"
                />
              </div>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter Subject"
                className="w-full p-4 border border-gray-300 rounded-sm outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-500"
              />
              <br />
              <button
                type="submit"
                className="w-full lg:w-auto bg-[#FF3368] text-white py-3 px-8 rounded-full hover:bg-[#FF0409] transition-all duration-500 cursor-pointer mt-8"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="ml-[100px] mt-[50px] w-full lg:w-1/3 text-gray-700 space-y-8">
            <div className="flex items-start space-x-4">
              <AiOutlineHome className="text-4xl text-[#8F9195]" />
              <div>
                <h4 className="font-bold">Buttonwood, California.</h4>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <HiMiniDevicePhoneMobile className="text-4xl text-[#8F9195]" />
              <div>
                <h4 className="font-bold">00 (440) 9865 562</h4>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <AiOutlineMail className="text-4xl text-[#8F9195]" />
              <div>
                <h4 className="font-bold">support@colorlib.com</h4>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </Layouts>
  );
}
