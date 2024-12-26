import ProductCard, { productProps } from "@/components/ProductCard";
import React from "react";
import AddProduct from "./_components/add-product";
// import { baseURL } from "@/config/constant";

const Setting = async () => {
  const data = await fetch(`/api/product`, {next: {tags: ["products"]}});
  const jsonData = await data.json();

  const products = jsonData || [];

  return (
    <div className="container">
      <div className="mt-12 flex justify-between items-center w-full">
        <h3 className="text-2xl font-bold ">products</h3>
        <AddProduct />
      </div>
      <div className="grid grid-cols-12 gap-5 my-12">
        {products.map((product: productProps) => (
          <ProductCard
            key={product.id}
            product={product}
            className="row-span-3"
          />
        ))}
      </div>
    </div>
  );
};

export default Setting;
