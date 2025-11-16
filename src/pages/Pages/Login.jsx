/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";
import { app } from "../../firebase/firebase.config";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [user, setUser] = useState(null);
  const { setLoading } = useAuth();

  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  console.log(user, error);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const { signIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // handling user's login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        if (error.code === "auth/user-not-found") {
          Swal.fire({
            icon: "warning",
            title: "No account found",
            text: "You need to register before logging in!",
          });
        } else if (error.code === "auth/wrong-password") {
          Swal.fire({
            icon: "error",
            title: "Incorrect password",
            text: "Please try again.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login failed",
            text: error.message,
          });
        }
        setError(error.message);
      })
      .finally(() => {
        // 🔑 Reset loading state here
        setLoading(false);
      });
  };

  const handleLoginWithPopUp = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        image: loggedInUser.photoURL,
      };
      fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "User logged in successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          Navigate(from, { replace: true });
        });
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Login</h1>
      <p className="text-slate-500">Hi, Welcome back 👋</p>

      <div className="my-5">
        <button
          onClick={handleLoginWithPopUp}
          className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            className="w-6 h-6"
            alt=""
          />{" "}
          <span>Login with Google</span>
        </button>
      </div>
      <p>{error}</p>
      <form onSubmit={handleLogin} className="my-10">
        <div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
            />
          </label>
          <label className="relative" htmlFor="password">
            <p className="font-medium text-slate-700 pb-2">Password</p>
            <input
              id="password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              required
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transfor focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <AiFillEyeInvisible size={24} />
              ) : (
                <AiFillEye size={24} />
              )}
            </button>
          </label>
          <div className="flex flex-row justify-between">
            <div>
              <label
                htmlFor="remember"
                className="flex items-center justify-center gap-2"
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                />
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="font-medium text-indigo-600">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>Login</span>
          </button>
          <p className="text-center">
            Not registered yet?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
            >
              <span>Register now </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
