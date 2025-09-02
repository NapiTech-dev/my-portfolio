import React from "react";
import NavBar from "./NavBar.jsx";
import AboutSection from "./AboutSection.jsx";
import SkillSection from "./SkillSection.jsx";
import TestimonialSection from "./TestimonialSection.jsx"
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard-styles">
      <NavBar />
      <AboutSection />
      <SkillSection />
      <TestimonialSection />
    </div>
  );
};

export default Dashboard;
