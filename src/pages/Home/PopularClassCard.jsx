/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import useTheme from "../../hooks/useTheme";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
// import { AiFillStar } from "react-icons/ai";
import "../../index.css";
import useSelectedClass from "../../hooks/useSelectedClass";

const PopularClassCard = ({ classData }) => {
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
      data-aos="fade-up"
      className={`relative w-full overflow-hidden rounded-lg bg-white shadow-md ${
        availableSeats === 0 ? "bg-red-500" : "bg-white"
      }`}
    >
      <Link>
        <img
          className="h-60 rounded-t-lg object-cover"
          src={image}
          alt="product image"
        />
      </Link>
      <div
        className={`mt-4 px-5 pb-5 ${
          isDarkMode && "bg-gray-900 text-white border border-r-gray-400"
        }`}
      >
        <div className="flex justify-between">
          <Link>
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">
              {instructorName}
            </h5>
          </Link>
          <p className="text-red-600">{className}</p>
        </div>

        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            5.0
          </span>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <p>
          <strong>Available Seats:</strong> {availableSeats}
        </p>
        <div className="flex items-center justify-between mt-6">
          <p className={`text-black ${isDarkMode && "text-white"}`}>
            <span className="text-3xl font-bold ">${price}</span>
          </p>
          <Link
            disabled={
              availableSeats === 0 ||
              isAdmin ||
              isInstructor ||
              isAlreadySelected
            }
            onClick={() => handleSelectClass(classData)}
            className={` flex items-center rounded-md bg-primary px-7 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
              availableSeats === 0 ||
              isAdmin ||
              isInstructor ||
              isAlreadySelected
                ? "opacity-50 cursor-not-allowed animate-none"
                : ""
            }`}
          >
            {isAlreadySelected ? "Selected" : "Select"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
