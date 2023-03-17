import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { ReactComponent as OriginalLogoSVG } from "../logos/logo-no-background.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <div>
          <OriginalLogoSVG className="header-logo" />
        </div>
        <nav ref={navRef}>
          <Link to="/">
            Home
          </Link>
          <Link to="/services">
            Services
          </Link>
          <Link to="about">
            About
          </Link>
          <Link to="contact">
            Contact
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          </nav>        
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>

      </header>
    </div>
  );
}

export default Navbar;