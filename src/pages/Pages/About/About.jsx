import PagesBanner from "../../Shared/PagesBanner";
import AboutBottom from "./AboutBottom";
import AboutUs from "./AboutUs";
import ExperienceCounter from "./ExperienceCounter";
import Subscribe from "./Subscribe";
// import ExperienceCounter from "./ExperienceCounter";
// import Subscribe from "./Subscribe";

const About = () => {
  return (
    <div className="">
      <PagesBanner img="" title="About Us"></PagesBanner>
      <div className="max-container">
        <AboutUs></AboutUs>
        <ExperienceCounter></ExperienceCounter>
        <AboutBottom></AboutBottom>
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default About;
