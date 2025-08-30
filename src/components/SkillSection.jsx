import React from "react";
import "../styles/SkillSection.css";

const SkillSection = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-box">
        <div className="skill-box">
          <div className="icon-background"></div>
          <div className="skill-details">
            <div className="skill-title">Web App</div>
            <div className="skill-text">
              I build scalable, efficient, and responsive web applications using
              modern frameworks and best practices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
