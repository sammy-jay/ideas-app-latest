import React from "react";
import "./Services.css";
import image from "../../assets/Rectangle 85.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services">
      <motion.div
        whileInView={{ x: [-10, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="services-one">
          <h2>World-class ideas marketpace. At your service.</h2>
          <p>
            Ideasmarketplace is the go-to idea service. We make it easy to work
            with professional, creative experts from around the world and build
            your brand through custom, memorable design.
          </p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        `{" "}
        <div>
          <img src={image} alt="" />
        </div>
        `
      </motion.div>
    </div>
  );
};

export default Services;
