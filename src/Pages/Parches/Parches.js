import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Parches = () => {
    const { parchesId } = useParams();

  const [user, loading] = useAuthState(auth);
  const [countity, setCountity] = useState(20);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const {
    data: tools,
    isLoading,
    error,
  } = useQuery("Tools", () =>
    fetch(`http://localhost:5000/allTools/${parchesId}`).then((res) =>
      res.json()
    )
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

  const parchesDate = new Date().toString().slice(0, 16);

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

  const onSubmit = async (data) => {
    const orderInformation = {
      customerName: user.displayName,
      customerEmail: user.email,
      customerPhone: data.phoneNumber,
      shippingAddress: ` ${data.address} ,  zipCode: ${data.zipCode} , ${data.city} , ${data.country},`,
      orderInfo: tools,
      quantity: countity,
      parchesDate: parchesDate,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInformation),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast.success(" Your Order send for processing");
        navigate("/dashboard");
      });
  };

  return (
    <div>
      <div className=" flex flex-col lg:flex-row items-center">
        <div className=" flex-1 px-20 py-5   bg-base-100">
          <div className=" mx-auto">
            {/*  */}
            <div className="">
              <h2 className="text-3xl my-5 font-[700]  text-orange-400">
                {tools.titleName}
              </h2>
            </div>

            <div class="divider my-0"></div>

            {/*  */}
            <div className="w-full sm:flex items-center justify-between overflow-hidden gap-10 md:h-44 lg:h-32">
              <div className=" flex-1 -mt-24 sm:-mt-16 lg:-mt-3 w-full mx-auto">
                <img src={image} alt="" />
              </div>

              {/*  */}
              <div className=" -mt-16 sm:mt-5 flex-1 flex items-center w-full px-4 my-8">
                <div className=" flex items-center">
                  <button
                    disabled={countity == stock}
                    className=" py-3 px-5 bg-slate-300  mr-2 rounded"
                    onClick={addPositive}
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <input
                    onChange={addValue}
                    type="number"
                    name="quantity"
                    value={countity}
                    className="input focus:outline-none input-bordered  text-center font-semibold text-lg w-20 lg:w-24 md:w-32 mx-3 max-w-xs"
                  />

                  <button
                    disabled={countity == minimumOrder}
                    onClick={addNagetive}
                    className=" py-3 px-5 bg-slate-300  mr-2 rounded"
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="divider -mt-10 lg:mt-1"></div>

            {/*  */}
            <div className="">
              <h2 className="  font-semibold ">
                <span className=" mr-2 text-gray-600 ">Price:</span>
                <span className=" mr-2 text-2xl mx-3">${price}.00</span>
                <span className=" mr-2 text-gray-500 mx-3 line-through">
                  ${"45"}.00
                </span>
                <span className="text-base font-bold text-gray-600">
                  (per one tools price)
                </span>
              </h2>
            </div>

            <div class="divider"></div>

            <div className=" flex justify-between items-center">
              {/*  */}
              <div className="">
                <h2 className="   font-semibold">
                  <span className=" mr-2 text-gray-600 ">Stock:</span>
                  {stock}
                </h2>
              </div>

              {/*  */}
              <div className="">
                <h2 className="   font-semibold">
                  <span className=" mr-2 text-gray-600 ">Delivered :</span>
                  {delivered}
                </h2>
              </div>

              <div className="">
                <h2 className="   font-semibold">
                  <span className=" mr-2 text-gray-600 ">MinimumOrder:</span>
                  {minimumOrder}
                </h2>
              </div>
            </div>

            <div class="divider"></div>

            <div className="">
              <p className=" text-[14px] font-medium">
                <span className="  mr-2 font-bold text-gray-600 ">
                  Description:
                </span>
                {"description"} Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Beatae dignissimos voluptates ab! Magnam
                architecto sit aliquam dignissimos impedit.
              </p>
            </div>

            <div class="divider"></div>
          </div>
        </div>

        {/*  */}
        <div className=" flex-1 w-full px-20 bg-base-100">
          <div>
            <h1 className=" text-xl text-center lg:text-left font-bold my-5">
              Please Fill your Shipping Information
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="   lg:flex-row justify-between">
              <div>
                <label class="label">
                  <span class="label-text font-medium">Full name:</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={user.displayName}
                  {...register("fullName", { required: true })}
                  class="border p-2  font-bold  border-gray-300 rounded-md focus:outline-none w-full"
                  readOnly
                />
              </div>
            </div>
            <div className=" justify-between">
              <div>
                <label class="label">
                  <span class="label-text">Email:</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  {...register("email", { required: true })}
                  class="border p-2 w-full font-bold  border-gray-300 rounded-md focus:outline-none "
                  readOnly
                />
              </div>
              <div>
                <label class="label">
                  <span class="label-text font-medium">
                    Phone Number:
                    <span className=" text-red-500 font-semibold">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="PhoneNumber"
                  {...register("phoneNumber", { required: true })}
                  class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row justify-between">
              <div>
                <label class="label">
                  <span class="label-text font-medium">
                    Country:
                    <span className=" text-red-500 font-semibold">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Country"
                  {...register("country", { required: true })}
                  class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
                />
              </div>
              <div>
                <label class="label">
                  <span class="label-text font-medium">
                    City:
                    <span className=" text-red-500 font-semibold">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="City"
                  {...register("city", { required: true })}
                  class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
                />
              </div>

              <div>
                <label class="label">
                  <span class="label-text font-medium">
                    Zip Code:
                    <span className=" text-red-500 font-semibold">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  {...register("zipCode", { required: true })}
                  class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
                />
              </div>
            </div>
            <div>
              <label class="label">
                <span class="label-text font-medium">
                  Shipping Address:
                  <span className=" text-red-500 font-semibold">*</span>
                </span>
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                type="text"
                placeholder="Shipping Address"
                {...register("address", { required: true })}
                class="border p-2 border-gray-300 rounded-md focus:outline-none w-full"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Order Confirm"
                className=" btn m-2 px-10  border-0 text-white bg-orange-400 hover:bg-orange-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parches;