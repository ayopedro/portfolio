import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowsize, setWindowSize] = useState(getWindowSize());

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  let width = windowsize.innerWidth;

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    width > 767 ? setIsOpen(true) : setIsOpen(false);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const navVariant = {
    visible: {
      translateX: isOpen ? 0 : "100vw",
      transition: {
        duration: 1.5,
        ease: "anticipate",
      },
    },
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Ayotunde</div>
      <div
        id="nav-icon"
        className={isOpen ? `${styles.navMenu} ${styles.open}` : styles.navMenu}
        onClick={toggleHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <motion.div
        variants={navVariant}
        animate="visible"
        initial={false}
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
      </motion.div>
    </nav>
  );
}

export default Navbar;
