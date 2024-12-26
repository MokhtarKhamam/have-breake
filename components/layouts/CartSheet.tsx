"use client";
import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { Badge } from "../ui/badge";
import { useAppSelector } from "@/app/redux";
import { useRouter } from "next/navigation";

const CartSheet = () => {
  const productsCart = useAppSelector((state) => state.global.cart.length);
  console.log("productsCart", productsCart);
  const router = useRouter();
  return (
    <Button
      aria-label="Open cart"
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => router.push("/cart")}
    >
      {productsCart > 0 && (
        <Badge
          variant="secondary"
          className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
        >
          {productsCart}
        </Badge>
      )}
      <Icons.cart className="size-4" aria-hidden="true" />
    </Button>
  );
};

export default CartSheet;
