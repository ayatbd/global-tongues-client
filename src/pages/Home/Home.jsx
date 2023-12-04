import Animation from "./Animation";
import Banner from "./Banner";
import LatestNews from "./LatestNews";
// import ChooseSection from "./ChooseSection";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import StudentFeedback from "./StudentFeedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <Animation />
      <PopularClasses />
      <PopularInstructors />
      {/* <ChooseSection /> */}
      <StudentFeedback />
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
