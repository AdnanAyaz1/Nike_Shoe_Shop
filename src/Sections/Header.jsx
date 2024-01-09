import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { navLinks } from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faChevronDown,
  faChevronUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const categories = ["Watches", "Snickers", "Bags", "Airpods", "Headsets"];

const Header = () => {
  const [dropdown, setdrop] = useState(0);
  const handledropdown = () => {
    setdrop((pre) => !pre);
  };

  return (
    <div className=" sticky top-0 bg-white  z-30 ">
      <div className="flex justify-between items-center px-12 max-w-[1440px] mx-auto shadow-xl">
        {/* logo */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              srcset=""
              className="h-[80px] w-[80px] "
            />
          </Link>
        </div>
        {/* links */}
        <div className="lg:flex gap-8 hidden">
          {navLinks.map((link, i) => {
            return (
              <h1 className="font-semibold text-xl font-Urbanist text-gray-500 hover:cursor-pointer hover:text-gray-600 hover:underline-offset-8 hover:underline">
                {/* if i == 2 we want a icon with link name */}
                {i == 2 ? (
                  <span
                    className="flex items-center justify-center gap-2 relative"
                    onClick={() => handledropdown()}
                  >
                    {link}
                    <FontAwesomeIcon
                      icon={dropdown ? faChevronUp : faChevronDown}
                      className="h-[12px] w-[12px] font-bold text-black"
                    />
                    {/* a dropdown is to displayed when the link is clicked */}
                    {dropdown ? (
                      <div className="absolute bg-white rounded-lg bottom-[-210px] shadow-xl py-4 px-8 z-30">
                        {categories.map((cat) => (
                          <h1 className="text-gray-500 hover:cursor-pointer hover:text-gray-600 hover:underline-offset-8 hover:underline mb-2">
                            {cat}
                          </h1>
                        ))}
                      </div>
                    ) : null}
                  </span>
                ) : (
                  link
                )}
              </h1>
            );
          })}
        </div>
        {/* icons */}
        <div className="flex gap-8">
          <FontAwesomeIcon
            icon={faUser}
            className="h-[25px] w-[25px] hover:scale-125"
          />
          <div className="relative">
            <FontAwesomeIcon
              icon={faHeart}
              className="h-[25px] w-[25px] hover:scale-125"
            />
            <p className="absolute text-white bg-red-600 rounded-full  px-1 text-sm top-[-10px] right-[-16px]">
              58
            </p>
          </div>
          <div className="relative">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="h-[25px] w-[25px] hover:scale-125"
              />
            </Link>
            <p className="absolute text-white bg-red-600 rounded-full  px-1 text-sm top-[-10px] right-[-12px]">
              58
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
