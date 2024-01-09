import React from "react";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Banner = () => {
  return (
    <div className="lg:h-[600px] relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        transitionTime={300}
        renderArrowPrev={(clickHandler) => (
          <button
            className="flex bg-black py-4 px-6 absolute bottom-0 right-20 z-10"
            onClick={clickHandler}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="h-[20px] w-[20px] font-bold text-white hover:text-gray-500"
            />
          </button>
        )}
        renderArrowNext={(handler) => (
          <button className="flex bg-black py-4 px-6 absolute bottom-0 right-0" onClick={handler}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-[20px] w-[20px] font-bold text-white hover:text-gray-500"
            />
          </button>
        )}
      >
        <div>
          <img src={shoe1} />
          <div className="absolute bg-white  bottom-[20px] lg:bottom-[80px] left-0  p-4 px-8 z-10">
            <h1 className="lg:text-4xl text-2xl font-semibold font-Oswald ">SHOP NOW</h1>
          </div>
        </div>
        <div>
          <img src={shoe2} />
          <div className="absolute bg-white bottom-[20px] lg:bottom-[80px] left-0  p-4 px-8 z-10">
            <h1 className="lg:text-4xl text-2xl font-semibold font-Oswald ">SHOP NOW</h1>
          </div>
        </div>
        <div>
          <img src={shoe3} />
          <div className="absolute bg-white bottom-[20px] lg:bottom-[80px] left-0  p-4 px-8 z-10">
            <h1 className="lg:text-4xl text-2xl font-semibold font-Oswald ">SHOP NOW</h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
// <div className="w-full xl:h-[600px]  relative overflow-hidden ">
//   <div
//     className=" transition-transform duration-300 ease-in-out flex "
//     style={{ transform: `translateX(${position}px)` }}
//   >
//     <img src={shoe1} alt="" className="lg:min-w-[1440px] h-full" />
//     <img src={shoe2} alt="" className="lg:min-w-[1440px] h-full " />
//     <img src={shoe3} alt="" className="lg:min-w-[1440px] h-full " />
//   </div>
//   {/* shop now */}
//   <div className="absolute bg-white bottom-[80px] left-0  p-4 px-8">
//     <h1 className="text-4xl font-semibold font-Oswald ">SHOP NOW</h1>
//   </div>
//   {/* buttons */}
//   <div className="absolute z-10 bottom-0 flex right-0 gap-1">
//     <button className="flex bg-black py-4 px-6" onClick={handleMoveLeft}>
//       <FontAwesomeIcon
//         icon={faArrowLeft}
//         className="h-[20px] w-[20px] font-bold text-white hover:text-gray-500"
//       />
//     </button>
//     <button className="flex bg-black py-4 px-6" onClick={handleMoveRight}>
//       <FontAwesomeIcon
//         icon={faArrowRight}
//         className="h-[20px] w-[20px] font-bold text-white hover:text-gray-500"
//       />
//     </button>
//   </div>
// </div>
