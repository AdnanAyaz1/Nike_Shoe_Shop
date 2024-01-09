import React from "react";
import { products } from "../Constants";
import ProductCard from "../Components/ProductCard";
const Products = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 space-y-8 px-8">
      {products.map((pro) => {
        return <ProductCard pro={pro} />;
      })}
    </div>
  );
};

export default Products;
