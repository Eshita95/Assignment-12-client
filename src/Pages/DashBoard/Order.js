import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import RemoveConfirm from './RemoveConfirm';

const Order = ({orders}) => {
    const { paid } = orders;
    // const paid = true;
  
    const [loading, setLoading] = useState(false);
  
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState();
  
    const removePopUp = (id) => {
      setDeleteModal(true);
    };
  
    const removeOrder = (id) => {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "delete",
        headers: {
          // "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          toast.error(" Your Order remove permanently");
          setDeleteModal(false);
          window.location.reload(false);
        });
    };
  
    return (
      <div className="  my-5 shadow-md rounded-lg border-[1px] border-gray-200 py-1 w-full">
        <div className=" grid grid-cols-1 md:grid-cols-4 items-center">
          <div>
            <img src={orders.orderInfo.image} className=" w-28" alt="" />
          </div>
          <div className=" text-left -ml-16">
            <h1 className=" text-lg font-bold">{orders.orderInfo.titleName}</h1>
            <h1 className=" text-sm my-1 font-semibold">
              <span className="mr-2 font-bold text-base"> Price:</span>
              <span className=" font-semibold text-lg mr-2">
                {orders.orderInfo.price}
              </span>
            </h1>
  
            <h1 className=" text-sm my-1 font-semibold">
              <span className=" font-bold text-base mr-2"> Quantity:</span>
              <span className=" font-semibold text-lg mr-2">
                {orders.orderInfo.quantity}{" "}
              </span>
            </h1>
          </div>
  
          {/*  */}
          <div className=" text-center">
            {paid ? (
              <>
                <h1>
                  <span className=" font-semibold text-base">
                    Payment Status:
                  </span>
                  <span className=" mx-2 title2 text-black text-lg font-bold">
                    Paid
                  </span>
                </h1>
                <h1>
                  <span className=" font-bold text-sm">Pay Date:</span>
                  <span className=" mx-1 font-medium">
                    {orders.paymentInfo.paymentDate}
                  </span>
                </h1>
                <h1>
                  <span className=" font-semibold text-base">TrxID:</span>
                  <span className=" text-sm mx-1 font-medium">
                    {"pi_3LeggWIgycd7Qr942oUcUiyck"}
                  </span>
                </h1>
              </>
            ) : (
              <>
                <h1>
                  <span className=" font-semibold text-base">
                    Payment Status:
                  </span>
                  <span className=" mx-2 title2 text-gray-700 text-lg font-bold">
                    UnPaid
                  </span>
                </h1>
                <Link
                  to={`/dashboard/payment/${orders._id}`}
                  className="btn my-5 btn-success font-semibold"
                >
                  pay now
                </Link>
              </>
            )}
          </div>
  
          {/*  */}
          <div className=" text-center">
            {
              <label
                disabled={paid}
                onClick={removePopUp}
                htmlFor="RemoveConfirmPopUp"
                className=" text-orange-500 hover:text-orange-600 px-3 font-semibold"
              >
                <i class="fa-solid fa-trash-can text-3xl "></i>
              </label>
            }
          </div>
  
          {deleteModal && (
            <RemoveConfirm
              setDeleteModal={setDeleteModal}
              removeOrder={removeOrder}
              orders={orders}
            ></RemoveConfirm>
          )}
        </div>
      </div>
    );
  };

export default Order;