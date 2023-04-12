"use client";

import { Toaster } from "react-hot-toast";
import { CartStateProvider } from "./cart";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <CartStateProvider>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Toaster />
    </CartStateProvider>
  );
}
