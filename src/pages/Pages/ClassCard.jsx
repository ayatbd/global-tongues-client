/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../index.css";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassCard = ({ classData }) => {
  const { user } = useContext(AuthContext);

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
      className={`p-1 group border custom-cls-2 border-gray-300 rounded ${
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
      <div className="p-6 space-y-2 overflow-hidden bg-teal-200">
        <div className="mb-2 space-y-2">
          <h3 className="text-lg font-bold text-black">{className}</h3>
          <p className="text-black">
            <strong>Instructor:</strong> {instructorName}
          </p>
          <p className="text-black">
            <strong>Available Seats:</strong> {availableSeats}
          </p>
          <p className="text-black">
            <strong>Price:</strong> ${price}
          </p>
        </div>
        <button
          onClick={() => handleSelectClass(classData)}
          disabled={
            availableSeats === 0 || buttonDisabled || isAdmin || isInstructor
          }
          className={`md:invisible bg-blue-600 text-white py-2 px-8 hover:bg-blue-800 custom-cls-3 animate-bounce ${
            availableSeats === 0 || buttonDisabled || isAdmin || isInstructor
              ? "opacity-50 cursor-not-allowed animate-none"
              : ""
          }`}
        >
          {buttonDisabled ? "Selected" : "Select"}
        </button>
        {/* <button className="invisible bg-blue-600 text-white py-2 px-8 hover:bg-blue-800 custom-cls-3 animate-bounce">
          Select
        </button> */}
      </div>
    </div>
  );
};

export default ClassCard;
