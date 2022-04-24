import React from "react";
import "./Ipchoices.css";
import { motion } from "framer-motion";

const Ipchoices = ({ Icon, text, desc }) => {
  return (
    <motion.div
      whileInView={{ y: [200, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="ipchoice">
        <Icon fontSize="30px" />
        <h3>{text}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default Ipchoices;
