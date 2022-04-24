import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  window.addEventListener("scroll", () => setIsOpen(false));
  const handleBg = () => {
    if (window.scrollY >= 50) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleBg);

    return () => {
      window.removeEventListener("scroll", handleBg);
    };
  });

  return (
    <div className="nav" style={{ backgroundColor: changeBg && "white" }}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={`nav-links`}>
        <a style={{ color: changeBg && "#222" }} href="#">
          Home
        </a>
        <a style={{ color: changeBg && "#222" }} href="#about">
          About
        </a>
        <a style={{ color: changeBg && "#222" }} href="#features">
          Features
        </a>
        <a style={{ color: changeBg && "#222" }} href="#hiw">
          How it works
        </a>
        <a style={{ color: changeBg && "#222" }} href="#faq">
          FAQ
        </a>
        <a style={{ color: changeBg && "#222" }} href="#contact">
          Contact
        </a>
      </div>
      <div
        className="menu-btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BiMenuAltRight style={{ color: changeBg && "#222" }} />
      </div>

      <div className={`nav-links2 ${isOpen ? "isOpen" : "isClosed"}`}>
        <a style={{ color: changeBg && "#222" }} href="#">
          Home
        </a>
        <a style={{ color: changeBg && "#222" }} href="#about">
          About
        </a>
        <a style={{ color: changeBg && "#222" }} href="#features">
          Features
        </a>
        <a style={{ color: changeBg && "#222" }} href="#hiw">
          How it works
        </a>
        <a style={{ color: changeBg && "#222" }} href="#faq">
          FAQ
        </a>
        <a style={{ color: changeBg && "#222" }} href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
