import { useInView } from "../hooks/useInView";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaRobot } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Showcasing my best work and technical expertise</p>
        </div>

        <div className={`projects-grid ${isInView ? "fade-in-up" : ""}`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.aiPowered ? "featured-ai" : ""}`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {project.aiPowered && (
                <div className="ai-badge">
                  <FaRobot /> AI Powered
                </div>
              )}

              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveDemo}
                      className="project-link"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.github}
                      className="project-link"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="key-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.keyFeatures.slice(0, 5).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.liveDemo}
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.github}
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Code <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
