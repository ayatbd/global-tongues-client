/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../index.css";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { AiFillStar } from "react-icons/ai";
import useTheme from "../../hooks/useTheme";

const ClassCard = ({ classData }) => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();

  const location = useLocation();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { _id, availableSeats, image, name, className, instructorName, price } =
    classData;

  const handleSelectClass = (classData) => {
    console.log(classData);
    if (user && user.email) {
      const classInfo = {
        classInfoId: _id,
        availableSeats,
        image,
        name,
        className,
        instructorName,
        price,
        email: user.email,
      };
      fetch("https://summer-camp-server-ten-delta.vercel.app/select", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setButtonDisabled(true);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "The class added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login before clicking on",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  // const arr = [];

  return (
    <div
      className={`group border custom-cls-2 border-gray-300 ${
        availableSeats === 0 ? "bg-red-500" : "bg-white"
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full object-cover group-hover:scale-125 transition duration-700 ease-in-out h-60"
        />
      </div>
      <div
        className={`p-4 space-y-2 overflow-hidden ${
          isDarkMode ? "bg-gray-900 text-white" : ""
        }`}
      >
        <div className={`mb-2 space-y-2 ${isDarkMode ? "text-white" : ""}`}>
          <div className="flex justify-between items-center">
            <h3
              className={`text-xl font-bold text-black ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              {instructorName}
            </h3>
            <p className="text-red-600">{className}</p>
          </div>

          <div className="py-3 flex justify-between items-center">
            <p className={`text-black ${isDarkMode ? "text-white" : ""}`}>
              <strong>Available Seats:</strong> {availableSeats}
            </p>

            <p
              className={`text-black font-bold py-1 px-4 rounded-full bg-[#01A2A6] ${
                isDarkMode ? "text-white" : "text-white"
              }`}
            >
              ${price}
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <ul className="flex items-center gap-1">
            <li>
              <AiFillStar className="text-yellow-400" />
            </li>
            <li>
              <AiFillStar className="text-yellow-400" />
            </li>
            <li>
              <AiFillStar className="text-yellow-400" />
            </li>
            <li>
              <AiFillStar className="text-yellow-400" />
            </li>
            <li>
              <AiFillStar className="text-yellow-400" />
            </li>
          </ul>
          <button
            onClick={() => handleSelectClass(classData)}
            disabled={
              availableSeats === 0 || buttonDisabled || isAdmin || isInstructor
            }
            className={` bg-blue-600 text-white py-2 px-8 hover:bg-blue-800 custom-cls-3 animate-bounce ${
              availableSeats === 0 || buttonDisabled || isAdmin || isInstructor
                ? "opacity-50 cursor-not-allowed animate-none"
                : ""
            }`}
          >
            {buttonDisabled ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;