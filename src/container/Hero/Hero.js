import React, { useState } from "react";
import "./Hero.css";
import { motion } from "framer-motion";

import air from "../../assets/air.png";
import rocket from "../../assets/rocket.png";
import planet from "../../assets/planet.png";

const Hero = () => {
  return (
    <div className="bg-one">
      <motion.img
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        src={air}
        alt=""
        className="air"
      />
      <motion.img
        whileInView={{ y: [300, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        src={rocket}
        alt=""
        className="rocket"
      />

      <motion.img
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        src={planet}
        alt=""
        className="planet"
      />

      <div className="bg-two"></div>
      <div className="bg-three"></div>
      <div className="bg-four"></div>

      <div className="hero-content">
        <motion.h1
          whileInView={{ x: [-10, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          A whole world of ideas at you fingertips
        </motion.h1>
        <motion.p
          whileInView={{ x: [-10, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          We make it easy to work with professionals, creative experts from
          around the world and build your brand through custom, memorable design
        </motion.p>
        <motion.button
          whileInView={{ x: [-10, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
