import React from "react";
import styles from "./NavMenu.module.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

function NavMenu() {
  const navVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        duration: 2,
        ease: "anticipate",
      },
    },
  };

  return (
    <motion.div
      variants={navVariant}
      animate="visible"
      initial="hidden"
      exit="exit"
      className={styles.nav__right}
    >
      <ul className={styles.nav__links}>
        <li className={styles.nav__link}>Portfolio</li>
        <li className={styles.nav__link}>Resume</li>
        <li className={styles.nav__link}>Contact Me</li>
      </ul>
      <div className={styles.social}>
        <a
          className={styles.social__icon}
          href="https://www.twitter.com/codedByPedro"
        >
          <FaTwitterSquare />
        </a>
        <a className={styles.social__icon} href="https://www.linkedin.com/in/">
          <FaLinkedin />
        </a>
        <a
          className={styles.social__icon}
          href="https://www.github.com/ayopedro"
        >
          <FaGithub />
        </a>
      </div>
    </motion.div>
  );
}

export default NavMenu;
