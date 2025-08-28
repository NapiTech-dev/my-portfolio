import React from "react";
import Dashboard from "../Dashboard.jsx";
import SideBar from "../SideBar.jsx";
import "../../styles/ParentBox.css";

const ParentBox = () => {
  return (
    <div className="box-style">
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default ParentBox;
