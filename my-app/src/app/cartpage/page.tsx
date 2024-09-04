"use client";
import { useState } from "react";
import Layouts from "../_layouts/layouts";

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Minimalistic shop for multipurpose use",
      price: 360,
      quantity: 1,
      image:
        "https://preview.colorlib.com/theme/aranoz/img/product/single-product/cart-1.jpg",
    },
    {
      id: 2,
      name: "Minimalistic shop for multipurpose use",
      price: 360,
      quantity: 1,
      image:
        "https://preview.colorlib.com/theme/aranoz/img/product/single-product/cart-1.jpg",
    },
    {
      id: 3,
      name: "Minimalistic shop for multipurpose use",
      price: 360,
      quantity: 1,
      image:
        "https://preview.colorlib.com/theme/aranoz/img/product/single-product/cart-1.jpg",
    },
  ]);

  const [shipping, setShipping] = useState("5");
  const [country, setCountry] = useState<"India" | "Pakistan" | "Bangladesh">(
    "Bangladesh"
  );
  const [state, setState] = useState<string>("");
  const [zipcode, setZipcode] = useState("");

  const countries = ["India", "Pakistan", "Bangladesh"];
  const states: { [key in "India" | "Pakistan" | "Bangladesh"]: string[] } = {
    India: ["Delhi", "Maharashtra", "Karnataka"],
    Pakistan: ["Punjab", "Sindh", "Khyber Pakhtunkhwa"],
    Bangladesh: ["Dhaka", "Chittagong", "Sylhet"],
  };

  const updateCartQuantity = (id: number, amount: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCost = parseFloat(shipping);

  const handleShippingChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShipping(event.target.value);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value as "India" | "Pakistan" | "Bangladesh");
    setState("");
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };

  return (
    <Layouts>
      <main>
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
        <div className="container mx-auto px-4 py-8 mt-12 mb-12">
          {/* Cart items */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody className="border border-r-0 border-l-0 py-4">
                {cart.map((item) => (
                  <tr key={item.id} className="border border-r-0 border-l-0">
                    <td className="flex items-center py-6  px-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-26 h-24 object-cover mr-4 border "
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-4">${item.price.toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateCartQuantity(item.id, -1)}
                          className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, 1)}
                          className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Subtotal and Shipping */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Shipping</label>
              <select
                value={shipping}
                onChange={handleShippingChange}
                className="border p-2 rounded w-full"
              >
                <option value="5">Flat Rate: $5.00</option>
                <option value="0">Free Shipping</option>
                <option value="10">Flat Rate: $10.00</option>
                <option value="2">Local Delivery: $2.00</option>
              </select>
            </div>

            {/* Country Dropdown */}
            <div className="flex items-center space-x-2 mb-4">
              <select
                value={country}
                onChange={handleCountryChange}
                className="border p-2 rounded w-1/3"
              >
                <option value="" disabled>
                  Select a Country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {/* State Dropdown */}
              <select
                value={state}
                onChange={handleStateChange}
                className="border p-2 rounded w-1/3"
                disabled={!country} // Disable if no country is selected
              >
                <option value="" disabled>
                  Select a State
                </option>
                {country &&
                  states[country].map((state: string) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </select>

              <input
                type="text"
                placeholder="Zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                className="border p-2 rounded w-1/3"
              />
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Total</span>
              <span>${(subtotal + shippingCost).toFixed(2)}</span>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-blue-100  rounded-3xl hover:bg-rose-500 hover:text-white px-4 py-2 rounded transition duration-500">
                Update Cart
              </button>
              <button className="bg-blue-100 rounded-3xl hover:bg-rose-500 hover:text-white px-4 py-2 rounded transition duration-500">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  );
};

export default CartPage;
