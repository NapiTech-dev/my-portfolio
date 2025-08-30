import React from "react";
import "../styles/SkillSection.css";

function SkillSection() {
  const skills = [
    {
      title: "Web App",
      text: "I build scalable, efficient, and responsive web applications using modern frameworks and best practices.",
    },
    {
      title: "Web App",
      text: "I build scalable, efficient, and responsive web applications using modern frameworks and best practices.",
    },
    {
      title: "Web App",
      text: "I build scalable, efficient, and responsive web applications using modern frameworks and best practices.",
    },
    {
      title: "Web App",
      text: "I build scalable, efficient, and responsive web applications using modern frameworks and best practices.",
    },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-box">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="icon-background"></div>
            <div className="skill-details">
              <div className="skill-title">{skill.title}</div>
              <div className="skill-text">{skill.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
