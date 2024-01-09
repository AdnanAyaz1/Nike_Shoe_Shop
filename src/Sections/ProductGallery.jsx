import React, { useState } from "react";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

const gallery = [p2, p3, p4, p5];

const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];

const ProductGallery = ({ pro }) => {
  const [bigImg, setBigImg] = useState(pro.img);
  return (
    <div className=" pt-28 flex flex-col gap-16  lg:flex-row relative  px-5">
      {/* 1st */}
      <div className="lg:w-1/2 flex gap-2 flex-col-reverse md:flex-row mx-auto lg:mx-0">
        <div className="space-y-4 flex flex-row md:flex-col items-center  gap-4">
          {gallery.map((img) => {
            return (
              <div
                className="relative rounded-lg hover:cursor-pointer group "
                onClick={() => setBigImg(img)}
              >
                <img
                  src={img}
                  className="h-[80px] w-[100px] rounded-lg  object-center "
                ></img>
                <div className=" hidden group-hover:flex absolute inset-0 bg-black/10 rounded-lg"></div>
              </div>
            );
          })}
        </div>
        <div className="">
          <img src={bigImg} alt="" srcset="" className="h-[600px] w-[600px]" />
        </div>
      </div>
      {/* 2nd */}
      <div className="lg:w-[40%] xl:w-[35%] px-12 lg:px-2  md:w-[70%] mx-auto ">
        <h1 className="text-4xl font-Urbanist font-bold">Jordan Delta 3 Low</h1>
        <h1 className="text-xl font-Urbanist font-bold my-4">Men Shoes</h1>
        <div className="flex justify-between">
          <h1 className="text-xl font-Urbanist font-bold">
            {" "}
            MRP: <span className="font-black">$800</span>
            <span className="line-through text-base font-black ml-2">$890</span>
          </h1>
          <h1 className="text-xl font-Urbanist text-green-500 font-bold">
            12.5% off
          </h1>
        </div>
        <h1 className="font-Urbanist text-xl text-gray-400 mt-2 ">
          incl of taxes
        </h1>
        <h1 className="font-Urbanist text-xl text-gray-400 mt-1">
          Also include All applicable duties
        </h1>
        <h1 className="text-xl font-bold font-Urbanist mt-16">Select Size</h1>
        <div className="grid grid-cols-3 gap-2 mt-4 ">
          {sizes.map((size, i) => {
            const bg = i > 9 ? "gray-200" : "white";
            const style = `border-2 rounded-lg text-lg font-Urbanist font-bold text-center py-2 hover:cursor-pointer focus:bg-black/80 focus:text-white bg-${bg} hover:border-black`;
            return <button className={style}>UK {size}</button>;
          })}
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <button className="rounded-full bg-black/80 text-white text-xl font-Urbanist py-3 hover:bg-white hover:text-black duration-200 border-2 border-black active:scale-95">
            Add To Cart
          </button>
          <button className="rounded-full hover:bg-black/80 hover:text-white text-xl font-Urbanist py-3 bg-white text-black duration-200 border-2 border-black active:scale-95">
            Add To Wishlist
          </button>
        </div>

        <h1 className="text-xl font-bold font-Urbanist mt-8">
          Product Details
        </h1>

        <h1 className="mt-6 text-xl font-Urbanist font-semibold">
          You Cant help but look cool in low tops that melds with high tech
          craft with high tect features.Aary Ripstop and soft. synthetic suede
          pair with a smcn)th interior The result? Classic low-top looks ond 'he
          premium comfort expect from Jordon.
        </h1>
      </div>
    </div>
  );
};

export default ProductGallery;
