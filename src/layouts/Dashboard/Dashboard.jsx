import { FaChalkboardTeacher, FaLeanpub, FaUserFriends } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";
import useAuth from "../../hooks/useAuth";
import profile from "../../assets/images/profile.png";

const Dashboard = () => {
  const { user } = useAuth();

  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();

  return (
    <div className="box-border">
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="pt-5 w-full hidden md:block bg-gray-100 text-black">
            <img
              className="w-[100px] text-center h-[100px] rounded-full mx-auto border"
              src={user?.photoURL ? user?.photoURL : profile}
              alt="No Image"
            />
            <h1 className="text-lg font-extrabold text-center font-kanit">
              {user.displayName ? user.displayName : "No Name found"}
            </h1>
            <p className="text-xs text-pink-600 font-bold font-kanit text-center">
              {user?.email}
            </p>
          </div>
          <ul className="menu bg-gray-100 p-4 w-[15rem] h-full text-base-content overflow-hidden">
            <hr className="my-6 text-black" />
            {isStudent && (
              <div>
                <li>
                  <NavLink
                    to="/dashboard/selectedclass"
                    className="font-bold text-gray-900"
                  >
                    <BiSelectMultiple></BiSelectMultiple> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrolledclass"
                    className="font-bold text-gray-900"
                  >
                    <SiGoogleclassroom></SiGoogleclassroom> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payhistory"
                    className="font-bold text-gray-900"
                  >
                    <MdOutlinePayment></MdOutlinePayment> Payment History
                  </NavLink>
                </li>
              </div>
            )}
            {isInstructor && (
              <div className="space-y-2">
                <li>
                  <NavLink
                    to="/dashboard/addclass"
                    className="font-bold text-gray-900"
                  >
                    <FaLeanpub></FaLeanpub> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myclass"
                    className="font-bold text-gray-900"
                  >
                    <FaChalkboardTeacher></FaChalkboardTeacher> My Classes
                  </NavLink>
                </li>
              </div>
            )}
            {isAdmin && (
              <div className="space-y-2">
                <li>
                  <NavLink
                    to="/dashboard/manageclass"
                    className="font-bold text-gray-900"
                  >
                    <FaChalkboardTeacher></FaChalkboardTeacher> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageuser"
                    className="font-bold text-gray-900"
                  >
                    <FaUserFriends></FaUserFriends> Manage Users
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
