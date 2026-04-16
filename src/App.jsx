import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";


// Page imports
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import Team from "./pages/Team";


// AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GlobalCursor from "./components/GlobalCursor";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures page scroll resets on route change */}
      <Navbar />
      <GlobalCursor />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
