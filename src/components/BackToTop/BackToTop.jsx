import { useScrollTop } from "../../hooks/useScrollTop";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [isVisible, scrollToTop] = useScrollTop();

  return (
    <button
      type="button"
      className={`${styles["back-to-top"]} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      title="Back to top"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
