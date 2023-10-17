import Animation from "./Animation";
import Banner from "./Banner";
import StudentFeedback from "./StudentFeedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <Animation />
      {/* <PopularClasses />
      <PopularInstructors /> */}
      <StudentFeedback />
    </div>
  );
};

export default Home;
