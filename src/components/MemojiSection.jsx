import React from "react";
import MemojiFace from "../assets/images/memoji-face.webp";
import "../styles/MemojiSection.css";

const MemojiSection = () => {
  return (
    <div className="memoji-box-styles">
      <div className="memoji-background">
        <img src={MemojiFace} alt="" />
      </div>
      <div className="memo-name">
        <h1>Feliciano Napi Ferreira</h1>
      </div>
      <div className="memo-role">
        <p>Software Developer</p>
      </div>
      <hr />
    </div>
  );
};

export default MemojiSection;
