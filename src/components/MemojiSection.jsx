import React from "react";
import MemojiFace from "../assets/images/memoji-face.webp";
import "../styles/MemojiSection.css";

const MemojiSection = () => {
  return (
    <div className="memoji-box-styles">
      <div className="memoji-background">
        <img src={MemojiFace} alt="" />
      </div>
    </div>
  );
};

export default MemojiSection;
