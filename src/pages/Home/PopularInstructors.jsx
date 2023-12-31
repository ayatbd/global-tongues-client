import { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";
import Loader from "../Shared/Loader";
import Tittle from "../Shared/Tittle";
import Container from "../Shared/Container";
// import { AiFillStar } from "react-icons/ai";

const PopularInstructors = () => {
  const [popular, setPopular] = useState([]);
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/class`)
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
      <Container>
        <Tittle subTitle="Best Tutor" title="See Top Instructors"></Tittle>
        <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {popular.map((p) => (
            // <div
            //   key={p._id}
            //   className={`border transition duration-500 ease-in-out border-gray-300 rounded ${
            //     isDarkMode ? "bg-gray-900" : "bg-teal-200"
            //   }`}
            // >
            //   <img
            //     src={p.image}
            //     alt={p.name}
            //     className="w-full h-60 object-cover mb-4"
            //   />
            //   <div
            //     className={`p-4 space-y-2 overflow-hidden ${
            //       isDarkMode ? "bg-gray-900 text-white" : ""
            //     }`}
            //   >
            //     <div
            //       className={`mb-2 space-y-2 ${isDarkMode ? "text-white" : ""}`}
            //     >
            //       <div className="flex justify-between items-center">
            //         <h3
            //           className={`text-xl font-bold text-black ${
            //             isDarkMode ? "text-white" : ""
            //           }`}
            //         >
            //           {p.instructorName}
            //         </h3>
            //       </div>
            //       <p>{p.email}</p>

            //       <div className="mb-2 flex justify-between items-center">
            //         <p className={`text-black ${isDarkMode ? "text-white" : ""}`}>
            //           <strong>Available Seats:</strong> {p.availableSeats}
            //         </p>

            //         <p
            //           className={`text-black font-bold py-1 px-4 rounded-full bg-[#01A2A6] ${
            //             isDarkMode ? "text-white" : "text-white"
            //           }`}
            //         >
            //           ${p.price}
            //         </p>
            //       </div>
            //     </div>
            //     <hr />
            //     <div className="flex justify-between items-center">
            //       <ul className="flex items-center gap-1">
            //         <li>
            //           <AiFillStar className="text-yellow-400" />
            //         </li>
            //         <li>
            //           <AiFillStar className="text-yellow-400" />
            //         </li>
            //         <li>
            //           <AiFillStar className="text-yellow-400" />
            //         </li>
            //         <li>
            //           <AiFillStar className="text-yellow-400" />
            //         </li>
            //         <li>
            //           <AiFillStar className="text-yellow-400" />
            //         </li>
            //       </ul>
            //       <p>{p.className}</p>
            //     </div>
            //   </div>
            // </div>
            <div data-aos="fade-up" key={p._id} className="max-w-2xl mx-auto">
              <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg p-8" src={p.image} alt={p.name} />

                <div className="px-5 pb-5">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                    {p.instructorName}
                  </h3>

                  <div className="flex items-center mt-2.5 mb-5">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${p.price}
                    </span>
                    <p className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                      {p.className}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularInstructors;
