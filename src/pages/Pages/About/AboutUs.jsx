import { Link } from "react-router-dom";
import MiniService from "./MiniService";
import ButtonOutline from "./ButtonOutline";
// import img1 from "../assets/images/img22.jpeg";
import useTheme from "../../../hooks/useTheme";

const AboutUs = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="max-container my-14 md:my-20 ">
      <div className="grid lg:grid-cols-2 md:gap-2">
        <div className=" relative p-3">
          <div className="w-[75%] h-[80%] hidden lg:block bg-red-100 rounded-xl absolute top-7  left-7"></div>
          <div className="hidden lg:block md:w-[75%] md:h-[80%] rounded-xl md:absolute top-0  left-0 bg-[url('https://i.ibb.co/w0SyWYJ/img22.jpg')] bg-cover"></div>
          <img
            src="https://i.ibb.co/9N5dtqv/img21.jpg"
            className="w-[380px] h-[380px] mx-auto rounded-full lg:absolute bottom-0 right-14 "
          ></img>
        </div>
        <div className="space-y-4 px-2 md:px-0">
          <h1
            className={`text-2xl md:text-4xl font-bold duration-500 ${
              isDarkMode ? "text-gray-200" : "text-black"
            }`}
          >
            We Are Ready To Set You Differently From Others
          </h1>
          <p
            className={`font-kanit text-sm md:text-base duration-500 ${
              isDarkMode ? "text-gray-300" : "text-secondary"
            }`}
          >
            It is a long established fact that a reader will be distracted by
            the readable content page it when looking at its layout. The point
            of using Lorem Ipsum is that it normal distribution of a letters, as
            opposed to using making it look like readable English.
          </p>
          <div className={`grid grid-cols-2 gap-5`}>
            <MiniService
              heading="Get Fitness Training"
              description="Many desktop publishing packages and use will uncover many web sites."
            ></MiniService>
            <MiniService
              heading="Full Body Workout"
              description="Many desktop publishing packages and use will uncover many web sites."
            ></MiniService>
            <MiniService
              heading="Quality Equipment"
              description="Many desktop publishing packages and use will uncover many web sites."
            ></MiniService>
            <MiniService
              heading="Build Hard Bones"
              description="Many desktop publishing packages and use will uncover many web sites."
            ></MiniService>
          </div>
          <div className="mt-3">
            <Link to="/about">
              <ButtonOutline text={"More About Us"}></ButtonOutline>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
