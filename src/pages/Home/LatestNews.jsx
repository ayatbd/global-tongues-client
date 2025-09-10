/* eslint-disable react/no-unescaped-entities */
import Container from "../Shared/Container";
import img30 from "./../../assets/images/img30.jpg";
const LatestNews = () => {
  return (
    <div>
      <Container>
        <div className="my-24 mx-auto md:px-20">
          <section className="mb-32 text-center md:text-left">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Latest articles
            </h2>

            <div className="mb-12 overflow-hidden grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div data-aos="fade-right" className="mb-6 md:mb-0">
                <div
                  className="relative h-72 mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://language-school.cmsmasters.net/wp-content/uploads/2015/11/Depositphotos_85241664_original-1.jpg"
                    className="w-full h-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div data-aos="fade-left">
                <h3 className="mb-3 text-2xl font-bold">
                  THREE REASONS WHY ENGLISH SPELLING IS CONFUSING
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                  Language
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>13.01.2022</u> by
                    <a href="#!">Anna Maria Doe</a>
                  </small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  "Language learning opens doors to diverse cultures & fosters
                  global connections.. Embrace the journey of mastering a new
                  language, enriching both your communication skills and
                  understanding of the world."
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div data-aos="fade-right" className="mb-6 md:order-2 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={img30} className="w-full" alt="Louvre" />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div data-aos="fade-left" className="md:order-1">
                <h3 className="mb-3 text-2xl font-bold">
                  ONLINE OR FACE-TO-FACE? LEARNING ENGLISH TODAY
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                  By Art
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>12.01.2023</u> by
                    <a href="#!">Halley Frankle</a>
                  </small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  "Learning a language is a gateway to unlocking new
                  opportunities,, broadening perspectives, and fostering deeper
                  connections with people worldwide.. It's a rewarding endeavor
                  that expands horizons and enhances cognitive abilities."
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div data-aos="fade-right" className="mb-6 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://language-school.cmsmasters.net/wp-content/uploads/2015/08/Depositphotos_46326837_original.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div data-aos="fade-left">
                <h3 className="mb-3 text-2xl font-bold">
                  WHY ARE YOU THINKING ABOUT LEARNING BETTER ENGLISH?
                </h3>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
                  By David Miller
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>10.01.2023</u> by
                    <a href="#!">Joe Svane</a>
                  </small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  "Mastering English offers a passport to global communication
                  and professional growth. Embrace the journey of learning
                  English, a language that opens doors to a world of
                  possibilities, from career advancement to cultural immersion."
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default LatestNews;
