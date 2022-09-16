import React from 'react';

const GetInTouch = () => {
    return (
        <div className=" border-[1px] border-gray-200 p-5">
            <div>
                <h1 className=" mb-8 uppercase text-2xl text-center title1 font-semibold ">
                    Get In Touch
                </h1>
            </div>
            <div>
                <form>
                    <div className="lg:my-10 flex font-medium text-[16px]  flex-row justify-between gap-5 ">
                        <input
                            placeholder="Name Full Name"
                            type="text"
                            name=""
                            id=""
                            className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
                        />
                        <input
                            placeholder="Your Mobile Number"
                            type="text"
                            name=""
                            id=""
                            className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
                        />
                    </div>

                    <div className="lg:my-10 flex font-medium text-[16px]  flex-row justify-between gap-5 my-3">
                        <input
                            placeholder="Your Email"
                            type="email"
                            name=""
                            id=""
                            className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
                        />
                        <input
                            placeholder="Subject"
                            type="text"
                            name=""
                            id=""
                            className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
                        />
                    </div>

                    {/*  */}
                    <div className="lg:my-10 flex font-medium text-[16px]  flex-row justify-between gap-5 my-3">
                        <textarea
                            placeholder="Write Your Message Here ...."
                            name=""
                            id=""
                            cols="30"
                            rows="4"
                            className=" py-3 px-5 border-[2px] border-gray-200 w-full rounded-md focus:outline-none"
                        ></textarea>
                    </div>

                    {/*  */}
                    <div className="  lg:mb-14 text-left font-medium">
                        <button class="btn btn-sm bg-pink-600 hover:bg-pink-700 border-0">
                            Send Now <i class="fa-solid fa-paper-plane ml-3"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default GetInTouch;