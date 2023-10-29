import { FaChalkboardTeacher, FaLeanpub, FaUserFriends } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar";
import Footer from "../../pages/Shared/Footer";
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
        <div className="drawer-content flex flex-col items-center pt-5">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-indigo-800">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div>
            <div className="mt-3 hidden md:block">
              <img
                className="w-[150px] h-[150px] rounded-full mx-auto"
                src={user.photoURL ? user.photoURL : profile}
                alt="Image is not available"
              />
              <h1 className="text-lg text-white font-extrabold text-center font-kanit">
                {user.displayName ? user.displayName : "No Name found"}
              </h1>
              <p className="text-xs text-white font-bold font-kanit text-center">
                {user?.email}
              </p>
            </div>
            <div className="divider"></div>
            <ul className="menu p-4 w-[15rem] h-full text-base-content">
              {isStudent && (
                <div>
                  <li>
                    <NavLink
                      to="/dashboard/selectedclass"
                      className="font-bold text-white"
                    >
                      <BiSelectMultiple></BiSelectMultiple> My Selected Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/enrolledclass"
                      className="font-bold text-white"
                    >
                      <SiGoogleclassroom></SiGoogleclassroom> My Enrolled
                      Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/payhistory"
                      className="font-bold text-white"
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
                      className="font-bold text-white"
                    >
                      <FaLeanpub></FaLeanpub> Add a Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myclass"
                      className="font-bold text-white"
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
                      className="font-bold text-white"
                    >
                      <FaChalkboardTeacher></FaChalkboardTeacher> Manage Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manageuser"
                      className="font-bold text-white"
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
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
