import React from 'react';

const RemoveConfirm = ({ setDeleteModal, removeOrder, orders }) => {
    return (
        <div>
          <input type="checkbox" id="RemoveConfirmPopUp" class="modal-toggle" />
    
          <div class="modal ">
            <div class="modal-box p-14 relative text-center">
              <div className="w-24 mb-8 mx-auto">
                <img src='' alt="" className="  w-20" />
              </div>
              <h3 class="text-2xl font-bold">Are You Sure Remove Your Order?</h3>
              <h3 class="text-[16px] my-2 font-semibold">
                It is permanently remove from your dashboard.
              </h3>
    
              <div className=" flex justify-around mt-10">
                <button
                  onClick={() => setDeleteModal(false)}
                  className="btn border-0 bg-gray-400 hover:bg-gray-400 text-lg normal-case px-8  "
                >
                  Cancel
                </button>
                <button
                  onClick={() => removeOrder(orders._id)}
                  className="btn  text-lg normal-case px-5 "
                >
                  Yes, Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default RemoveConfirm;