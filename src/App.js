import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
