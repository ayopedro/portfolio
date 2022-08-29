import React, { useEffect } from "react";
import Card from "../UI/Card";
import { motion, useAnimation } from "framer-motion";
import styles from "./Work.module.css";
import webPages from "../assets/data";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Work() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  const content = webPages.map(({ title, id, url, type }) => {
    return <Card key={id} title={title} url={url} type={type} />;
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
          delay: .8,
        },
      });
    }
    if (!inView) {
      animation.start({ y: "50vh", opacity: 0 });
    }
  }, [inView, animation]);

  const headingVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut"
      },
    },
  };

  return (
    <section ref={ref} className={styles.work}>
    <div className={styles.title}>
      <motion.h2
        variants={headingVariant}
        initial="hidden"
        animate="visible"
        className={styles.heading}
      >
        Some of my work
      </motion.h2>
        <Link to='/projects'>
            <button className={styles.btn}>View More</button>
        </Link>
    </div>
      <motion.div animate={animation} className={styles.card}>
        {content}
      </motion.div>
    </section>
  );
}

export default Work;
