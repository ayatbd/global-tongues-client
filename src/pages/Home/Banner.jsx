import img2 from "../../assets/images/img11.jpg";
import img3 from "../../assets/images/img12.jpg";
import img4 from "../../assets/images/img13.jpg";
import img5 from "../../assets/images/img14.jpg";
// import img6 from "../../assets/images/img26.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useTheme from "../../hooks/useTheme";
import { Slide } from "react-awesome-reveal";
import Container from "../Shared/Container";

const Banner = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`lg:h-[90vh] md:h-[70vh] h-[50vh] z-0 ${
        isDarkMode ? "bg-gray-700" : ""
      }`}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Container>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center flex items-center justify-start"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 0.1)),url(${img2})`,
              }}
            >
              <div className="md:text-start text-white p-8 md:p-16 max-w-md lg:space-y-4 md:mx-[10%]">
                <Slide direction="left" duration="1200">
                  <div className="md:space-y-2 space-y-1">
                    <h3 className="text-4xl">
                      Develop your language skill now..
                    </h3>
                    <p className="md:text-md pb-2 ">
                      To have another language is to possess a second soul.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <button className="bg-primary text-white text-sm hover:bg-blue-700 normal-case rounded-full px-6 py-2">
                        Sign Up Now
                      </button>
                      <button className="border border-blue-600 text-white text-sm hover:bg-blue-700 normal-case rounded-full px-6 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center flex items-center justify-start"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 0.1)),url(${img3})`,
              }}
            >
              <div className="md:text-start text-center text-white p-14 md:p-16 max-w-md lg:space-y-4 md:mx-[10%]">
                <Slide direction="right" duration="1200">
                  <div className="md:space-y-2 space-y-1">
                    <h3 className="text-4xl">Enhance linguistic prowess!</h3>
                    <p className="md:text-md pb-2 ">
                      Teaching Turning Today’s Learners Into Tomorrow’s Leaders
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <button className="bg-primary text-white text-sm hover:bg-blue-700 normal-case rounded-full px-6 py-2">
                        Sign Up Now
                      </button>
                      <button className="border border-blue-600 text-white text-sm hover:bg-blue-700 normal-case rounded-full px-6 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 0.1)),url(${img4})`,
              }}
            >
              <div className="text-center text-white p-16 max-w-md lg:space-y-4 md:mx-[8%]">
                <Slide direction="right" duration="1200">
                  <div className="space-y-2 text-center">
                    <h3 className="text-4xl">
                      Every student matters, every moment counts.
                    </h3>
                    <p className="md:text-md pb-2 ">
                      Teaching Turning Today’s Learners Into Tomorrow’s Leaders
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <button className=" bg-primary text-white text-sm hover:bg-blue-700 normal-case rounded-full px-6 py-2">
                        Sign Up Now
                      </button>
                      <button className="border border-blue-600 text-white text-sm hover:bg-blue-700 normal-case rounded-full px-6 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center flex items-center justify-start"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 0.1)),url(${img5})`,
              }}
            >
              <div className="md:text-start text-center text-white p-16 max-w-md lg:space-y-4 md:mx-[10%]">
                <Slide direction="left" duration="1200">
                  <div className="md:space-y-2 space-y-1">
                    <h3 className="text-4xl">Special class for children.</h3>
                    <p className="md:text-md pb-2">
                      Teaching Turning Today’s Learners Into Tomorrow’s Leaders
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <button className=" bg-primary text-white text-sm hover:bg-blue-700 normal-case rounded-full px-6 py-2">
                        Sign Up Now
                      </button>
                      <button className="border border-blue-600 text-white text-sm hover:bg-blue-700 normal-case rounded-full px-6 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </SwiperSlide>
        </Container>
      </Swiper>
    </div>
  );
};

export default Banner;
