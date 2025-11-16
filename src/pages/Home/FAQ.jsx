import useTheme from "../../hooks/useTheme";
import Container from "../Shared/Container";
import Tittle from "../Shared/Tittle";

const FAQ = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gray-900 text-gray-100 border-b border-gray-400"
          : "bg-gray-100 text-gray-900"
      } py-8`}
    >
      <Container>
        <div className="max-w-3xl mx-auto my-12 px-4 space-y-14">
          {/* <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2> */}
          <Tittle title="Frequently Asked Questions"></Tittle>
          <div data-aos="fade-up" className="space-y-4">
            {/* FAQ 1 */}
            <div
              className={`collapse collapse-plus border rounded-box ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100"
                  : "border-base-300 bg-base-100 text-gray-900"
              }`}
            >
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                How long does it take to learn a new language?
              </div>
              <div className="collapse-content">
                <p>
                  It depends on your dedication and consistency. With daily
                  practice, most learners can achieve conversational fluency in
                  6–12 months.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div
              className={`collapse collapse-plus border rounded-box ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100"
                  : "border-base-300 bg-base-100 text-gray-900"
              }`}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                Do I need any prior knowledge to start?
              </div>
              <div className="collapse-content">
                <p>
                  No prior experience is required! Our courses are designed for
                  beginners as well as advanced learners.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div
              className={`collapse collapse-plus border rounded-box ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100"
                  : "border-base-300 bg-base-100 text-gray-900"
              }`}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                Can I learn multiple languages at the same time?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, but we recommend focusing on one language first to build
                  a strong foundation before starting another.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div
              className={`collapse collapse-plus border rounded-box ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100"
                  : "border-base-300 bg-base-100 text-gray-900"
              }`}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                Are the lessons available offline?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you can download lessons and practice materials to access
                  them anytime, even without an internet connection.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div
              className={`collapse collapse-plus border rounded-box ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100"
                  : "border-base-300 bg-base-100 text-gray-900"
              }`}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                Do you provide certificates after completion?
              </div>
              <div className="collapse-content">
                <p>
                  Yes! After completing a course, you will receive a certificate
                  of achievement that you can showcase to employers or on
                  LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
