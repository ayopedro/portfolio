import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaReact } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Footer() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          // delay: .8,
        },
      });
    }
    if (!inView) {
      animation.start({ y: "20vh", opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <motion.footer ref={ref} animate={animation} className={styles.footer}>
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
          </span>
          . Designed by <span className={styles.design}>@itshighbk</span>
        </small>
      </div>
    </motion.footer>
  );
}

export default Footer;
