import { useEffect, useState } from "react";
import "../../index.css";
import useTheme from "../../hooks/useTheme";
import Loader from "../Shared/Loader";
import Tittle from "../Shared/Tittle";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
  const [classDatas, setClassData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setLoading(true);
    fetch("https://summer-camp-server-ten-delta.vercel.app/class")
      .then((response) => response.json())
      .then((data) => {
        setClassData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  // eslint-disable-next-line no-unused-vars
  const sortedCards = classDatas
    .sort((a, b) => b.availableSeats - a.availableSeats)
    .slice(0, 6);

  return (
    <div className={`py-24 bg-[#f5f6f9] ${isDarkMode && "bg-gray-900"}`}>
      <Tittle subTitle="Best Selling" title="Popular Classes"></Tittle>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid overflow-hidden grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-14"
      >
        {classDatas.map((classData) => (
          <PopularClassCard
            key={classData._id}
            classData={classData}
          ></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
