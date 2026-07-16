import { useScrollProgress } from "../../hooks/useScrollProgress";
import styles from "./ScrollProgress.module.css";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      className={styles["scroll-progress"]}
      style={{ width: `${progress}%` }}
    ></div>
  );
};

export default ScrollProgress;
