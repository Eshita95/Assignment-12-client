import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Delivery from './Delivery';
import GetInTouch from './GetInTouch';
import OfficeLocation from './OfficeLocation';
import Product from './Product';
import Reviews from './Reviews';
import SpecialProducts from './SpecialProducts';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section>
                <Delivery></Delivery>
            </section>

            <section className=" px-10 my-5">
                <div className="py-6">
                    <h1 className="uppercase text-lg sm:text-2xl text-center title1 font-semibold ">
                        Special Products
                    </h1>
                    {/* <div className=" text-xl sm:text-3xl flex gap-3 lg:gap-5 mr-4 my-1">
                        <button className="rounded hover:bg-slate-200 py-2 px-4">
                            <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <button className=" rounded hover:bg-slate-200 py-2 px-4">
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div> */}
                </div>
                <div className=" px-10">
                    <SpecialProducts></SpecialProducts>
                </div>
            </section>

            <section className=" px-10 my-5">
                <div className=" py-6">
                    <h1 className="uppercase text-lg sm:text-2xl text-center title1 font-semibold ">
                        Feature Products
                    </h1>
                    {/* <div className="  text-xl sm:text-3xl flex gap-3  mr-4 my-1">
                        <button className="rounded hover:bg-slate-200 py-2 px-4">
                            <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <button className="rounded hover:bg-slate-200 py-2 px-4">
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div> */}
                </div>
                <div className=" px-10 ">
                    <Product></Product>
                </div>
            </section>

            {/*  */}
            <section className=" px-10 my-5">
                <div >
                    <h1 className="uppercase text-lg sm:text-2xl text-center py-6 title1 font-semibold ">
                        WHAT OUR CUSTOMERS SAY
                    </h1>
                    {/* <div className=" hidden  text-3xl sm:flex gap-5 mr-4 my-1">
                        <button className="rounded hover:bg-slate-200 py-2 px-4">
                            <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <button className="rounded hover:bg-slate-200 py-2 px-4">
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div> */}
                </div>
                <div>
                    <Reviews></Reviews>
                </div>
            </section>

            {/*  */}
            <section className=" px-3 sm:px-10 pb-5 my-14">
                <div className=" ">
                    <h1 className=" uppercase text-lg sm:text-2xl text-center py-6 title1 font-semibold ">
                        Business Summary
                    </h1>
                    {/* <div className=" text-4xl flex gap-10 my-3">
                <span>{"<"}</span> <span>{">"}</span>
              </div> */}
                </div>
                <div>
                    <BusinessSummery></BusinessSummery>
                </div>
            </section>

            {/*  */}
            <section className=" px-10 my-5">
                <div className=" flex flex-col gap-5 lg:flex-row-reverse ">
                    <div className=" flex-1">
                        <GetInTouch></GetInTouch>
                    </div>
                    <div className=" flex-1">
                        <OfficeLocation></OfficeLocation>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home;