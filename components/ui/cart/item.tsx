import { useCart } from "@/components/context/cart";
import formatMoney from "@/lib/formatMoney";
import { Product } from "@/types";

import Image from "next/image";
import React from "react";

interface Props {
  item: {
    item: Product;
    quantity: number;
  };
  isCheckout?: boolean;
}
export default function CartItem({ item, isCheckout }: Props) {
  const { increaseItemQuantity, decreaseItemQuantity } = useCart();

  return (
    <div className="flex my-4">
      <div className="flex w-full ">
        <div className="flex items-center w-full space-x-4">
          <div className="w-16 h-16">
            <Image
              src={item.item.mobileimg || "/placeholdermob.jpg"}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              alt={item.item.name}
            />
          </div>
          <div className="text-sm font-semibold">
            <h4 className="capitalize">{item.item.shortname}</h4>
            <p className="text-gray-600">{formatMoney(item.item.price)}</p>
          </div>
        </div>

        {isCheckout && <p>x{item.quantity}</p>}

        {!isCheckout && (
          <div className="w-60 m-4 bg-gray-100 grid grid-cols-3">
            <button className="p-2" onClick={() => decreaseItemQuantity(item)}>
              &minus;
            </button>
            <input
              className="text-center bg-gray-100 text-black"
              type="number"
              value={item.quantity}
              disabled
            />
            <button className="p-2" onClick={() => increaseItemQuantity(item)}>
              +
            </button>
          </div>
        )}
      </div>
      {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
    </div>
  );
}
