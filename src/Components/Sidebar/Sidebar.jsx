import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Risk Hawk</h3>
      <ul>
        <li>Internal Audit</li>
        <li>UAT Testing</li>
        <li>Interact</li>
        <li>Queue</li>
        <li>Workflow</li>
        <li>Admin</li>
        <li>Parent</li>
      </ul>
    </div>
  );
};

export default Sidebar;
