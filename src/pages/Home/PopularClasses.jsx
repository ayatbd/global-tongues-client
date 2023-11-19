import { useEffect, useState } from "react";
import "../../index.css";
import useTheme from "../../hooks/useTheme";
import Loader from "../Shared/Loader";
import Tittle from "../Shared/Tittle";
import PopularClassCard from "./PopularClassCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PopularClasses = () => {
  const [approvedClasses, setApprovedClasses] = useState([]);
  const { isDarkMode } = useTheme();
  const [axiosSecure] = useAxiosSecure();

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`${import.meta.env.VITE_API_URL}/class`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setClassData(data);
  //       setLoading(false);
  //     });
  // }, []);

  console.log(approvedClasses);

  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery(["classes"], async () => {
    const res = await axiosSecure("/class");
    return res.data;
  });

  useEffect(() => {
    if (!isLoading) {
      const filteredClasses = classes.filter(
        (data) => data.status === "approved"
      );
      setApprovedClasses(filteredClasses);
    }
  }, [classes, isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  // eslint-disable-next-line no-unused-vars
  const sortedCards = approvedClasses
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
        {approvedClasses.map((classData) => (
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
