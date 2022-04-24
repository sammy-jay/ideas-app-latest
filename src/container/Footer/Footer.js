import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-one">
        <div>
          <img src={logo} alt="" />
        </div>
        <motion.div
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
        >
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </motion.div>
      </div>
      <div className="hrule" />
      <div className="footer-two">
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
        >
          <div className="footer-two-first">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">How it works</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
        >
          <div>
            <p>© 2022 Ideasmarketplace. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
