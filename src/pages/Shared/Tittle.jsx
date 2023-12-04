import useTheme from "../../hooks/useTheme";

const Tittle = ({ subTitle, title }) => {
  const { isDarkMode } = useTheme();
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="text-center">
      <p className="font-kanit text-red-500 font-bold">{subTitle}</p>
      <h1
        className={`text-2xl md:text-3xl font-kanit font-extrabold text-black ${
          isDarkMode && "text-white"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Tittle;
