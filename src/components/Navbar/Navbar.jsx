import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaRoute,
  FaCode,
  FaTrophy,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isRotating, setIsRotating] = useState(false);

  const navLinks = [
    { name: "Home", href: "hero", icon: FaHome },
    { name: "About", href: "about", icon: FaUser },
    { name: "Journey", href: "journey", icon: FaRoute },
    { name: "Skills", href: "skills", icon: FaCode },
    { name: "Achievements", href: "achievements", icon: FaTrophy },
    { name: "Projects", href: "projects", icon: FaProjectDiagram },
    { name: "Learning", href: "learning", icon: FaGraduationCap },
    { name: "Contact", href: "contact", icon: FaEnvelope },
  ];

  // Apply theme to <body> and persist to state
  const applyTheme = (selectedTheme) => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${selectedTheme}-theme`);
    setTheme(selectedTheme);
  };

  // On mount: read saved theme, fall back to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Trigger a brief rotation animation on click
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      for (let link of navLinks) {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    setActiveSection(href);
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-logo"]}>
          <span className={styles["logo-text"]}>ZG</span>
        </div>

        {/* Desktop Navigation */}
        <div className={styles["nav-menu"]}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`${styles["nav-link"]} ${activeSection === link.href ? styles.active : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right-side controls: theme toggle + hamburger */}
        <div className={styles["navbar-actions"]}>
          <button
            type="button"
            className={`${styles["theme-toggle"]} ${isRotating ? styles.rotating : ""}`}
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Activate dark mode" : "Activate light mode"
            }
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-nav-menu"
          className={`${styles["mobile-menu"]} ${isOpen ? styles.active : ""}`}
        >
          {navLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <a
                key={link.href}
                href={`#${link.href}`}
                className={`${styles["mobile-nav-link"]} ${activeSection === link.href ? styles.active : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                <LinkIcon className={styles["mobile-nav-icon"]} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
