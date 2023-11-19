/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../index.css";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { AiFillStar } from "react-icons/ai";
import useTheme from "../../hooks/useTheme";
import useSelectedClass from "../../hooks/useSelectedClass";

const ClassCard = ({ classData }) => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const [selectedClasses, refetch] = useSelectedClass();

  const location = useLocation();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { _id, availableSeats, image, name, className, instructorName, price } =
    classData;

  // eslint-disable-next-line no-unused-vars
  const handleSelectClass = (classData) => {
    if (user && user.email) {
      const isAlreadySelected = selectedClasses.some(
        (selectedClass) => selectedClass.classInfoId === _id
      );

      if (isAlreadySelected) {
        // Display a message or take appropriate action
        console.log("You have already selected this class.");
        return;
      }
      const classInfo = {
        classInfoId: _id,
        availableSeats,
        image,
        name,
        className,
        instructorName,
        price,
        email: user.email,
        userId: user._id,
      };
      fetch(`${import.meta.env.VITE_API_URL}/select`, {
        method: "POST",

        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.message);
          if (data.insertedId) {
            console.log(classInfo);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "The class added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
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

  const isAlreadySelected = selectedClasses.some(
    (selectedClass) => selectedClass.classInfoId === _id
  );

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
            disabled={
              availableSeats === 0 ||
              isAdmin ||
              isInstructor ||
              isAlreadySelected
            }
            onClick={() => handleSelectClass(classData)}
            className={` bg-blue-600 text-white py-2 px-8 hover:bg-blue-800 custom-cls-3 ${
              availableSeats === 0 ||
              isAdmin ||
              isInstructor ||
              isAlreadySelected
                ? "opacity-50 cursor-not-allowed animate-none"
                : ""
            }`}
          >
            {isAlreadySelected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
