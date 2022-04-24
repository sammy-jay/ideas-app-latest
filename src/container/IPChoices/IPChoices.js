import React from "react";
import "./IPChoices.css";
import { IoSchool } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import { TiFlash } from "react-icons/ti";
import { AiFillCloud } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Ipchoices from "../../components/Ipchoices";

const IPChoices = () => {
  return (
    <div className="ipchoices" id="features">
      <div className="ipchoices-part-one">
        <h2>IP Choices</h2>
        <p>
          these are all the cateogires of ideas that’s been posted by creators
          and more categories will be uploaded soon
        </p>
      </div>
      <div className="ipchoices-div">
        <Ipchoices
          Icon={IoSchool}
          text="CONTENT"
          desc="Find unique, pre-written articles developed by freelance content writers, professional writers and editors from topics ranging from cooking to healthcare, entertainment, lifestyle, business, politics etc. Choose the language, topic, length, tone, keywords, and layout all on the ideasmarketplace."
        />

        <Ipchoices
          Icon={AiFillSetting}
          text="PATENTS"
          desc="You can also use Ideas Marketplace when searching for patents rights to buy or in-license, or when you are looking for partners for innovation projects that builds on patentable knowledge."
        />

        <Ipchoices
          Icon={AiFillCloud}
          text="COPYRIGHTS"
          desc="You can also use Ideas Marketplace when searching for IP rights to buy or in-license, or when you are looking for partners for innovation projects that builds on patentable knowledge."
        />

        <Ipchoices
          Icon={BsToggleOn}
          text="TRADEMARKS"
          desc="Your old, non-used trademark has still value! You can sell it, or license it, and obtain a financial counterpart. Ideas marketplace helps you to monetize your trademark rights. Your trademark is an intangible assets and is protected against theft or unauthorized use."
        />

        <Ipchoices
          Icon={BsFillPersonFill}
          text="DESIGNS"
          desc="Explore and find top designs created by the very talented designer community on the ideasmarketplace from graphic designs, logos, websites, Stock Photos & PSD files, fashion designs and illustrations and more."
        />

        <Ipchoices
          Icon={TiFlash}
          text="BUSINESS IDEAS"
          desc="A great idea is just an idea unless you have the time and financial resources to develop it into a marketable product. Find hundreds of big ideas from individuals and thinkers looking to sell their ideas to investors and businesses who can develop these ideas into real products."
        />
      </div>
    </div>
  );
};

export default IPChoices;
