import React from "react";
import { products } from "../Constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomRightArrowButton from "../Components/CustomRightArrowButton";
import CustomLeftArrowButton from "../Components/CustomLeftArrowButton";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SimilarProducts = () => {
  return (
    <div className="sm:px-16  md:px-4  xl:px-0">
      <h1 className="text-3xl font-Urbanist font-bold mt-16 mb-8 ">
        You May Also Like
      </h1>
      <Carousel
        responsive={responsive}
        itemClass="px-[10px]"
        customRightArrow={<CustomRightArrowButton />}
        customLeftArrow={<CustomLeftArrowButton />}
      >
        {products.map((pro) => {
          return (
            <div
              className="hover:scale-105 duration-200 hover:cursor-pointer"
              key={pro.img}
            >
              <img
                src={pro.img}
                alt=""
                className="h-[450px] w-full object-fill"
              />
              <div className="px-4 mt-4">
                <h1 className="font-bold font-Urbanist text-2xl ">
                  {pro.name}
                </h1>
                <div className="flex justify-between mt-2">
                  <h1 className="text-2xl font-bold text-gray-600 font-Urbanist">
                    ${pro.discount}{" "}
                    <span className="text-base line-through ml-2">
                      ${pro.price}
                    </span>
                  </h1>
                  <h1 className="text-2xl font-semibold text-green-500 font-Urbanist">
                    20% off
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SimilarProducts;
