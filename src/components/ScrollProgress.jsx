import { useScrollProgress } from "../hooks/useScrollProgress";
import "./ScrollProgress.css";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" style={{ width: `${progress}%` }}></div>
  );
};

export default ScrollProgress;
