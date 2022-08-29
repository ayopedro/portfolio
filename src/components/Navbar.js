import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import styles from "./Navbar.module.css";
import { AnimatePresence } from "framer-motion";

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
  if(isOpen === true && width < 768) {
      document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Ayotunde</div>
      <div
        className={isOpen ? `${styles.navMenu} ${styles.open}` : styles.navMenu}
        onClick={toggleHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <AnimatePresence>
        {isOpen && <NavMenu />}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
