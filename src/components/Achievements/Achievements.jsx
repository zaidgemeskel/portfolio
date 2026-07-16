import { useInView } from "../../hooks/useInView";
import { achievements, achievements2 } from "../../data/achievements";
import { FaCheck } from "react-icons/fa";
import styles from "./Achievements.module.css";

const Achievements = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="achievements" className={styles.achievements} ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>What I've Built</h2>
          <p>My accomplishments and milestones</p>
        </div>

        <div
          className={`${styles["achievements-grid"]} ${isInView ? "fade-in-up" : ""}`}
        >
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={styles["achievement-card"]}
              style={{
                animationDelay: `${(index % 3) * 0.15}s`,
              }}
            >
              <div className={styles["achievement-number"]}>
                {achievement.number}
              </div>
              <div className={styles["achievement-content"]}>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["achievements-divider"]}></div>

        <div
          className={`${styles["achievements-secondary"]} ${isInView ? "fade-in-up" : ""}`}
        >
          {achievements2.map((achievement, index) => (
            <div
              key={achievement.id}
              className={styles["achievement-item"]}
              style={{
                animationDelay: `${0.4 + index * 0.1}s`,
              }}
            >
              <div className={styles["achievement-badge"]}>
                <FaCheck />
              </div>
              <div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
