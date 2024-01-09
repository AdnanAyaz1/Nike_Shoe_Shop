import React from "react";

import emptyCart from "../assets/ec.jpg";
import CartItems from "../Components/CartItems";

const temp = [1,2,3]
const cart = 1;

const Cart = () => {
  return (
    <>
      {cart ? (
        <div className="py-28 px-4 md:px-8">
          <h1 className="text-4xl font-Urbanist font-bold text-center">
            Shopping Cart
          </h1>
          <div className="flex gap-8 mt-16 flex-col lg:flex-row">
            {/* 1st */}

            <div className="lg:w-[70%]">
              <h1 className="text-2xl font-Urbanist font-bold mb-2">
                Cart Items
              </h1>

              <div className="p-4 shadow-xl rounded-lg ">
                {
                  temp.map((cartItem)=>{
                    return <><CartItems /> <div className="h-0.5 bg-gray-200 rounded-full my-6"></div> </>
                  })
                }
              </div>
            </div>

            {/* 2nd */}
            <div className="lg:w-[30%] w-[80%] mx-auto">
              {/* Summary */}
              <h1 className="text-2xl font-Urbanist font-bold mb-2">Summary</h1>
              {/* SubTotal */}
              <div className="rounded-lg p-4 bg-green-100/40 ">
                {/* subtotal */}
                <div className="justify-between flex">
                  <h1 className="text-xl font-bold font-Urbanist">SubTotal</h1>
                  <h1 className="text-xl font-black font-Urbanist">$100</h1>
                </div>
                {/* line */}
                <div className="h-0.5 rounded-full bg-gray-300 my-4"></div>
                {/* text */}
                <p className="font-Urbanist tracking-wide font-semibold text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  quo ea magnam omnis, qui numquam. Nam, quisquam voluptate ea
                  explicabo harum iure quae similique nulla corporis pariatur
                  maiores non alias eaque possimus incidunt. Ipsam sit,
                  voluptate doloribus !
                </p>
              </div>
              {/* CheckOUt */}
              <button className="bg-black/90  text-white font-semibold font-Urbanist text-2xl mt-8 rounded-full w-full py-3 tracking-wide active:scale-90 duration-150 hover:bg-white border hover:border-2 border-black hover:text-black">
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-16 flex flex-col">
          <img src={emptyCart} alt="" className="mx-auto h-[500px] w-[500px]" />
          <h1 className="text-2xl font-Urbanist font-black text-center">
            Your Cart Is Empty
          </h1>
          <h1 className="text-xl  text-gray-400 text-center mt-2">
            Looks like you have not added anything in your Cart.
          </h1>
          <h1 className="text-xl  text-gray-400 text-center mb-2">
            Go Ahead and Explore Top Categories
          </h1>
          <button className="bg-black/90 text-white rounded-full p-4 px-6 text-xl font-Urbanist font-bold active:scale-95 hover:bg-white border-2 hover:border-black duration-200 hover:text-black self-center mt-8 shadow-xl">
            Continue Shopping
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
