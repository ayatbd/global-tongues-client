import { Fade, Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import animation_lk7xnipo from "../../assets/animation_lk7xnipo.json";
import useTheme from "../../hooks/useTheme";
import Container from "../Shared/Container";

const Animation = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`py-10 ${
        isDarkMode ? "bg-gray-900 border-y border-gray-400" : "bg-white"
      }`}
    >
      <Container>
        <div
          className={`md:flex justify-center items-center ${
            isDarkMode && "bg-gray-900"
          }`}
        >
          <div
            className={`md:flex-1 text-center sm:py-16 md:py-20 lg:py-28 text-gray-800 ${
              isDarkMode ? "bg-gray-900" : ""
            }`}
          >
            <Slide triggerOnce duration={2000}>
              <h1
                className={`text-3xl lg:text-6xl md:text-4xl font-bold mb-5 ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                New language, new <br /> opportunities, new you
              </h1>
            </Slide>
            <Fade
              triggerOnce
              duration={1000}
              delay={1500}
              cascade
              damping={0.1}
            >
              <p
                className={`text-base sm:text-lg md:text-xl lg:text-2xl ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Get access to compact lessons from the experts and connect with
                a community of native speakers <br /> to help you master words
                faster.
              </p>
            </Fade>
          </div>
          <div className="md:flex-1">
            <Lottie
              className={` ${isDarkMode && "bg-gray-900 h-full"}`}
              animationData={animation_lk7xnipo}
              loop={true}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Animation;
