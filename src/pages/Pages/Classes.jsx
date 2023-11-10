import { useEffect, useState } from "react";
// import img from "../../assets/images/img19.png";
import ClassCard from "./ClassCard";
import PagesBanner from "../Shared/PagesBanner";
import Loader from "../Shared/Loader";

const Classes = () => {
  const [classDatas, setClassData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/class`)
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
      <PagesBanner title="All Classes"></PagesBanner>
      <div className="grid overflow-hidden grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 my-14">
        {classDatas.map((classData) => (
          <ClassCard key={classData._id} classData={classData}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
