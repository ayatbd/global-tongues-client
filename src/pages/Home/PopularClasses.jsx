/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../../index.css";
import useTheme from "../../hooks/useTheme";
import Loader from "../Shared/Loader";
import Tittle from "../Shared/Tittle";
import PopularClassCard from "./PopularClassCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../Shared/Container";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [approvedClasses, setApprovedClasses] = useState([]);
  const { isDarkMode } = useTheme();
  const [axiosSecure] = useAxiosSecure();

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
    <div
      className={`py-14 bg-[#e4e5e7] ${
        isDarkMode && "bg-gray-900 border-b border-gray-400"
      }`}
    >
      <Container>
        <Tittle subTitle="Best Selling" title="Popular Classes"></Tittle>
        <div
          className={`grid overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 ${
            isDarkMode && "bg-gray-900"
          }`}
        >
          {approvedClasses.map((classData) => (
            <PopularClassCard
              key={classData._id}
              classData={classData}
            ></PopularClassCard>
          ))}
        </div>
        <div className="text-center">
          <Link
            data-aos="fade-up"
            to=""
            className="inline-flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded"
          >
            <span>View More</span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 ml-2"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;
