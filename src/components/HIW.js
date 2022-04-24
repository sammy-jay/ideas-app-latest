import React from "react";
import "./HIW.css";

const HIW = ({ Icon, text, desc }) => {
  return (
    <div className="hiw">
      <Icon fontSize="27px" />
      <h3>{text}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default HIW;
