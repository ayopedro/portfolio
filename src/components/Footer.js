import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>Let's work together</h2>
      <div className={styles.footerBase}>
        <div className={styles.cta}>
          <a
            href="mailto:ayopedro2012@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Send an Email
          </a>
          <a
            href="https://wa.me/2349014563785?text=Hi%20Ayotunde%2C"
            target="_blank"
            rel="noreferrer"
          >
            Send a WhatsApp Message
          </a>
        </div>
        <div className={styles.social}>
          <a
            className={styles.social__icon}
            href="https://www.twitter.com/codedByPedro"
          >
            <FaTwitterSquare />
          </a>
          <a
            className={styles.social__icon}
            href="https://www.linkedin.com/in/"
          >
            <FaLinkedin />
          </a>
          <a
            className={styles.social__icon}
            href="https://www.github.com/ayopedro"
          >
            <FaGithub />
          </a>
        </div>
      </div>
        <div className={styles.attribution}>
          <small>
            Built with ❤️ using
            <span>
              <FaReact />
            </span>. Designed by <span className={styles.design}>@itshighbk</span>
          </small>
        </div>
    </footer>
  );
}

export default Footer;
