import React from "react";
import NavBar from "./NavBar.jsx";
import AboutSection from "./AboutSection.jsx";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard-styles">
      <NavBar />
      <AboutSection />
    </div>
  );
};

export default Dashboard;
