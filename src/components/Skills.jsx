import { useInView } from "../hooks/useInView";
import { skillsData } from "../data/skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import { SiExpress, SiNpm } from "react-icons/si";
import "./Skills.css";

const skillsIcons = {
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  Vite: FaJs,
  "Node.js": FaNode,
  "Express.js": SiExpress,
  MySQL: FaDatabase,
  Git: FaGitAlt,
  GitHub: FaGithub,
  "REST APIs": FaLink,
  npm: SiNpm,
};

const Skills = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <p>Technologies and tools I've mastered</p>
        </div>

        <div className={`skills-grid ${isInView ? "fade-in-up" : ""}`}>
          {skillsData.map((category, index) => (
            <div
              key={category.category}
              className="skill-category-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="category-header">
                <h3>{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill) => {
                  const IconComponent = skillsIcons[skill];
                  return (
                    <div key={skill} className="skill-item">
                      {IconComponent && (
                        <IconComponent className="skill-icon" />
                      )}
                      <span className="skill-name">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
