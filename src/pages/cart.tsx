import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Link from "next/link";
import { calculateShipping } from "../utils/calculateShipping";
import CartItem from "../components/CartItem";

// Add the shared select className at the top with a smaller width
const selectClassName = `p-2 pl-4 pr-10 border border-gray-300 rounded-md text-sm w-24 
  focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-custom-purple
  appearance-none bg-white bg-[url('/images/chevron-down.svg')] bg-no-repeat bg-[center_right_1rem] bg-[length:16px_16px]`;

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [country, setCountry] = useState("US");

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateTotal();
  const shipping = calculateShipping(subtotal, country);
  const total = subtotal + shipping;

  return (
    <section className="py-[60px] lg:py-[120px] px-4 lg:px-8 bg-gradient-to-br from-[#F8F7FF] via-[#FCFAFF] to-[#FFFFFF]">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl leading-tight md:leading-[60px] font-bold mb-8 text-black text-center md:text-left">
          Shopping Cart
        </h1>

        {/* Horizontal Line */}
        <hr className="border-gray-300 mb-12" />

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-gray-600 mb-6 text-lg">Your cart is empty</p>
            <Link
              href="/shop"
              className="inline-block uppercase relative bg-custom-purple text-white px-[30px] lg:px-[40px] py-[15px] lg:py-[20px] rounded-md shadow-md text-[14px] lg:text-[16px]
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
                hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
            >
              <span className="relative z-10">Continue Shopping</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <div className="flex items-center gap-4">
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={selectClassName}
                      >
                        <option value="US">United States</option>
                        <option value="INTERNATIONAL">International</option>
                      </select>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <p className="text-sm text-gray-600">
                      {country === "US"
                        ? `Add $${(500 - subtotal).toFixed(
                            2
                          )} more for free shipping`
                        : `Add $${(750 - subtotal).toFixed(
                            2
                          )} more for free shipping`}
                    </p>
                  )}
                  {shipping === 0 && (
                    <p className="text-green-600 text-sm">
                      Free shipping applied!
                    </p>
                  )}
                </div>
                <div className="border-t border-gray-200 pt-6 mb-8">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  className="w-full inline-block uppercase relative bg-custom-purple text-white px-[30px] lg:px-[40px] py-[15px] lg:py-[20px] rounded-md shadow-md text-[14px] lg:text-[16px]
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
                  hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
                >
                  <span className="relative z-10">Proceed to Checkout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
