"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { Bars3Icon } from "@heroicons/react/20/solid";

import MobNav from "./MobNav";
import { useCart } from "@/components/context/cart";
import CartModal from "../cart/modal";
import Logo from "../icons/Logo";
import CartIcon from "../icons/CartIcon";

export const navLinks = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "headphones",
    href: "/headphones",
  },
  {
    title: "speakers",
    href: "/speakers",
  },
  {
    title: "earphones",
    href: "/earphones",
  },
];

export default function Navbar() {
  const { cart, show, toggleCart, closeCart } = useCart();

  const [isMob, setMob] = useState(false);
  const pathname = usePathname();

  function toggleMenu() {
    setMob(!isMob);
  }

  function toggleMob() {
    setMob(!isMob);
  }

  return (
    <>
      <CartModal show={show} onClose={closeCart} />
      <MobNav show={isMob} onClose={toggleMob} />
      <nav className={pathname === "/" ? `bg-transparent` : `bg-black `}>
        <div className="container py-6 text-white">
          <div className="flex justify-between">
            {" "}
            {/* mob button */}
            <button
              onClick={toggleMenu}
              className="flex items-center lg:hidden"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            {/* LOGO */}
            <div>
              <a href="/" className="text-2xl font-extrabold  ">
                <Logo />
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden items-center justify-center space-x-8 text-sm font-light lg:flex uppercase wide">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={pathname === link.href ? `text-primary` : ``}
                >
                  {link.title}
                </a>
              ))}
            </div>
            {/* secondary nav */}
            <div className="grid place-items-center">
              <button
                onClick={toggleCart}
                className="grid place-items-center relative"
              >
                <CartIcon />
                {cart?.length > 0 ? (
                  <span className="badge">{cart.length}</span>
                ) : (
                  <></>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
