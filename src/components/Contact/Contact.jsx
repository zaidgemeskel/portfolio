import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  const [ref, isInView] = useInView(0.2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Let's Connect</h2>
          <p>I'd love to hear from you. Feel free to reach out!</p>
        </div>

        <div
          className={`${styles["contact-content"]} ${isInView ? "fade-in-up" : ""}`}
        >
          <div className={styles["contact-info"]}>
            <h3>Get in Touch</h3>
            <p>
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'm always open to new opportunities and
              conversations.
            </p>

            <div className={styles["contact-details"]}>
              <div className={styles["contact-detail"]}>
                <FaEnvelope className={styles["contact-icon"]} />
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:Zaidgebremeskel502@gmail.com">
                      Zaidgebremeskel502@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles["contact-detail"]}>
                <FaMapMarkerAlt className={styles["contact-icon"]} />
                <div>
                  <h4>Location</h4>
                  <p>Tigray, Ethiopia</p>
                </div>
              </div>

              <div className={styles["contact-detail"]}>
                <FaGithub className={styles["contact-icon"]} />
                <div>
                  <h4>GitHub</h4>
                  <p>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @github-profile
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles["contact-detail"]}>
                <FaLinkedin className={styles["contact-icon"]} />
                <div>
                  <h4>LinkedIn</h4>
                  <p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zaid Gebremeskel
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles["social-links"]}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["social-link"]}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["social-link"]}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:zaid@example.com"
                className={styles["social-link"]}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form className={styles["contact-form"]} onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>

            <div className={styles["form-group"]}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {submitted && (
              <div className={styles["success-message"]}>
                Thank you! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
