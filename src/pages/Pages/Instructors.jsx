import { useEffect, useState } from "react";
import img from "../../assets/images/img20.png";
import { FaEnvelope } from "react-icons/fa";
import Loader from "../Shared/Loader";
import PagesBanner from "../Shared/PagesBanner";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://summer-camp-server-ten-delta.vercel.app/class")
      .then((response) => response.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="">
      <PagesBanner img={img} title="Choose Your Best Tutor"></PagesBanner>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="p-5 h-72 overflow-hidden flex justify-between items-center gap-7 border border-gray-300 rounded"
          >
            <div className="w-2/5 h-full">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full object-center h-full object-cover"
              />
            </div>
            <div className="w-3/5 flex flex-col justify-start items-start space-y-2">
              <h3 className="text-2xl font-bold">
                Name: {instructor.instructorName}
              </h3>
              <p className="flex justify-center items-center gap-2">
                <FaEnvelope className="w-4 h-4 text-red-500"></FaEnvelope>
                {instructor.email}
              </p>
              <p>Total Classes: </p>
              <p>Total Students: </p>
              <button className="btn btn-accent">See All Classes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
