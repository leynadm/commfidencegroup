import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css"

function App() {
  return (
    <Router basename="/commfidencegroup">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
