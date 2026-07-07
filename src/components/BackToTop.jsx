import { useScrollTop } from "../hooks/useScrollTop";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

const BackToTop = () => {
  const [isVisible, scrollToTop] = useScrollTop();

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Back to top"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
