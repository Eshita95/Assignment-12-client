import React from 'react';

const Delivery = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 mt-8 gap-8">
      <div className=" bg-slate-200 rounded-md w-72 p-5 flex items-center justify-center gap-8 shadow-lg">
        <div>
          <span className="">
            <i class="fa-solid fa-briefcase  text-5xl text-pink-600"></i>
          </span>
        </div>
        <div className="title1 text-gray-600">
          <h1 className=" text-lg font-semibold ">Easy To Shop</h1>
          <p className=" text-[15px] font-medium">
            Buy Every Product Single Click It's Card
          </p>
        </div>
      </div>

      {/*  */}
      <div className=" bg-slate-200 rounded-md w-72 p-5 flex items-center justify-center gap-8 shadow-lg">
        <div>
          <span className="">
            <i class="fa-solid fa-truck  text-4xl text-pink-600"></i>
          </span>
        </div>
        <div className="title1 text-gray-600">
          <h1 className=" text-lg font-semibold ">WorldWide Delivery</h1>
          <p className=" text-[15px] font-medium">
            We Delivered Worldwide Every Week
          </p>
        </div>
      </div>

      {/*  */}
      <div className=" bg-slate-200 rounded-md w-72 p-5 flex items-center justify-center gap-8 shadow-lg">
        <div>
          <span className="">
            <i class="fa-solid fa-money-check-dollar   text-5xl text-pink-600"></i>
          </span>
        </div>
        <div className="title1 text-gray-600">
          <h1 className=" text-lg font-semibold ">Secure Payment</h1>
          <p className=" text-[15px] font-medium">
            We Have Secure Payment System
          </p>
        </div>
      </div>

      {/*  */}
      <div className=" bg-slate-200 rounded-md w-72 p-5 flex items-center justify-center gap-8 shadow-lg">
        <div>
          <span className="">
            <i class="fa-solid fa-headset  text-5xl text-pink-600"></i>
          </span>
        </div>
        <div className="title1 text-gray-600">
          <h1 className=" text-lg font-semibold "> 24x7 Support</h1>
          <p className=" text-[15px] font-medium"> Everyday 24 Hours Support</p>
        </div>
      </div>
    </div>
  );
};


export default Delivery;