import Animation from "./Animation";
import Banner from "./Banner";
import ChooseSection from "./ChooseSection";
import StudentFeedback from "./StudentFeedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <Animation />
      {/* <PopularClasses />
      <PopularInstructors /> */}
      <ChooseSection />
      <StudentFeedback />
    </div>
  );
};

export default Home;
