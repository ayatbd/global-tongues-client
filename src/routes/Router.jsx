import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/pages/Login";
import Register from "../pages/pages/Register";
import About from "../pages/Pages/About/About";
import Dashboard from "../layouts/Dashboard/Dashboard";
import DashboardHome from "../layouts/Dashboard/DashboardHome";
import StudentRoute from "./StudentRoute";
import SelectedClass from "../pages/Dashboard/SelectedClass";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import EnrolledClass from "../pages/Dashboard/EnrolledClass";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../pages/Dashboard/AddClass";
import MyClass from "../pages/Dashboard/MyClass";
import AdminRoute from "./AdminRoute";
import ManageClass from "../pages/Dashboard/ManageClass";
import ManageUser from "../pages/Dashboard/ManageUser";
import Classes from "../pages/Pages/Classes";
import Instructors from "../pages/Pages/Instructors";
import Contact from "../pages/Pages/Contact";
import TestRoute from "./TestRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "testroute",
        element: <TestRoute />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "selectedclass",
        element: (
          <StudentRoute>
            <SelectedClass></SelectedClass>
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "payhistory",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      {
        path: "enrolledclass",
        element: (
          <StudentRoute>
            <EnrolledClass></EnrolledClass>
          </StudentRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "manageuser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
    ],
  },
]);
