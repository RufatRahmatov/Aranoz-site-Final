"use client";

import React, { useState } from "react";
import useSWRMutation from "swr/mutation";
import CheckoutForm from "../_components/checkoutform/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
);

const fetcher = (url: string, { arg }: { arg: any }) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());

export default function PreviewPage() {
  const { trigger, data, error } = useSWRMutation("/src/api", fetcher);

  const handlePaymentSuccess = () => {
    console.log("Payment successful!");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error) {
      console.log("Error occurred:", error);
    } else if (data) {
      console.log("Success:", data);

      if (data?.url) {
        window.location.href = data.url;
      }
    }
  };

  return (
    <div>
      {/* Cart Items */}
      {/* <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.id}, {item.quantity}
          </li>
        ))}
      </ul> */}

      <Elements stripe={stripePromise}>
        <CheckoutForm amount={20} onSuccess={handlePaymentSuccess} />
      </Elements>

      <form onSubmit={handleSubmit}>
        <section className="ml-[700px]">
          <button className="" type="submit" role="link">
            Checkout
          </button>
        </section>
      </form>

      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </div>
  );
}
