import React from "react";
import ProductCard, { productProps } from "../ProductCard";
// import { baseURL } from "@/config/constant";

const Products = async () => {
  const data = await fetch(`api/product`);
  const jsonData = await data.json();

  const products = jsonData || [];

  return (
    <>
      <div className="mt-12">
        <h3 className="text-2xl font-bold ">Featured products</h3>
        <p className="text-sm text-gray-500 font-medium">
          Explore products from around the world
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5 my-12">
        {products.map((product: productProps) => (
          <ProductCard key={product.id} product={product} className="row-span-3" />
        ))}
      </div>
    </>
  );
};

export default Products;
