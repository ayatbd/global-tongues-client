import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/img0.png";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-gray-900 h-fit lg:h-[55vh]  w-full">
      <Container>
        <div className="bg-[url('https://i.ibb.co/SctkR1y/footer-bg.png')] h-fit lg:h-[55vh] w-full flex flex-col justify-between">
          <div className="max-container pt-10 md:pt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-5 md:gap-y-0 p-2 md:p-0 overflow-hidden">
            <div
              data-aos="fade-left"
              className="flex flex-col  items-center gap-2"
            >
              <img className="w-8 md:w-16" src={img1} alt="" />
              <h1 className="text-xl md:text-3xl font-kanit font-extrabold text-white">
                Global<span className="text-primary">Tongues</span>
              </h1>
              <p className="text-white md:text-lg mt-3 md:mt-7 ">Address</p>
              <p className="text-[#b8b8b8] max-w-[250px] text-center">
                20 Mercantile Plaza, Suite 546, Fort Worth, TX, 16734, USA
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="w-full h-full font-kanit pl-4 md:pl-16 border-l border-secondary"
            >
              <h1 className="text-base md:text-2xl font-bold text-white">
                Contract With Us
              </h1>
              <div className="border border-primary w-1/4 mt-2"></div>
              <p className="text-white text-lg mt-3 md:mt-5">Call Us</p>
              <p className="text-[#b8b8b8] mt-2">(.......789)</p>
              <p className="text-white text-lg mt-3 md:mt-5 ">Mail Us</p>
              <p className="text-[#b8b8b8] mt-2">example@gmail.com</p>
            </div>
            <div
              data-aos="fade-left"
              className="w-full h-full font-kanit pl-3 md:px-14 md:border-x border-secondary"
            >
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Quick Links
              </h1>
              <div className="border border-primary w-1/4 mt-2"></div>
              <div className="flex flex-col gap-3 mt-8">
                <Link to="/" className="text-base text-[#b8b8b8]">
                  Home
                </Link>
                <Link to="/" className="text-base text-[#b8b8b8]">
                  About Us
                </Link>
                <Link to="/" className="text-base text-[#b8b8b8]">
                  Contract
                </Link>
                <Link to="/" className="text-base text-[#b8b8b8]">
                  Classes
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="w-full h-full font-kanit pl-3 md:pl-16"
            >
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Subscribe Now
              </h1>
              <div className="border border-primary w-1/4 mt-2"></div>
              <p className="text-white text-lg mt-2 md:mt-7 ">
                Get Us In The Inbox And Get The Best Implementation!
              </p>
              <p className="text-[#b8b8b8] text-base mt-2 md:mt-4 ">
                When looking at its layout. The point of using Lorem it is a
                long fact that will be distracted.
              </p>
              <input
                type="email"
                name=""
                id=""
                className="w-full rounded-full h-8 md:h-10 px-6 mt-2 md:mt-5 text-[#b8b8b8] bg-white outline-none"
                placeholder="Enter your email"
              />
              <button className="w-full h-8 md:h-10 mt-2 md:mt-5  rounded-full border border-primary text-base font-bold font-kanit bg-primary hover:animate-pulse transition-all duration-300 text-white">
                Subscribe now
              </button>
            </div>
          </div>
          <p className="text-white text-base text-center my-4">
            &#169; All right reserved by{" "}
            <span className="text-primary">GlobalTongues</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
