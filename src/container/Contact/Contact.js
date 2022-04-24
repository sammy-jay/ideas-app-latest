import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <motion.div
        whileInView={{ x: [-10, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <p>Get Started</p>
      </motion.div>
      <motion.div
        whileInView={{ x: [-10, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h2>Get in Touch with Us</h2>
      </motion.div>
      <motion.div
        whileInView={{ x: [-10, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <textarea cols="60" rows="10" placeholder="Your message"></textarea>
      </motion.div>
      <motion.div
        whileInView={{ x: [-10, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="contact-two">
          <input type="text" placeholder="Your email" />
          <button>Send</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
