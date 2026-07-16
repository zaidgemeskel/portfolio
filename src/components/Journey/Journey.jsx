import { useInView } from "../../hooks/useInView";
import { journeySteps } from "../../data/journey";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaBrain,
  FaComments,
  FaGraduationCap,
} from "react-icons/fa";
import styles from "./Journey.module.css";

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FaReact: FaReact,
  FaServer: FaServer,
  FaBrain: FaBrain,
  FaComments: FaComments,
  FaGraduationCap: FaGraduationCap,
};

const Journey = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="journey" className={styles.journey} ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>My Journey</h2>
          <p>From fundamentals to full-stack development</p>
        </div>

        <div
          className={`${styles.timeline} ${isInView ? "fade-in-up" : ""}`}
        >
          {journeySteps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            return (
              <div
                key={step.id}
                className={`${styles["timeline-item"]} ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className={styles["timeline-content"]}>
                  <div className={styles["timeline-icon"]}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className={styles["timeline-card"]}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className={styles["timeline-connector"]}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
