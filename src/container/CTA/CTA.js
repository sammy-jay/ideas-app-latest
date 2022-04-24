import React from "react";
import "./CTA.css";
import MobileStoreButton from "react-mobile-store-button";
import iphone from "../../assets/iphonex.png";
import iphone2 from "../../assets/iphonex2.png";
import iphone3 from "../../assets/iphonex3.png";
const CTA = () => {
  return (
    <div className="cta">
      <h2>The Second Sneak-Peek of ideamarketplace app</h2>
      <div className="btn-container">
        <MobileStoreButton
          store="android"
          url="#"
          height={100}
          linkProps={{ title: "Android Store Button" }}
        />
        <MobileStoreButton
          store="ios"
          url="#"
          height={60}
          width={200}
          className="tester"
          linkProps={{ title: "iOS Store Button" }}
        />
      </div>
      <div className="img-container">
        <div className="img-one">
          <img src={iphone} alt="" />
        </div>
        <div className="img-two">
          <img src={iphone2} alt="" />
        </div>
        <div className="img-three">
          <img src={iphone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
