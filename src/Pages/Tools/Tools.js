import React from 'react';
import { Link } from 'react-router-dom';

const Tools = ({tool}) => {
    return (
        <div>
          <div class="card w-72 my-5 bg-base-100  hover:scale-105 duration-300 ease-in-out shadow-2xl">
            <Link to={`/toolsDetails/${tool._id}`}>
              <div className=" w-full h-64 mx-auto overflow-hidden">
                <img src={tool.image} alt="" className=" w-10/12 mx-auto -mt-5 " />
              </div>
            </Link>
            <div className=" -mt-2  px-3">
              <Link to={`/toolsDetails/${tool._id}`}>
                {" "}
                <h1 className=" hover:text-green-500 text-lg font-[700]">
                  {tool.titleName}{" "}
                </h1>
              </Link>
              <div className=" my-1 flex gap-5">
                <h2>
                  {/* <span className=" font-[700] mr-1">Price :</span> */}
                  <span className=" text-[18px] font-[700] mr-1">$ 25.00</span>
                  <span className=" text-[14px] text-gray-400 font-medium mx-2 line-through">
                    $ 35.00
                  </span>
                </h2>
                <h2 className=" text-[16px] bg-slate-300 rounded-md px-[5px] text-gray-600">
                  <span className=" font-[600] mr-1">Save</span>
                  <span className=" font-medium mr-1">15 %</span>
                </h2>
              </div>
    
              <h3>
                <span className=" font-[700] mr-1">Stock:</span>
                <span className=" font-medium mr-1">200 pc.</span>
              </h3>
              <h3>
                <span className=" font-[700] mr-1">Minimum Order:</span>
                <span className=" font-medium mr-1">50 pc.</span>
              </h3>
    
              {/* <div className=" my-1">
                <p className="text-[15px] font-[500]">
                  <span className="text-[16px] font-bold"> Description: </span>
                  Lorem ipsum dolor sit amet consecte adipisicing elit. Odio
                  sapiente Chainni voluptatum dolore, sed, illo ratione ipsam
                  suscipit, delenit.
                </p>
              </div> */}
              <div className=" flex justify-between text-center">
                <Link
                  to={`/parches/${tool._id}`}
                  className=" btn btn-sm  m-2  border-0 text-white bg-orange-400 hover:bg-orange-500"
                >
                  Order Now
                </Link>
    
                <button className=" btn btn-sm  m-2  border-0 text-white bg-orange-400 hover:bg-orange-500">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
export default Tools;