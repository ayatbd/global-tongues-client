import useTheme from "../../hooks/useTheme";

const Tittle = ({ subTitle, title }) => {
  const { isDarkMode } = useTheme();
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="text-center">
      <div className="flex justify-center w-full border-opacity-50">
        <div className="divider w-96"></div>
      </div>
      <p className="font-kanit text-red-500 font-bold">{subTitle}</p>
      <h1
        className={`text-2xl md:text-3xl font-kanit font-extrabold text-black ${
          isDarkMode && "text-white"
        }`}
      >
        {title}
      </h1>
      <div className="flex justify-center w-full border-opacity-50">
        <div className="divider w-96"></div>
      </div>
    </div>
  );
};

export default Tittle;
