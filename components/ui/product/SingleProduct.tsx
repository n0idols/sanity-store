"use client";
import { useState } from "react";

import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import { toast } from "react-hot-toast";
import { BoxItem, Product } from "@/types";
import { useCart } from "@/components/context/cart";
import Related from "./Related";
import CategoryList from "../category/list";
import Info from "../layout/Info";

const SingleProduct = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function addItemToCart(e: React.SyntheticEvent) {
    e.preventDefault();
    addToCart(
      {
        id: product.id,
        name: product.name,
        shortname: product.shortname,
        price: product.price,
        mobileimg: product.mobileimg,
      },
      quantity
    );

    setQuantity(1);
    toast.success(`${product.name} added to cart`);
  }

  const icon = `h-4 w-4`;

  let one = product.gallery?.[0];
  let two = product.gallery?.[1];
  let three = product.gallery?.[2];

  const hasGallery = one && two && three;

  return (
    <div className="my-8">
      <form className="flex flex-col" onSubmit={addItemToCart}>
        <div className="container">
          <div className="grid md:grid-cols-2">
            <div className="col-span-1">
              <Image
                src={product.image || "/placeholder.jpg"}
                alt={product.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="col-span-1 lg:ml-20 md:ml-10">
              <div className="flex flex-col justify-center h-full space-y-7 ">
                {/* is new product? */}
                <p className="uppercase text-primary wider mt-4">new product</p>
                <h2 className="text-4xl font-bold tracking-wide uppercase">
                  {product.name}
                </h2>
                <p className="text-gray-500">{product.desc}</p>
                <p className="font-bold wide">${product.price}</p>
                <div>
                  <div className="flex">
                    <button
                      disabled={quantity < 2}
                      type="button"
                      onClick={() => setQuantity(quantity - 1)}
                      className="qty-btn"
                    >
                      <MinusIcon className={icon} />
                    </button>

                    <input
                      id="quantity"
                      type="number"
                      value={quantity}
                      disabled
                      className="qty-input"
                    />

                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="qty-btn"
                    >
                      <PlusIcon className={icon} />
                    </button>
                    <button
                      className="ml-4 bg-primary px-10 text-white uppercase text-xs font-bold tracking-widest"
                      type="submit"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="container my-24">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:gap-0">
          <div className="space-y-7">
            <h2 className="subheading">Features</h2>
            <p className="text-gray-500">{product.features}</p>
          </div>

          <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:ml-20 mb-20">
            <h2 className="subheading mb-7">In The Box</h2>
            {product.includes.box ? (
              <div className="space-y-2">
                {product.includes.box?.map((item: BoxItem) => (
                  <div key={item.qty} className="flex space-x-8 ">
                    <p className="text-primary font-bold text">{item.qty}x</p>
                    <p className="text-gray-500">{item.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No items included</p>
            )}
          </div>
        </div>
      </div>

      {/* <div className="max-w-6xl">
        <div className="grid grid-cols-2 grid-rows-2">
          {product.gallery?.map((image) => (
            <div className=" last:">
              <Image
                src={image}
                alt={product.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto "
              />
            </div>
          ))}
        </div>
      </div> */}

      {hasGallery ? (
        <div className="container">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src={one || "/placeholder.jpg"}
                alt={product.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg"
              />
              <Image
                src={two || "/placeholder.jpg"}
                alt={product.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={three || "/placeholder.jpg"}
                alt={product.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-full rounded-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      ) : null}

      <Related product={product} />
      <CategoryList />
      <Info />
    </div>
  );
};

export default SingleProduct;
