import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Work from "../components/Work";
import Footer from "../components/Footer";

function Home() {
  const mainVariants = {
    exit: {
      x: "-100vw",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.main variants={mainVariants} exit="exit">
      <Header />
      <Work />
      <Footer />
    </motion.main>
  );
}

export default Home;
