import React from 'react';

const BusinessSummery = () => {
    return (
        <div className=" my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3  sm:gap-10 ">
            {/*  */}
            <div className=" text-gray-600 bg-slate-100 border-[1px] border-gray-200  rounded-md w-48  sm:w-52 p-5 flex flex-col items-center justify-center  shadow-lg">
                <div className="my-4">
                    <span>
                        <i class="fa-solid fa-user-group   text-4xl "></i>
                    </span>
                </div>
                <div className="title1 ">
                    <h1 className=" my-3 text-4xl text-center font-medium ">50K+</h1>
                    <h3 className=" text-sm sm:text-lg font-semibold">Happy Customer</h3>
                </div>
            </div>

            {/*  */}
            <div className=" text-gray-600 bg-slate-100 border-[1px] border-gray-200 rounded-md w-48  sm:w-52 p-5 flex flex-col items-center justify-center  shadow-lg">
                <div className="my-4">
                    <span>
                        <i class="fa-solid fa-truck-fast  text-5xl "></i>
                    </span>
                </div>
                <div className="title1 ">
                    <h1 className=" my-3 text-4xl text-center font-medium ">38K+</h1>
                    <h3 className=" text-sm sm:text-lg font-semibold">
                        Product Delivered
                    </h3>
                </div>
            </div>

            {/*  */}
            <div className=" text-gray-600 bg-slate-100 border-[1px] border-gray-200 rounded-md w-48  sm:w-52 p-5 flex flex-col items-center justify-center  shadow-lg">
                <div className="my-4">
                    <span>
                        <i class="fa-sharp fa-solid fa-face-grin-stars  text-4xl "></i>
                    </span>
                </div>
                <div className="title1 ">
                    <h1 className=" my-3 text-4xl text-center font-medium ">35K+</h1>
                    <h3 className=" text-sm sm:text-lg font-semibold">
                        Customer FeedBack
                    </h3>
                </div>
            </div>

            {/*  */}
            <div className=" text-gray-600 bg-slate-100 border-[1px] border-gray-200 rounded-md w-48  sm:w-52 p-5 flex flex-col items-center justify-center  shadow-lg">
                <div className="my-4">
                    <span>
                        <i class="fa-sharp fa-solid fa-screwdriver-wrench  text-5xl "></i>
                    </span>
                </div>
                <div className="title1 ">
                    <h1 className=" my-3 text-4xl text-center font-medium ">65+</h1>
                    <h3 className=" text-sm sm:text-lg font-semibold">Tools Items</h3>
                </div>
            </div>

            {/*  */}
            <div className=" text-gray-600 bg-slate-100 border-[1px] border-gray-200 rounded-md w-48  sm:w-52 p-5 flex flex-col items-center justify-center  shadow-lg">
                <div className="my-4">
                    <span>
                        <i class="fa-solid fa-headset text-5xl "></i>
                    </span>
                </div>
                <div className="title1 ">
                    <h1 className=" my-3 text-4xl text-center font-medium ">95K+</h1>
                    <h3 className=" text-sm sm:text-lg font-semibold">User Support</h3>
                </div>
            </div>
        </div>
    );
};
export default BusinessSummery;