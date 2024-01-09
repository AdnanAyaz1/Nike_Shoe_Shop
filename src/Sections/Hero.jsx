import React from "react";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div>
      <Banner />
      <div className="py-16 text-center max-w-[60%] mx-auto">
        <h1 className="font-bold text-4xl font-Urbanist ">
          Cushioning For Your Miles
        </h1>
        <p className="text-xl text-gray-600 font-Urbanist  text-center my-6 ">
          A lite Weight Nike ZoomX is midsoled combined with increased stack
          height to help provide cushioning during extended streches of running
        </p>
      </div>
    </div>
  );
};

export default Hero;
