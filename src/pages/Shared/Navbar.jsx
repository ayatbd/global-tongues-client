/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPowerOff, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsFillBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";
import Swal from "sweetalert2";
import useTheme from "../../hooks/useTheme";
import Headroom from "react-headroom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const Navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User logged out successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={`navbar py-4 ${isDarkMode ? "bg-gray-700" : "bg-indigo-800"}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu z-50 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52"
          >
            <li>
              <Link to="/" className="font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/instructors" className="font-bold">
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/classes" className="font-bold">
                Classes
              </Link>
            </li>
            <li>
              <Link to="/dashboard/home" className="font-bold">
                Dashboard
              </Link>
            </li>
            {user ? (
              <li>
                <button className="font-bold" onClick={handleLogOut}>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="font-bold">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <Link className="ml-2 text-white font-bold normal-case text-xl hidden md:inline">
          Global<span className="text-red-500">Tongues</span>
        </Link>
      </div>
      <div className="md:hidden">
        <Link className=" text-white font-bold normal-case text-xl">
          GlobalTongues
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-white font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/instructors" className="text-white font-bold">
              Instructors
            </Link>
          </li>
          <li>
            <Link to="/classes" className="text-white font-bold">
              Classes
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-bold">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <ul className="mr-10 flex flex-row gap-5">
            <li>
              <Link
                to="/login"
                className={`text-white hidden md:block font-medium py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700 ${
                  isDarkMode && "bg-gray-900"
                }`}
              >
                Login
              </Link>
            </li>
          </ul>
        ) : (
          <div className="flex items-center justify-center relative">
            <ul className="mr-2 gap-2 flex flex-row">
              <li>
                <Link to="/dashboard/home">
                  <button
                    className={`text-white md:flex hidden items-center gap-1 font-medium py-2 px-4 rounded-md hover:bg-indigo-700 ${
                      isDarkMode
                        ? "bg-gray-800 hover:bg-gray-600"
                        : "bg-indigo-600"
                    }`}
                  >
                    <RxDashboard /> Dashboard
                  </button>
                </Link>
              </li>
            </ul>

            <div className="">
              <div
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
                className="btn mr-4 btn-ghost btn-circle avatar tooltip ml-2"
              >
                <img
                  className="w-10 rounded-full border-2 p-1"
                  src={user ? user.photoURL : <FaUser />}
                />
              </div>
              {isOpen && (
                <div
                  className="w-[250px] hidden md:block z-10 h-fit absolute rounded-md shadow-md hover:shadow-2xl bg-slate-500 py-8 px-5
                      -top-0 right-0 md:left-auto md:top-12"
                >
                  <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary overflow-hidden">
                    <img
                      src={user?.photoURL}
                      className="w-[120px] h-[120px] mx-auto rounded-full"
                      alt="profile"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center items-center  mt-5 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <h1 className="text-base font-bold">
                      Name: {user?.displayName}
                    </h1>
                    <p className="text-xs my-3">Email: {user?.email}</p>
                    <button
                      className="text-white flex justify-center items-center gap-3 font-medium py-2 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700"
                      onClick={handleLogOut}
                    >
                      <FaPowerOff className="w-4 h-4"></FaPowerOff> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {isDarkMode ? (
          <BsMoonStarsFill
            className={`w-6 h-6 hover:cursor-pointer ${
              isDarkMode
                ? "text-white"
                : `${
                    location.pathname === "/" ? "text-white" : "text-gray-900"
                  }`
            }`}
            onClick={toggleTheme}
          ></BsMoonStarsFill>
        ) : (
          <BsFillBrightnessHighFill
            className={`w-6 h-6 hover:cursor-pointer ${
              isDarkMode
                ? "text-white"
                : `${
                    location.pathname === "/" ? "text-white" : "text-gray-900"
                  }`
            }`}
            onClick={toggleTheme}
          ></BsFillBrightnessHighFill>
        )}
      </div>
    </div>
  );
};

export default Navbar;
