// import { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "hero" },
//     { name: "About", href: "about" },
//     { name: "Journey", href: "journey" },
//     { name: "Skills", href: "skills" },
//     { name: "Achievements", href: "achievements" },
//     { name: "Projects", href: "projects" },
//     { name: "Learning", href: "learning" },
//     { name: "Contact", href: "contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       // Detect active section
//       for (let link of navLinks) {
//         const section = document.getElementById(link.href);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(link.href);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (href) => {
//     setIsOpen(false);
//     setActiveSection(href);
//     const element = document.getElementById(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <span className="logo-text">ZG</span>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="nav-menu">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={`#${link.href}`}
//               className={`nav-link ${activeSection === link.href ? "active" : ""}`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavClick(link.href);
//               }}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={`#${link.href}`}
//               className={`mobile-nav-link ${activeSection === link.href ? "active" : ""}`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavClick(link.href);
//               }}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isRotating, setIsRotating] = useState(false);

  const navLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Journey", href: "journey" },
    { name: "Skills", href: "skills" },
    { name: "Achievements", href: "achievements" },
    { name: "Projects", href: "projects" },
    { name: "Learning", href: "learning" },
    { name: "Contact", href: "contact" },
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

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">ZG</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`nav-link ${activeSection === link.href ? "active" : ""}`}
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
        <div className="navbar-actions">
          <button
            type="button"
            className={`theme-toggle ${isRotating ? "rotating" : ""}`}
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Activate dark mode" : "Activate light mode"
            }
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`mobile-nav-link ${activeSection === link.href ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
