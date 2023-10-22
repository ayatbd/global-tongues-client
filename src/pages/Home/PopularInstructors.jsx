import { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";
import Loader from "../Shared/Loader";
import Tittle from "../Shared/Tittle";
import { AiFillStar } from "react-icons/ai";

const PopularInstructors = () => {
  const [popular, setPopular] = useState([]);
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://summer-camp-server-ten-delta.vercel.app/class")
      .then((response) => response.json())
      .then((data) => {
        setPopular(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`py-12 bg-[#f5f6f9] ${isDarkMode && "bg-gray-900"}`}>
      <Tittle subTitle="Best Tutor" title="See Top Instructors"></Tittle>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="my-14 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10"
      >
        {popular.map((p) => (
          <div
            key={p._id}
            className={`border hover:-translate-y-3 transition duration-500 ease-in-out border-gray-300 rounded ${
              isDarkMode ? "bg-gray-900" : "bg-teal-200"
            }`}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-60 object-cover mb-4"
            />
            <div
              className={`p-4 space-y-2 overflow-hidden ${
                isDarkMode ? "bg-gray-900 text-white" : ""
              }`}
            >
              <div
                className={`mb-2 space-y-2 ${isDarkMode ? "text-white" : ""}`}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-xl font-bold text-black ${
                      isDarkMode ? "text-white" : ""
                    }`}
                  >
                    {p.instructorName}
                  </h3>
                </div>
                <p>{p.email}</p>

                <div className="mb-2 flex justify-between items-center">
                  <p className={`text-black ${isDarkMode ? "text-white" : ""}`}>
                    <strong>Available Seats:</strong> {p.availableSeats}
                  </p>

                  <p
                    className={`text-black font-bold py-1 px-4 rounded-full bg-[#01A2A6] ${
                      isDarkMode ? "text-white" : "text-white"
                    }`}
                  >
                    ${p.price}
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <ul className="flex items-center gap-1">
                  <li>
                    <AiFillStar className="text-yellow-400" />
                  </li>
                  <li>
                    <AiFillStar className="text-yellow-400" />
                  </li>
                  <li>
                    <AiFillStar className="text-yellow-400" />
                  </li>
                  <li>
                    <AiFillStar className="text-yellow-400" />
                  </li>
                  <li>
                    <AiFillStar className="text-yellow-400" />
                  </li>
                </ul>
                <p>{p.className}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
