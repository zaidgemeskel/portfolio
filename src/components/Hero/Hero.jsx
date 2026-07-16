import { useEffect, useRef } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";
import styles from "./Hero.module.css";

const Hero = () => {
  const [ref, isInView] = useInView(0.3);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Particle animation
    const particles = [];
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      <div className="container">
        <div className={styles["hero-content"]}>
          <div
            className={`${styles["hero-text"]} ${isInView ? "fade-in-up" : ""}`}
          >
            <h1 className={styles["hero-title"]}>Zaid Gebremeskel</h1>
            <p className={styles["hero-subtitle"]}>
              AI Full-Stack Web Developer
            </p>
            <p className={styles["hero-description"]}>
              I build modern, responsive, and scalable web applications using
              React, Node.js, Express, and MySQL. I enjoy solving real-world
              problems and continuously learning new technologies.
            </p>
            <div className={styles["hero-buttons"]}>
              <button
                className="btn btn-primary"
                onClick={() => handleScroll("projects")}
              >
                View Projects <FaArrowRight />
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleScroll("contact")}
              >
                Contact Me <FaEnvelope />
              </button>
            </div>
          </div>

          <div
            className={`${styles["hero-visual"]} ${isInView ? "slide-in-right" : ""}`}
          >
            <canvas ref={canvasRef} className={styles["hero-canvas"]}></canvas>
            <div className={styles["hero-code"]}>
              <div className={styles["code-line"]}>
                <span className={styles["code-keyword"]}>const</span>{" "}
                <span className={styles["code-var"]}>developer</span> ={" "}
                <span className={styles["code-string"]}>'Full-Stack'</span>;
              </div>
              <div className={styles["code-line"]}>
                <span className={styles["code-keyword"]}>const</span>{" "}
                <span className={styles["code-var"]}>passion</span> ={" "}
                <span className={styles["code-string"]}>
                  'Building Products'
                </span>
                ;
              </div>
              <div className={styles["code-line"]}>
                <span className={styles["code-keyword"]}>const</span>{" "}
                <span className={styles["code-var"]}>mission</span> ={" "}
                <span className={styles["code-string"]}>
                  'Continuous Learning'
                </span>
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
