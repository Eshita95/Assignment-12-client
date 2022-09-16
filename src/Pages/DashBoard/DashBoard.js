import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          {/* <!-- Page content here --> */}
          {/* <h1 className=" my-0 text-center font-semibold text-2xl">
                My Dashboard
              </h1> */}
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-slate-300 gap-2 text-black font-semibold text-lg">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">
                <h1 className=" text-xl font-bold"> My Dashboard</h1>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <span>
                  <i class="fa-solid fa-user"></i>
                </span>
                <span> My Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myOrder">
                <span>
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <span>My Order</span>
              </Link>
            </li>
            <li className="my-2">
              <Link to="/dashboard/addReview">
                <span>
                  <i class="fa-solid fa-comment-dots"></i>
                </span>
                <span> My Reviews</span>
              </Link>
            </li>

            <li className="my-2">
              <Link to="/dashboard/addReview">
                <span>
                  <i class="fa-sharp fa-solid fa-comments"></i>
                </span>
                <span> Add Review</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;