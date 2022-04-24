import React, { useState } from "react";
import "./About.css";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { motion } from "framer-motion";
import aboutImg from "../../assets/Rectangle 83.png";
import howItWorks from "../../assets/hiw.png";
import { BsToggleOn } from "react-icons/bs";

import HIW from "../../components/HIW";
import { fontWeight } from "@mui/system";

const About = () => {
  const [value, setValue] = useState("Buyers");
  const handleChange = (e, newValue) => setValue(newValue);

  return (
    <section className="section" id="about">
      <div className="about">
        <motion.div
          whileInView={{ x: [-10, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div>
            <img className="img-cont" src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className="about__content">
            <h2>About Ideasmarketplace</h2>
            <p>
              Ideasmarketplace is an online marketplace that connects buyers and
              sellers of ideas and intellectual property (IP) together. The
              marketplace will display ideas from different industries and
              categories including patents, copyrights, utility models,
              television commercials, print ads, new application ideas for
              mobile devices, product improvement ideas, reality television
              ideas, business strategy ideas and much more
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ scale: [0.85, 1] }}
        transition={{ duration: 1 }}
        id="hiw"
      >
        <div className="howItWorks">
          <div className="howItWorksOne">
            <h2>How it Works</h2>
            <p>
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
            <ToggleButtonGroup
              value={value}
              onChange={handleChange}
              exclusive
              color="primary"
              style={{
                margin: "10px 0px 20px",
                padding: "5px",
                backgroundColor: "rgba(27, 36, 50, 0.1)",
                borderRadius: "5px",
                width: "max-content",
                color: "#000",
                fontWeight: "600",
                textTransform: "capitalise",
              }}
            >
              <ToggleButton
                value="Buyers"
                style={{
                  backgroundColor: value === "Buyers" ? "#fff" : "transparent",
                  borderRadius: "5px",
                  border: "none",
                  color: "#000",
                  padding: "7px 20px",

                  marginRight: "5px",
                }}
              >
                Buyers
              </ToggleButton>
              <ToggleButton
                value="Sellers"
                style={{
                  backgroundColor: value === "Sellers" ? "#fff" : "transparent",
                  border: "none",
                  color: "#000",
                  borderRadius: "5px",
                  padding: "7px 20px",
                }}
              >
                Sellers
              </ToggleButton>
            </ToggleButtonGroup>
            <div className="outerDiv">
              <HIW
                Icon={BsToggleOn}
                text="Create an account"
                desc="Start by downloading the app and sign up"
              />
              <HIW
                Icon={BsToggleOn}
                text="Create an account"
                desc="Start by downloading the app and sign up"
              />
              <HIW
                Icon={BsToggleOn}
                text="Create an account"
                desc="Start by downloading the app and sign up"
              />
              <HIW
                Icon={BsToggleOn}
                text="Create an account"
                desc="Start by downloading the app and sign up"
              />
            </div>
          </div>
          <div className="howItWorksTwo">
            <img src={howItWorks} alt="" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
