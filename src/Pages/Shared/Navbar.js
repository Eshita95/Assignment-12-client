import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from './Loading';
import profile from '../../Assets/Image/profile.jpg';
// import logo from '../../Assets/Icon/logo.png';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    const logout = () => {
        signOut(auth);
    };

    const menuOption1 = (
        <>
            <li>
                <Link to="/product">Products</Link>
            </li>

            {/* <li tabindex="0">
  <Link to='/'>Parent</Link>
  <ul class="p-2">
    <li>
    purchase;  Dashboard= My Orders, Add Review; Admin=Manage All Orders, Add A Product, Make Admin, Manage Products; login/SignUp MyProfile
      <Link to='/'>Submenu 1</Link>
    </li>
    <li>
      <Link to='/'>Submenu 2</Link>
    </li>
  </ul> 
</li>*/}

            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
            <li>
                <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/">About Us</Link>
            </li>
            <li>
                <Link to="/getInTouch">Contact Us</Link>
            </li>
        </>
    );
    const menuOptionProfile = (
        <>
            <li>
                <Link to="/" href="/#">
                    View profile
                </Link>
            </li>
            <li>
                <Link to="/" href="/#">
                    Update profile
                </Link>
            </li>
            <li>
                <Link to="/" href="/#">
                    My Orders
                </Link>
            </li>
            <li>
                <button onClick={logout} className="">
                    LogOut
                </button>
            </li>
        </>
    );

    const menuOptionDropdown = (
        <>
            {menuOption1}
            {user ? (
                <li class="dropdown dropdown-down dropdown-hover ">
                    <label tabindex="0" class=" m-1">
                        {user.photoURL ? (
                            <img
                                src={user.photoURL}
                                className="rounded-full w-16 sm:w-10"
                                alt=""
                            />
                        ) : (
                            <img src={profile} className="rounded-full w-7 sm:w-10" alt="" />
                        )}
                    </label>
                    <ul
                        tabindex="0"
                        class="dropdown-content menu mt-11 sm:-mt-2 shadow w-52 -left-[12px] sm:-left-[205px]  bg-slate-200"
                    >
                        {menuOptionProfile}
                    </ul>
                </li>
            ) : (
                <>
                    <button className="  lg:hidden flex pl-4 text-green-600 hover:text-green-700">
                        <Link to="/login"> LogIn/Register</Link>
                    </button>
                </>
            )}
        </>
    );

    // const menuOption4 = <></>;

    return (
        <div class="navbar font-semibold text-black px-5 sm:px-10 lg:px-20">
            <div class="navbar-start w-48 sm:w-full">
                <Link to="/" href="/" class=" flex items-end normal-case text-xl">
                    <img src="http://webdesign-finder.com/qtex/wp-content/uploads/2018/07/logo-big.png" alt="" className="w-20" />
                </Link>
            </div>

            {/*  */}
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal gap-1 p-0">{menuOption1}</ul>
            </div>

            {/*  */}
            <div class="navbar-end ">
                {user ? (
                    <>
                        <div class=" hidden lg:flex dropdown dropdown-hover dropdown-end">
                            <label tabindex="8" class=" py-3 pl-5">
                                {user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        className="rounded-full w-20 sm:w-10"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src={profile}
                                        className="rounded-full w-7 sm:w-10"
                                        alt=""
                                    />
                                )}
                            </label>
                            <ul
                                tabindex="8"
                                class="menu menu-compact dropdown-content mt-12 p-2 shadow bg-slate-200 rounded-box w-52 gap-2"
                            >
                                {menuOptionProfile}
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <button className="  hidden lg:flex text-black-600 hover:text-pink-600">
                            <Link to="/login"> Login</Link>
                        </button>
                    </>
                )}

                {/*  */}
                <div>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <i class="fa-solid fa-bars"></i>
                        </label>
                        <ul
                            tabindex="0"
                            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
                        >
                            {menuOptionDropdown}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;