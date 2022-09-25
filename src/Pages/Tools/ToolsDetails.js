import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ToolsDetails = () => {
    const { productId } = useParams();

    // const [user, loading ] = useAuthState(auth);
    const [countity, setCountity] = useState(20);
  
    const {
      data: tools,
      isLoading,
      error,
    } = useQuery("Tools", () =>
      fetch(`https://assignment-12-server-g2z9.vercel.app/product/${productId}`).then((res) => res.json())
    );
  
    if (isLoading) {
      return <Loading></Loading>;
    }
  
    const {
      _id,
      titleName,
      image,
      description,
      price,
      quantity,
      stock,
      minimumOrder,
      delivered,
    } = tools;
  
    const addValue = (e) => {
      const num = e.target.value;
      setCountity(num);
    };
  
    const addPositive = () => {
      if (countity < stock) {
        const sum = parseFloat(countity) + 1;
        setCountity(sum);
      } else {
        return;
      }
    };
    const addNagetive = () => {
      if (countity > minimumOrder) {
        const minus = countity - 1;
        return setCountity(minus);
      } else {
        return;
      }
    };
  
    return (
      <div>
        <div>
          <div className="  bg-base-100">
            <div className=" flex flex-col lg:flex-row">
              <div className="flex-1   text-center p-6">
                <img src={tools.image} alt="Shoes" className="w-96 mx-auto" />
  
                <h1 className="text-xl -mt-10 font-semibold">
                  {"Profactor 18V Connected-Ready"}
                </h1>
              </div>
  
              {/*  */}
              <div className="flex-1 p-4 md:w-96 mx-auto">
                {/*  */}
                <div className=" my-2 ">
                  <h2 className="text-4xl my-5 font-[600]  text-orange-400">
                    {"Profactor 18V Connected-Ready"}
                  </h2>
                </div>
  
                <div class="divider"></div>
  
                {/*  */}
                <div className=" my-2 ">
                  <h2 className=" text-md font-semibold ">
                    <span className=" mr-2 text-xl text-gray-600 ">Price:</span>
                    <span className=" mr-2 text-2xl mx-3">${"25"}.00</span>
                    <span className="text-sm"> (per one tools price)</span>
                  </h2>
                </div>
  
                <div class="divider"></div>
  
                {/*  */}
                <div className=" my-2 ">
                  <h2 className="  text-md font-semibold">
                    <span className=" mr-2 text-xl text-gray-600 ">Stock:</span>
                    {"AvailableStock"}
                  </h2>
                </div>
  
                {/*  */}
                <div className=" my-4 ">
                  <h2 className="  text-md font-semibold">
                    <span className=" mr-2 text-xl text-gray-600 ">
                      Delivered :
                    </span>
                    {"minimumOrder"}
                  </h2>
                </div>
  
                <div className=" my-2 ">
                  <h2 className="  text-md font-semibold">
                    <span className=" mr-2 text-xl text-gray-600 ">
                      MinimumOrder:
                    </span>
                    {"minimumOrder"}
                  </h2>
                </div>
  
                <div class="divider"></div>
  
                <div className=" my-2 ">
                  <p className=" text-[16px] font-medium">
                    <span className="  mr-2 text-xl text-gray-600 ">
                      Description:
                    </span>
                    {"description"} Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Beatae dignissimos voluptates ab! Magnam
                    architecto sit aliquam dignissimos impedit.
                  </p>
                </div>
  
                <div class="divider"></div>
  
                <div className=" flex items-center w-full px-4 my-8">
                  <div className=" flex items-center">
                    <button
                      disabled={countity == stock}
                      className=" py-3 px-5 bg-slate-300  mr-2 text-xl rounded"
                      onClick={addPositive}
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                    <input
                      onChange={addValue}
                      type="number"
                      name="quantity"
                      value={countity}
                      className="input focus:outline-none input-bordered  text-center font-semibold text-lg w-32 mx-3 max-w-xs"
                    />
  
                    <button
                      disabled={countity == minimumOrder}
                      onClick={addNagetive}
                      className=" py-3 px-5 bg-slate-300  mr-2 text-xl rounded"
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
  
                <div class="divider"></div>
  
                {/*  */}
                <div className=" flex gap-8 items-center text-center">
                  <Link
                    to={`/parches/${tools._id}`}
                    className=" btn m-2 px-10  border-0 text-white bg-orange-400 hover:bg-orange-500"
                  >
                    Order Now
                  </Link>
  
                  <button className=" btn  m-2 px-10  border-0 text-white bg-orange-400 hover:bg-orange-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ToolsDetails;