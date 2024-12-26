"use client";
import React from "react";
import { useAppSelector } from "../redux";
import ProductCardCart from "./_components/ProductCardCart";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "@/state";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartProduct = useAppSelector((state) => state.global.cart);


  if (!cartProduct.length) {
    return (
      <Link
        href="/"
        className="block py-8 font-bold decoration-black text-center"
      >
        There is no product start add some !!
      </Link>
    );
  }
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-5 my-12">
        {cartProduct.map((product) => (
          <ProductCardCart
            key={product.id}
            product={product}
            className="row-span-3"
          />
        ))}
      </div>
      {cartProduct.length && (
        <div className="flex justify-between items-center py-8 ">
          <Button size="lg" onClick={() => router.push("/payment")}>
            Checkout
          </Button>
          <Button
            onClick={() => {
              cartProduct.map((product) => {
                dispatch(removeProductFromCart(product.id));
              });
            }}
          >
            Empty Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
