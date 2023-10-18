import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/pages/Login";
import Register from "../pages/pages/Register";
import About from "../pages/Pages/About/About";

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
      // {
      //   path: "classes",
      //   element: <Classes></Classes>,
      // },
      // {
      //   path: "instructors",
      //   element: <Instructors></Instructors>,
      // },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  //   {
  //     path: "dashboard",
  //     element: <Dashboard></Dashboard>,
  //     errorElement: <ErrorPage></ErrorPage>,
  //     children: [
  //       {
  //         path: "home",
  //         element: <DashboardHome></DashboardHome>,
  //       },
  //       {
  //         path: "selectedclass",
  //         element: (
  //           <StudentRoute>
  //             <SelectedClass></SelectedClass>
  //           </StudentRoute>
  //         ),
  //       },
  //       {
  //         path: "payment",
  //         element: (
  //           <StudentRoute>
  //             <Payment></Payment>
  //           </StudentRoute>
  //         ),
  //       },
  //       {
  //         path: "payhistory",
  //         element: (
  //           <StudentRoute>
  //             <PaymentHistory></PaymentHistory>
  //           </StudentRoute>
  //         ),
  //       },
  //       {
  //         path: "enrolledclass",
  //         element: (
  //           <StudentRoute>
  //             <EnrolledClass></EnrolledClass>
  //           </StudentRoute>
  //         ),
  //       },
  //       {
  //         path: "addclass",
  //         element: (
  //           <InstructorRoute>
  //             <AddClass></AddClass>
  //           </InstructorRoute>
  //         ),
  //       },
  //       {
  //         path: "myclass",
  //         element: (
  //           <InstructorRoute>
  //             <MyClass></MyClass>
  //           </InstructorRoute>
  //         ),
  //       },
  //       {
  //         path: "manageclass",
  //         element: (
  //           <AdminRoute>
  //             <ManageClass></ManageClass>
  //           </AdminRoute>
  //         ),
  //       },
  //       {
  //         path: "manageuser",
  //         element: (
  //           <AdminRoute>
  //             <ManageUser></ManageUser>
  //           </AdminRoute>
  //         ),
  //       },
  //     ],
  //   },
]);
