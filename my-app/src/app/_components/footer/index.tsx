import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Top Products */}
        <div>
          <h3 className="text-lg font-bold mb-4">Top Products</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Managed Website
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Manage Reputation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Power Tools
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Marketing Service
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Brand Assets
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-bold mb-4">Features</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Brand Assets
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Research
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Experts
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Agencies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Heaven fruitful doesnt over lesser in days. Appear creeping.
          </p>
          <form className="flex ">
            <input
              type="email"
              placeholder="Email Address"
              className="w- h-[64px] px-4 py-2 border bg-[#F9F9FE] border-0 rounded-l-md focus:outline-none "
            />
            <button
              type="submit"
              className="  ml-[-60px] mt-3 bg-[#FF3368] h-[40px] text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-500 ease-in-out"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10 flex flex-col lg:flex-row justify-between items-center border-t border-gray-200 pt-4">
        <p className="text-gray-500 text-sm text-center lg:text-left mb-4 lg:mb-0">
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span className="text-pink-500">♥</span> by{" "}
          <a
            href="https://colorlib.com/"
            className="text-[#FF3269] list-none text-decoration-none hover:no-underline"
          >
            Colorlib
          </a>
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <i className="fab fa-globe"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <i className="fab fa-behance"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
