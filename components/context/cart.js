"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  const [show, toggleShow] = useState(false);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    calcCartTotalPrice(cart);
  }, [cart]);

  function remFromCart(index) {
    if (confirm("Are you sure you want to remove this item?")) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      calcCartTotalPrice(newCart);
      // setCookie("cart", JSON.stringify(newCart), {
      //   path: "/",
      // });
    }
  }

  function addToCart(item, quantity = 1) {
    console.log(item, quantity);

    const index = cart.findIndex((cartItem) => {
      const isSameItem = cartItem.item.id === item.id;
      console.log(isSameItem);
      if (!isSameItem) return;
      return true;
    });

    const newCart = [...cart];
    if (index >= 0) newCart[index].quantity += quantity;
    else
      newCart.push({
        item,
        quantity,
      });
    setCart(newCart);
    calcCartTotalPrice(newCart);
  }

  function emptyCart() {
    setCart([]);
  }

  function increaseItemQuantity(item) {
    const index = cart.findIndex((cartItem) => {
      const isSameItem = cartItem.item.id === item.item.id;
      if (!isSameItem) return;
      return true;
    });

    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
    calcCartTotalPrice(newCart);
  }

  function decreaseItemQuantity(item) {
    const index = cart.findIndex((cartItem) => {
      const isSameItem = cartItem.item.id === item.item.id;
      if (!isSameItem) return;
      return true;
    });
    const newCart = [...cart];
    if (newCart[index].quantity === 1) {
      // newCart[index].quantity--;
      // setCart(newCart);
      // calcCartTotalPrice(newCart);
    }
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
      calcCartTotalPrice(newCart);
    }
  }

  function calcCartTotalPrice(cartToCalc) {
    let total = 0;
    cartToCalc.forEach((value) => {
      let itemTotal = value.item.price;
      value.modifications?.forEach((modification) => {
        itemTotal += modification.amount;
      });
      itemTotal *= value.quantity;
      total += itemTotal;
    });
    setTotalCartPrice(total);
  }
  function toggleCart() {
    toggleShow(!show);
  }

  function closeCart() {
    toggleShow(false);
  }

  function openCart() {
    toggleShow(true);
  }
  return (
    <LocalStateProvider
      value={{
        cart,
        addToCart,
        remFromCart,
        emptyCart,
        totalCartPrice,
        show,
        toggleCart,
        closeCart,
        openCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };
