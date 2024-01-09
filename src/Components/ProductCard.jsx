import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ pro }) => {
  const navigate = useNavigate();

  const GoToProductDetails = () => {
    navigate("/products", { state: { product: pro } });
  };
  return (
    <div
      className="hover:scale-105 duration-200 hover:cursor-pointer"
      key={pro.img}
      onClick={GoToProductDetails}
    >
      <img src={pro.img} alt="" className="h-[450px] w-full object-fill" />
      <div className="px-4 mt-4">
        <h1 className="font-bold font-Urbanist text-2xl ">{pro.name}</h1>
        <div className="flex justify-between mt-2">
          <h1 className="text-2xl font-bold text-gray-600 font-Urbanist">
            ${pro.discount}{" "}
            <span className="text-base line-through ml-2">${pro.price}</span>
          </h1>
          <h1 className="text-2xl font-semibold text-green-500 font-Urbanist">
            20% off
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
