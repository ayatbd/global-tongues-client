/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // usestate for photo uploading
  const [photoPreview, setPhotoPreview] = useState(null);

  //show preview after selecting an image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const { createUser } = useAuth();
  const navigate = useNavigate();

  // handling the registration of user
  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const file = form.photo.files[0]; // <-- uploaded file

    console.log(name, email, password, file);

    // validate as before...
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (passwordError || confirmPasswordError) {
      return;
    }

    try {
      const result = await createUser(email, password);

      if (result.user) {
        // Upload photo file to backend or cloud storage
        const formData = new FormData();
        formData.append("photo", file);
        formData.append("name", name);
        formData.append("email", email);

        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          body: formData, // don't set Content-Type (browser handles it)
        });

        const data = await response.json();

        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  // password validation for the input field
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password should be at least 6 characters long, contain a capital letter, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    const password = document.getElementById("password").value;
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };
  return (
    <div className="flex flex-col items-center py-20 justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                // handlePasswordChange(e);
                validatePassword(e.target.value);
              }}
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              name="confirm"
              type="password"
              id="confirmPassword"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validateConfirmPassword(e.target.value);
              }}
              required
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">
                {confirmPasswordError}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 font-medium mb-1"
            >
              Photo URL
            </label>
            <input
              name="photo"
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Preview"
                className="w-20 h-20 object-cover mt-2 rounded-md shadow-md"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-6"
          >
            Register
          </button>
        </form>
        <p className="text-gray-600 mb-4">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
