import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer-content"]}>
          <div className={styles["footer-text"]}>
            <p>© 2026 Zaid Gebremeskel. All rights reserved.</p>
            <p>Built with React + Vite</p>
          </div>
          <p className={styles["footer-thanks"]}>Thank you for visiting!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
