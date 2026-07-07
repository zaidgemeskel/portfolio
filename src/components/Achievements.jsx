import { useInView } from "../hooks/useInView";
import { achievements, achievements2 } from "../data/achievements";
import "./Achievements.css";

const Achievements = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>What I've Built</h2>
          <p>My accomplishments and milestones</p>
        </div>

        <div className={`achievements-grid ${isInView ? "fade-in-up" : ""}`}>
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="achievement-card"
              style={{
                animationDelay: `${(index % 3) * 0.15}s`,
              }}
            >
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-content">
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-divider"></div>

        <div
          className={`achievements-secondary ${isInView ? "fade-in-up" : ""}`}
        >
          {achievements2.map((achievement, index) => (
            <div
              key={achievement.id}
              className="achievement-item"
              style={{
                animationDelay: `${0.4 + index * 0.1}s`,
              }}
            >
              <div className="achievement-badge">✓</div>
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
