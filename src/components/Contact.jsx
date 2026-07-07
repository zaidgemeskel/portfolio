import { useState } from "react";
import { useInView } from "../hooks/useInView";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

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
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Let's Connect</h2>
          <p>I'd love to hear from you. Feel free to reach out!</p>
        </div>

        <div className={`contact-content ${isInView ? "fade-in-up" : ""}`}>
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'm always open to new opportunities and
              conversations.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:zaid@example.com">zaid@example.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>City, Country</p>
                </div>
              </div>

              <div className="contact-detail">
                <FaGithub className="contact-icon" />
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

              <div className="contact-detail">
                <FaLinkedin className="contact-icon" />
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

            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:zaid@example.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>

            <div className="form-group">
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

            <div className="form-group">
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

            <div className="form-group">
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
              <div className="success-message">
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
