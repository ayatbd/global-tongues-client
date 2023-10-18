import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import PagesBanner from "../Components/PagesBanner";
import img from "../assets/images/img19.png";
import Loader from "./Shared/Loader";

const Classes = () => {
  const [classDatas, setClassData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="">
      <PagesBanner img={img} title="All Classes"></PagesBanner>
      <div className="grid overflow-hidden grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 my-14">
        {classDatas.map((classData) => (
          <ClassCard key={classData._id} classData={classData}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
