import React from 'react';

const Review = () => {
    return (
        <div>
          <div class="card w-80 my-5 bg-base-100 shadow-2xl">
            <div className=" flex justify-left gap-5 mx-auto mt-3 items-center">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg"
                  alt=""
                  className=" w-16"
                />
              </div>
              <div className=" font-medium mt-2 text-sm">
                <h3 className=" text-[16px]"> Mrs. Percinson</h3>
                <h3 className="text-xs">Customer</h3>
              </div>
            </div>
            <div class=" my-3 pb-4 px-5">
              <p>
                This new reality brought by the pandemic outbreak has brought. your
                business has also been impacted Us.
              </p>
            </div>
          </div>
        </div>
      );
    };
    

export default Review;