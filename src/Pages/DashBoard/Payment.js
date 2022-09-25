import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from './PaymentCard';

const Payment = () => {
    const [processing, setProcessing] = useState(true);
    const { paymentId } = useParams();
    // const [myOrder, setMyOrder] = useState();
  
    const {
      data: myOrder,
      isLoading,
      error,
      refetch,
    } = useQuery("orders", () =>
      fetch(`https://assignment-12-server-g2z9.vercel.app/getOrder/${paymentId}`).then((res) =>
        res.json()
      )
    );
  
    const stripePromise = loadStripe(
      "pk_test_51LTEuNIgycd7Qr94jp26PigHhQnli8Y9RLy5X2rZTuOZcjOqzjDJ2pL2GWRt3KgiBlx4lTNqYVLJs9HfrhBDNTBs00hUwly6As"
    );
  
    if (isLoading) {
      return <Loading></Loading>;
    }
  
    const SubPrice =
      parseInt(myOrder.quantity) * parseInt(myOrder.orderInfo.price);
    const totalPrice = parseInt(SubPrice + (SubPrice + 150) / 15);
  
    return (
      <div className="my-10">
        <div className=" mx-10 p-8 border-2 rounded-xl shadow-2xl border-gray-200 flex flex-col lg:flex-row items-center justify-around">
          <div className=" flex-1">
            <div className=" my-5">
              <h1 className=" flex justify-between text-2xl font-semibold">
                {myOrder.orderInfo.titleName}
              </h1>
            </div>
  
            {/*  */}
            <div className=" my-1">
              <h1 className=" flex justify-between text-lg font-semibold">
                <span>Items Price :</span>
                <span>{myOrder.orderInfo.price} $ </span>
              </h1>
            </div>
  
            <div className=" my-1">
              <h1 className=" flex justify-between text-lg font-semibold mr-3">
                <span>Items Quantity :</span> {myOrder.quantity}
              </h1>
            </div>
  
            <div className=" divider my-1"></div>
  
            <div className=" my-1">
              <h1 className=" flex justify-between text-lg font-semibold">
                <span>SubTotal :</span>
                <span>{SubPrice} $</span>
              </h1>
            </div>
  
            <div className=" mt-8">
              <h1 className=" flex justify-between text-lg font-semibold">
                <span>Shipping Fee :</span>
                <span> 150 $</span>
              </h1>
            </div>
  
            <div className=" my-1">
              <h1 className=" flex justify-between text-lg font-semibold">
                <span>Tax Fee :</span> <span>15 %</span>
              </h1>
            </div>
  
            <div className=" divider my-1"></div>
  
            <div className=" my-1">
              <h1 className=" flex justify-between text-lg font-semibold">
                <span>Total Price :</span> <span>{totalPrice} $</span>
              </h1>
            </div>
          </div>
  
          <div class="divider lg:divider-horizontal"></div>
  
          {/*  */}
          <div className=" flex-1 w-full">
            <div className="card w-full md:w-[500px] lg:w-full px-3  mx-auto py-10  px-5 border-[1px]   bg-base-200 ">
              <Elements stripe={stripePromise}>
                <PaymentCard myOrder={myOrder}></PaymentCard>
              </Elements>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Payment;