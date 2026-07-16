import { useInView } from "../../hooks/useInView";
import { FaBullseye, FaUsers, FaBookOpen } from "react-icons/fa";
import styles from "./About.module.css";
import zizu from "../../assets/zizu.jpg";

const About = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div
          className={`${styles["about-content"]} ${isInView ? "fade-in-up" : ""}`}
        >
          <div className={styles["about-image"]}>
            <div className={styles["image-container"]}>
              <img src={zizu} alt="Zaid Gebremeskel" />
              <div className={styles["image-border"]}></div>
            </div>
          </div>

          <div className={styles["about-text"]}>
            <h2>About Me</h2>
            <p>
              I'm a passionate Full-Stack Web Developer who enjoys building
              responsive, user-friendly, and scalable web applications. I
              started my journey with HTML, CSS, and JavaScript to understand
              the fundamentals of web development.
            </p>
            <p>
              Since then, I've expanded my skills to include React, Node.js,
              Express.js, and MySQL. My focus is on creating real-world
              applications that solve actual problems and deliver value to
              users.
            </p>
            <p>
              I'm committed to continuous learning and improvement. I believe
              that the best way to grow as a developer is to build projects,
              learn from mistakes, and stay updated with the latest industry
              trends and technologies.
            </p>

            <div className={styles.features}>
              <div className={styles["feature-card"]}>
                <div className={styles["feature-icon"]}>
                  <FaBullseye />
                </div>
                <h4>Problem Solving</h4>
                <p>
                  Breaking down complex problems into simple, elegant solutions
                </p>
              </div>
              <div className={styles["feature-card"]}>
                <div className={styles["feature-icon"]}>
                  <FaUsers />
                </div>
                <h4>Team Collaboration</h4>
                <p>Working effectively with others to achieve common goals</p>
              </div>
              <div className={styles["feature-card"]}>
                <div className={styles["feature-icon"]}>
                  <FaBookOpen />
                </div>
                <h4>Continuous Learning</h4>
                <p>Always evolving and staying ahead of technology changes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
