/* eslint-disable no-unused-vars */
import logo from "../../assets/images/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaPowerOff, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsFillBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";
import Swal from "sweetalert2";
import useTheme from "../../hooks/useTheme";
import profile from "../../assets/images/profile.png";
import Container from "./Container";

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
      className={`border-b border-blue-400 ${
        isDarkMode ? "bg-gray-700 border-gray-500" : ""
      }`}
    >
      <Container>
        <div className="navbar">
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
                  <NavLink to="/" className="font-bold">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/instructors" className="font-bold">
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classes" className="font-bold">
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="font-bold">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/home" className="font-bold">
                    Dashboard
                  </NavLink>
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
            <Link className="ml-2 text-primary font-bold normal-case text-xl hidden md:inline">
              <p className="flex items-center justify-center gap-3">
                <img className="w-10 h-8" src={logo} />
                <p>
                  Global
                  <span className="text-pink-600">Tongues</span>
                </p>
              </p>
            </Link>
          </div>
          <div className="md:hidden inline">
            <NavLink className="font-bold normal-case text-xl">
              GlobalTongues
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/" className="text-gray-800 text-[17px] font-bold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className="text-gray-800 text-[17px] font-bold"
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className="text-gray-800 text-[17px] font-bold"
                >
                  Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-800 text-[17px] font-bold"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-800 text-[17px] font-bold"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {!user ? (
              <ul className="mr-10 flex flex-row gap-5">
                <li>
                  <Link
                    to="/login"
                    className={`text-red-500 hidden md:block font-medium py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700 ${
                      isDarkMode && "bg-gray-900"
                    }`}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="flex items-center justify-center relative">
                <ul className="mr-2 gap-2 flex flex-row hidden md:inline">
                  <li>
                    <Link
                      to="/dashboard/home"
                      className="box-border mr-3 relative z-30 inline-flex items-center justify-center w-auto px-4 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                    >
                      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="relative z-20 flex items-center text-sm">
                        <svg
                          className="relative w-5 h-5 mr-2 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        </svg>
                        Dashboard
                      </span>
                    </Link>
                  </li>
                </ul>

                <div className="flex items-center justify-center flex-col">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    tabIndex={0}
                    className="btn mr-4 btn-ghost hover:bg-primary btn-circle avatar tooltip ml-2"
                  >
                    <img
                      className="w-10 rounded-full border-2 p-1"
                      src={user?.photoURL ? user?.photoURL : profile}
                    />
                  </div>
                  {isOpen && (
                    <div
                      className="w-[250px] z-[9999] hidden md:block h-fit absolute rounded-md shadow-md hover:shadow-2xl bg-slate-400 py-8 px-5
                      -top-0 right-0 md:left-auto md:top-12"
                    >
                      <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary overflow-hidden">
                        <img
                          src={user.photoURL ? user.photoURL : profile}
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
                        <Link
                          onClick={handleLogOut}
                          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                        >
                          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg
                              className="w-5 h-5 text-green-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg
                              className="w-5 h-5 text-green-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                            Logout
                          </span>
                        </Link>
                        {/* <button
                      className="text-white flex justify-center items-center gap-3 font-medium py-2 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700"
                      onClick={handleLogOut}
                    >
                      <FaPowerOff className="w-4 h-4"></FaPowerOff> Logout
                    </button> */}
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
                        location.pathname === "/"
                          ? "text-white"
                          : "text-gray-900"
                      }`
                }`}
                onClick={toggleTheme}
              ></BsMoonStarsFill>
            ) : (
              <BsFillBrightnessHighFill
                className={`w-6 h-6 hover:cursor-pointer ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
                onClick={toggleTheme}
              ></BsFillBrightnessHighFill>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
