import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProfilePicture from "../assets/ayotunde.png";
import styles from "./Header.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Header() {
  const welcomeVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "anticipate",
      },
    },
  };

  const skillsVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 2.5,
        ease: "anticipate",
      },
    },
  };

  const imageVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        duration: 1.5,
        ease: "anticipate",
      },
    },
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <motion.div
          variants={welcomeVariant}
          animate="visible"
          initial="hidden"
          className={styles.welcome}
        >
          <h1>Hi, I'm Ayotunde Pedro</h1>
          <h2>
            A <span>Full Stack Developer</span>
          </h2>
          <p>
            I help brands create mobile and web applications that improve the
            daily lives of humans. I do not restrict myself to just buidling
            alone, I also teach people especially teenagers how to code with
            HTML, CSS and JavaScript.
          </p>
          <Link to="/about">
            <button className={styles.btn}>Read More</button>
          </Link>
        </motion.div>
        <motion.ul
          variants={skillsVariant}
          animate="visible"
          initial="hidden"
          className={styles.skills}
        >
          <li>
            <span>
              <FaHtml5 />
            </span>
            HTML
          </li>
          <li>
            <span>
              <FaCss3Alt />
            </span>
            CSS
          </li>
          <li>
            <span>
              <FaBootstrap />
            </span>
            BOOTSTRAP
          </li>
          <li>
            <span>
              <IoLogoJavascript />
            </span>
            JAVASCRIPT
          </li>
          <li>
            <span>
              <FaReact />
            </span>
            REACT
          </li>
          <li>
            <span>
              <SiMongodb />
            </span>
            MONGODB
          </li>
          <li>
            <span>
              <FaNodeJs />
            </span>
            NODEJS
          </li>
        </motion.ul>
      </div>
      <motion.div
        variants={imageVariant}
        animate="visible"
        initial="hidden"
        className={styles.img}
      >
        <div className={styles.imgBorder}>
          <img src={ProfilePicture} alt="Ayotunde Pedro" />
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
