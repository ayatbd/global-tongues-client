import { Fade, Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import animation_lk7xnipo from "../../assets/animation_lk7xnipo.json";
import useTheme from "../../hooks/useTheme";

const Animation = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`md:flex justify-center items-center ${
        isDarkMode && "bg-gray-900"
      }`}
    >
      <div
        className={`md:w-1/2 text-center sm:py-16 md:py-20 lg:py-28 text-white ${
          isDarkMode
            ? "bg-gray-900"
            : "bg-gradient-to-r from-teal-400 to-yellow-200 py-10 my-20"
        }`}
      >
        <Slide>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
            New language, new <br /> opportunities, new you
          </h1>
        </Slide>
        <Fade delay={1000} cascade damping={0.1}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Get access to compact lessons from the experts and connect with a
            community of native speakers <br /> to help you master words faster.
          </p>
        </Fade>
      </div>
      <Lottie
        className={` ${isDarkMode && "bg-gray-900 h-full"}`}
        animationData={animation_lk7xnipo}
        loop={true}
      />
    </div>
  );
};

export default Animation;
