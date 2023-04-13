"use client";

import { useCart } from "@/components/context/cart";
import CartItem from "@/components/ui/cart/item";
import formatMoney from "@/lib/formatMoney";
import { Key } from "react";

const Checkout = () => {
  const { cart, totalCartPrice } = useCart();

  return (
    <div className="bg-gray-200 ">
      <section className="container py-10 pb-10">
        {cart?.length === 0 ? (
          <h1>Your cart is empty. Add some items.</h1>
        ) : (
          <div className=" px-6 grid lg:grid-cols-3 grid-cols-1 gap-y-8 lg:gap-x-8">
            <div className="col-span-2 bg-white lg:px-8 px-8 rounded-lg">
              <h2 className="py-6 uppercase tracking-widest font-bold text-2xl">
                Checkout
              </h2>
              <form action="">
                <fieldset>
                  <legend>Billing details</legend>
                  <div className="form-row">
                    <div className="input-row">
                      <label htmlFor="name">name</label>
                      <input
                        type="text"
                        name=""
                        placeholder="Alexei Ward"
                        className="form w-full"
                      />
                    </div>
                    <div className="input-row">
                      <label htmlFor="email">email address</label>
                      <input
                        type="email"
                        placeholder="alexei@mail.com"
                        className="form w-full"
                      />
                    </div>
                  </div>

                  <label htmlFor="phone">phone number</label>
                  <div className="md:pr-4">
                    <input
                      type="text"
                      placeholder="+1 202-555-0136"
                      className="form md:w-1/2 w-full"
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>shipping info</legend>
                  <label htmlFor="address">address</label>

                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className="form w-full"
                  />

                  <div className="form-row">
                    <div className="input-row">
                      <label htmlFor="zip">zip</label>
                      <input
                        type="text"
                        placeholder="10001"
                        className="form w-full"
                      />
                    </div>
                    <div className="input-row">
                      <label htmlFor="city">city</label>
                      <input
                        type="text"
                        placeholder="new york"
                        className="form w-full"
                      />
                    </div>
                  </div>
                  <label htmlFor="city">country</label>
                  <div className="md:pr-4">
                    <input
                      type="text"
                      placeholder="United States"
                      className="form md:w-1/2 w-full"
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>payment details</legend>
                  <label htmlFor="">currency</label>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="e-money"
                      id="e-money"
                    />
                    <label
                      className="mb-0 ml-2 text-base font-normal"
                      htmlFor="e-money"
                    >
                      e-money
                    </label>
                  </div>

                  <div className="flex">
                    <input type="radio" name="payment" id="cash" />{" "}
                    <label
                      className="mb-0 ml-2 text-base font-normal"
                      htmlFor="cash"
                    >
                      Cash on delivery
                    </label>
                  </div>
                </fieldset>
              </form>
            </div>

            <div className="bg-white p-4 rounded-lg ">
              <h4 className="uppercase tracking-widest font-bold">summary</h4>
              {cart?.map((cartItem: any, index: Key | null | undefined) => {
                return (
                  <div key={index}>
                    <CartItem item={cartItem} isCheckout />
                  </div>
                );
              })}
              <div className=" space-y-4">
                <div className="flex justify-between">
                  <p className="uppercase text-sm text-gray-500">shipping</p>
                  <p>$50.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="uppercase text-sm text-gray-500">grand total</p>
                  {totalCartPrice ? (
                    <p className="font-bold">{formatMoney(totalCartPrice)}</p>
                  ) : (
                    <p>...</p>
                  )}
                </div>

                <button className="btn w-full">confirm & pay</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Checkout;
