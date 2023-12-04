import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar";
import Footer from "../../pages/Shared/Footer";
import Aos from "aos";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <ScrollToTop width="20" height="20" top="700" smooth color="#fff" />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
