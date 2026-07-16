import { useInView } from "../../hooks/useInView";
import { learningTopics } from "../../data/learning";
import {
  FaRocket,
  FaLock,
  FaCloud,
  FaReact,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";
import styles from "./Learning.module.css";

const iconMap = {
  FaRocket: FaRocket,
  FaShield: FaLock,
  FaCloud: FaCloud,
  FaReact: FaReact,
  FaBrain: FaBrain,
  FaBlueprint: FaChartLine,
};

const Learning = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="learning" className={styles.learning} ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Currently Learning</h2>
          <p>Expanding my knowledge and exploring new frontiers</p>
        </div>

        <div
          className={`${styles["learning-grid"]} ${isInView ? "fade-in-up" : ""}`}
        >
          {learningTopics.map((topic, index) => {
            const IconComponent = iconMap[topic.icon];
            return (
              <div
                key={topic.id}
                className={styles["learning-card"]}
                style={{
                  animationDelay: `${(index % 3) * 0.1}s`,
                }}
              >
                <div className={styles["learning-icon"]}>
                  {IconComponent && <IconComponent />}
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Learning;
