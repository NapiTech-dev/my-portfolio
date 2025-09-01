import React from "react";
import "../styles/SkillSection.css";

function SkillSection() {
  const skills = [
    {
      title: "Web App",
      text: "I build scalable, efficient, and responsive web applications.",
    },
    {
      title: "UI/UX Design",
      text: "I design clean, modern, and intuitive user interfaces.",
    },
    {
      title: "Mobile App",
      text: "I create iOS & Android apps with seamless user experiences.",
    },
    {
      title: "IT Support",
      text: "I provide reliable IT support and system optimization.",
    },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-box">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="icon-background">
              <span className="icon-itself"></span>
            </div>
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
