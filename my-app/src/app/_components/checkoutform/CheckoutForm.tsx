"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

interface CheckoutFormProps {
  amount: number;
  onSuccess: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Azerbaijan");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    try {
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            email: email,
            name: name,
            address: {
              country: country,
            },
          },
        });

      if (paymentMethodError) {
        setError(paymentMethodError.message || "Something went wrong.");
        setLoading(false);
        return;
      }

      const { error: confirmError } = await stripe.confirmCardPayment(
        "{CLIENT_SECRET_FROM_BACKEND}",
        {
          payment_method: paymentMethod.id,
        }
      );

      if (confirmError) {
        setError(confirmError.message || "Payment failed.");
        setLoading(false);
        return;
      }

      onSuccess();
      setLoading(false);
    } catch (err) {
      setError("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-28 ml-[700px] mb-4 w-[400px]"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Complete Payment</h2>

      {/* Google Pay button */}
      <button className="w-full mb-4 py-2 bg-black text-white font-bold text-lg rounded">
        <img
          src="https://js.stripe.com/v3/fingerprinted/img/dark-8191afec51483e108a2dc5f17fb0efd0.svg"
          alt="Google Pay"
          className="w-16 inline mr-2"
        />
      </button>

      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name on Card
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Cardholder Name"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* ---sectuon-master-card---- */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="card-info"
        >
          Kart Məlumatı
        </label>

        <div className="border rounded w-full py-2 px-3 text-gray-700 leading-tight flex items-center">
          <div className="flex-grow">
            {/* Stripe Card Element */}
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#495057",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#fa755a",
                  },
                },
              }}
              className="w-full"
            />
          </div>
          {/* Kartın Loqoları */}
          <div className="ml-3 flex space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="w-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="w-8"
            />
          </div>
        </div>
      </div>

      {/* Country selection */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="country"
        >
          Country or Region
        </label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="USA">USA</option>
          <option value="Turkey">Turkey</option>
          <option value="Iran">Iran</option>
          <option value="Georgia">Georgia</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
