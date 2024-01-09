import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import shoe1 from "../assets/p1.png";
const CartItems = () => {
  return (
    <div className=" flex justify-between">
      {/* image with text */}
      <div className="flex gap-4 ">
        <img
          src={shoe1}
          className="xl:h-[200px] xl:w-[200px] h-[150px] w-[150px] object-center rounded-lg"
        />
        <div className="">
          <h1 className="xl:text-3xl text-xl font-Urbanist font-bold lg:font-semibold">
            Air Jordan XXVII Low PF
          </h1>
          <h1 className="xl:text-xl text-base text-gray-500 font-Urbanist font-semibold mt-2">
            Men's Shoes
          </h1>
          {/* size and quantity */}
          <div className="flex gap-8 xl:mt-16 mt-10">
            {/* size */}
            <div className="flex gap-2 items-center">
              <label
                htmlFor="size"
                className="xl:text-xl text-base font-Urbanist text-gray-500 font-semibold"
              >
                Size
              </label>
              <select id="size" className="border rounded px-2 py-1">
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
            {/* quantity */}
            <div className="flex gap-2 items-center">
              <label
                htmlFor="quantity"
                className="xl:text-xl text-base font-Urbanist text-gray-500 font-semibold"
              >
                Quantity
              </label>
              <select id="quantity" className="border rounded px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="8">8</option>
                <option value="9">9</option>
                {/* Add more quantity options as needed */}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* price with icon */}
      <div className="    flex flex-col items-end xl:gap-28 gap-20">
        <h1 className=" xl:text-2xl text-xl font-Urbanist text-gray-500 font-semibold">
          Price: <span className="ml-2 text-black font-bold">$100</span>
        </h1>
        <FontAwesomeIcon
          icon={faTrash}
          className="lg:h-[25px] lg:w-[25px] h-[20px] w-[20px] hover:cursor-pointer active:scale-90 duration-100 text-gray-500"
        />
      </div>
    </div>
  );
};

export default CartItems;
